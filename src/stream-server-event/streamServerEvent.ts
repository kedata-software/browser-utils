import type { StreamServerEventOptions } from './streamServerEvent.types';
import parseServerEvent from '../parse-server-event';

const streamServerEvent = async (
  body: ReadableStream<Uint8Array>,
  options: StreamServerEventOptions = {},
) => {
  const reader = body.pipeThrough(new TextDecoderStream()).getReader();

  return new Promise<void>(async (resolve) => {
    root: while (true) {
      const { done, value } = await reader.read();

      if (done) break;
      const items = parseServerEvent(value);

      for (const item of items) {
        if (item.type === 'message') {
          options.onMessage?.(item);
        }

        if (item.type === 'error') {
          options.onError?.(item);
          break root;
        }
      }
    }

    await reader.cancel();

    return resolve();
  });
};

export default streamServerEvent;
