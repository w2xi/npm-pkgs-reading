import { Queue } from '../src';
import { expect, describe, test } from 'vitest';

describe('Queue', () => {
  const queue = new Queue();

  test('should create a new queue', () => {
    expect(queue).toBeInstanceOf(Queue);
  });

  test('should enqueue a value', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.size).toBe(3);
  });

  test('should dequeue a value', () => {
    queue.clear();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.size).toBe(2);
  });

  test('should clear the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.clear();
    expect(queue.size).toBe(0);
  });

  test('should iterate over the values in the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    const values = [...queue];
    expect(values).toEqual([1, 2, 3]);
  });
});
