import { Queue } from '../src';
import { expect, describe, test } from 'vitest';

describe('Queue', () => {
  const queue = new Queue();

  test('should create a new queue', () => {
    expect(queue).toBeInstanceOf(Queue);
  });

  test('should enqueue a value', () => {
    queue.enqueue('🐮🐴');
    queue.enqueue('🐮🐴');
    expect(queue.size).toBe(2);
  });

  test('should dequeue a value', () => {
    queue.clear();
    queue.enqueue('🐮🐴');
    queue.enqueue('🐮🐴');
    queue.enqueue('🐮🐴');
    expect(queue.dequeue()).toBe('🐮🐴');
    expect(queue.size).toBe(2);
  });

  test('should clear the queue', () => {
    queue.enqueue('🐮🐴');
    queue.enqueue('🐮🐴');
    queue.enqueue('🐮🐴');
    queue.clear();
    expect(queue.size).toBe(0);
  });

  test('should iterate over the values in the queue', () => {
    queue.enqueue('🐮🐴');
    queue.enqueue('🐮🐴');
    queue.enqueue('🐮🐴');
    const values = [...queue];
    expect(values).toEqual(['🐮🐴', '🐮🐴', '🐮🐴']);
  });
});
