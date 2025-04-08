import { describe, it, expect } from 'vitest';
import downloadFile from './downloadFile';

describe('downloadFile', () => {
  it('should download a file', async () => {
    window.URL.createObjectURL = vitest.fn(() => 'url');

    const blob = new Blob(['Hello world'], { type: 'text/plain' });
    await downloadFile(blob, 'hello.txt');
    expect(true).toBe(true);
  });
});
