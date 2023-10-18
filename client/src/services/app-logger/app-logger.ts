type Config = {
  logger: typeof console;
};

class AppLogger {
  instance: typeof console;

  constructor({ logger }: Config) {
    this.instance = logger;
  }

  public error = (message: string, params?: any) => {
    this.instance.error(message, params);
  };

  public log = (message: string, params?: any) => {
    this.instance.log(message, params);
  };

  public warn = (message: string, params?: any) => {
    this.instance.warn(message, params);
  };
}

export const appLogger = new AppLogger({ logger: console });
