import { appLogger } from '@/services/app-logger';
import {
  MESSAGE_TYPE,
  PingMessagePayload,
  SocketMessage,
  SocketMessageListener,
  ListenersMap,
} from './types';

type WsClientParams = {
  logger: typeof appLogger;
  url: string;
};

export class WsClient {
  constructor(params: WsClientParams) {
    this.url = params.url;
    this.logger = params.logger;
  }

  private connectCounter = 0;

  private reconnectTimeout = 1000 * 20;

  private pingIntervalId: NodeJS.Timeout | null = null;

  private lastTimestamp = 0;

  private listenersMap: ListenersMap = {};

  private readonly PING_PONG_INTERVAL = 1000 * 60;

  private reconnectTimeoutId: NodeJS.Timeout | null = null;

  private socket: WebSocket | null = null;

  public readonly url: string;

  public readonly logger: typeof console;

  private createMessage = (message: string) => {
    return `=== WebSocket ${message} ===`;
  };

  private increaseTimeout = () => {
    switch (this.connectCounter) {
      case 100:
        this.connectCounter = 1000 * 60;
        break;
      case 200:
        this.connectCounter = 1000 * 300;
        break;
      default:
    }
  };

  private reconnect = (): void => {
    if (this.reconnectTimeoutId) {
      clearTimeout(this.reconnectTimeoutId);
    }

    if (this.pingIntervalId) {
      clearInterval(this.pingIntervalId);
    }

    this.increaseTimeout();
    this.reconnectTimeoutId = setTimeout(() => {
      this.connect();
    }, this.reconnectTimeout);
  };

  private handleError = (errorEvent: Event): void => {
    this.reconnect();
    this.logger.error(this.createMessage('error'), errorEvent);
  };

  private handleClose = (closeEvent: CloseEvent): void => {
    this.reconnect();
    this.logger.warn(this.createMessage('close'), closeEvent.code);
  };

  private send = <M>(message: SocketMessage<M>): void => {
    this.socket?.send(JSON.stringify(message));
    // console.log('=== send ===', message);
  };

  private pingRequest = (): void => {
    this.lastTimestamp = Date.now();

    this.send<PingMessagePayload>({
      timestamp: this.lastTimestamp,
      type: MESSAGE_TYPE.PING_REQUEST,
      payload: { timestamp: this.lastTimestamp },
    });
  };

  private startPingPong = (): void => {
    this.pingIntervalId = setTimeout(this.pingRequest, this.PING_PONG_INTERVAL);
  };

  private onPong = (nextTimestamp: number): void => {
    const delay = nextTimestamp - this.lastTimestamp;
    this.logger.log(this.createMessage(`delay: ${delay}`));
    this.startPingPong();
  };

  private handleOpen = (): void => {
    this.on(
      MESSAGE_TYPE.PING_RESPONSE,
      ({ payload }: SocketMessage<PingMessagePayload>) => {
        this.onPong(payload.timestamp);
      },
    );
    this.startPingPong();
    this.connectCounter = 0;
  };

  private handleMessage = (messageEvent: MessageEvent): void => {
    const message = JSON.parse(messageEvent.data);

    this.emitter(message);
    // console.log('=== received ===', message);
  };

  private emitter = (message: SocketMessage<any>): void => {
    const listeners = this.listenersMap[message.type];

    if (listeners) {
      listeners.forEach((action) => {
        action(message);
      });
    }
  };

  public connect = (): void => {
    try {
      this.connectCounter += 1;
      this.socket = new WebSocket(this.url);
      this.socket.binaryType = 'arraybuffer';
    } catch (error) {
      this.reconnect();
      this.logger.error(this.createMessage('connection error'), error);
    }

    if (this.socket) {
      this.socket.onerror = this.handleError;
      this.socket.onclose = this.handleClose;
      this.socket.onopen = this.handleOpen;
      this.socket.onmessage = this.handleMessage;
    }
  };

  public disconnect = (): void => {
    if (this.pingIntervalId) {
      clearInterval(this.pingIntervalId);
    }

    this.socket?.close();

    this.listenersMap = {};
    this.connectCounter = 0;
    this.lastTimestamp = 0;
    this.socket = null;
  };

  public on = (
    messageType: MESSAGE_TYPE,
    listener: SocketMessageListener,
  ): void => {
    const typeListeners = this.listenersMap[messageType];

    this.listenersMap[messageType] = typeListeners
      ? [...typeListeners, listener]
      : [listener];
  };

  public request = <M>(message: SocketMessage<M>): void => {
    this.send<M>(message);
  };
}

export const wsService = new WsClient({
  logger: appLogger,
  url: 'ws://localhost:4000',
});
