import { TaskItem } from '../../../../types';

export const fakeRequest = (item: TaskItem) => {
  console.log('Calling server API with...' + item.index);
  const mathRandom = Math.random();
  const random = `${mathRandom}`.charAt(2);
  const randomTimeout = Number(`${random}000`);

  return new Promise((resolve, reject) => {
    const isValid = mathRandom < 0.8;
    const response: TaskItem = {
      ...item,
      result: item.index * item.index,
      status: isValid ? 'done' : 'error',
    };

    setTimeout(() => resolve(response), randomTimeout);
  });
};