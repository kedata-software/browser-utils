import { expect, it, describe } from 'vitest';
import parseServerEvent from './parseServerEvent';

describe('parseServerEvent', () => {
  it('should parse the data received from a server-sent event (SSE) and return an MessageEvent', () => {
    const message = `
      event: message
      data: hello world
      id: 1
    `;

    const [result] = parseServerEvent(message);
    expect(result).instanceOf(MessageEvent);
    expect(result.data).toBe('hello world');
    expect(result.lastEventId).toBe('1');
    expect(result.type).toBe('message');
  });

  it('should parse multiple messages', () => {
    const message = `
      event: message
      data: hello world
      id: 1

      event: message
      data: hello: world
      id: 2
    `;

    const [result1, result2] = parseServerEvent(message);
    expect(result1).instanceOf(MessageEvent);
    expect(result1.data).toBe('hello world');
    expect(result1.lastEventId).toBe('1');
    expect(result1.type).toBe('message');

    expect(result2).instanceOf(MessageEvent);
    expect(result2.data).toBe('hello: world');
    expect(result2.lastEventId).toBe('2');
    expect(result2.type).toBe('message');
  });

  it('should skip empty key', () => {
    const message = `
      event: message
      data: hello world
      id: 2
      : empty
    `;

    const [result] = parseServerEvent(message);

    expect(result).instanceOf(MessageEvent);
    expect(result.data).toBe('hello world');
    expect(result.lastEventId).toBe('2');
    expect(result.type).toBe('message');
  });
});
