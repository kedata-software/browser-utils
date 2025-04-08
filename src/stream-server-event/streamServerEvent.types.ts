type StreamServerEventOptions = {
  onMessage?: (message: MessageEvent) => void;
  onError?: (message: MessageEvent) => void;
};

export type { StreamServerEventOptions };
