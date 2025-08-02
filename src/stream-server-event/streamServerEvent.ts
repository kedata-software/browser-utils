import type { StreamServerEventOptions } from './streamServerEvent.types';
import parseServerEvent from '../parse-server-event';

const streamServerEvent = async (
  body: ReadableStream<Uint8Array>,
  options: StreamServerEventOptions = {},
) => {
  const reader = body.getReader();
  const utf8Decoder = new TextDecoder('utf-8');

  return new Promise<void>(async (resolve) => {
    root: while (true) {
      const { done, value } = await reader.read();

      if (done) break;
      const text = utf8Decoder.decode(value, { stream: true });
      const items = parseServerEvent(text);

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
