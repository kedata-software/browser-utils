type StreamServerEventOptions = {
  /**
   * @description Callback for handling messages
   */
  onMessage?: (message: MessageEvent) => void;
  /**
   * @description Callback for handling errors
   */
  onError?: (message: MessageEvent) => void;
};

export type { StreamServerEventOptions };
