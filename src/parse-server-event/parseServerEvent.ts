/**
 * @description
 * Parses the data received from a Server-Sent Event (SSE) and returns an MessageEvent.
 *
 * The data is expected to be in the format of:
 * ```
 * event: <event-name>
 * data: <data>
 * id: <id>
 *
 * event: <event-name>
 * data: <data>
 * id: <id>
 *
 * ...
 * ```
 * Follows the spec: https://html.spec.whatwg.org/multipage/server-sent-events.html#event-stream-interpretation
 */
const parseServerEvent = (item: string) => {
  const blocks = item.split('\n\n').filter(Boolean);

  return blocks.map((block) => {
    const linesInBlock = block.split('\n').filter(Boolean);

    const result = linesInBlock.reduce<Record<string, string>>(
      (acc, line) => {
        // Split the row with ":" or ": " and assign the first part as the key and the second part as the value.
        const [key, ...value] = line.split(/:\s?/gm);

        if (!key.trim()) return acc;

        acc[key.trim()] = value.join(': ');

        return acc;
      },
      {} as Record<string, string>,
    );

    return new MessageEvent(result['event'], {
      data: result['data'],
      lastEventId: result['id'],
    });
  });
};

export default parseServerEvent;
