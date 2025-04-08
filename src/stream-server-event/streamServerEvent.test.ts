import { expect, it, describe } from 'vitest';
import streamServerEvent from './streamServerEvent';

describe('streamServerEvent', () => {
  it('should stream message event', async () => {
    const body = new ReadableStream<Uint8Array>({
      start(controller) {
        controller.enqueue(
          new TextEncoder().encode('event: message\ndata: hello world\n\n'),
        );
        controller.enqueue(
          new TextEncoder().encode('event: message\ndata: hello: world\n\n'),
        );
        controller.close();
      },
    });

    const onMessage = vitest.fn();

    await streamServerEvent(body, { onMessage });

    expect(onMessage).toHaveBeenCalledTimes(2);
  });

  it('should stream error event', async () => {
    const body = new ReadableStream<Uint8Array>({
      start(controller) {
        controller.enqueue(
          new TextEncoder().encode('event: error\ndata: error message\n\n'),
        );
        controller.close();
      },
    });

    const onError = vitest.fn();

    await streamServerEvent(body, { onError });

    expect(onError).toHaveBeenCalledTimes(1);
  });
});
