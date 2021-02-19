import { QueueTaskApi } from '../../_fake-server';

const queueTask = new QueueTaskApi();

export const QUEUE_TASK = {
  sendTask: queueTask.postTask,
  getResolvedTask: queueTask.getResolvedTask,
}