import getChecksum from './getChecksum';
import { describe, it, expect } from 'vitest';

describe('getChecksum', () => {
  it('Should return a checksum', async () => {
    const checksum = await getChecksum(new Blob(['test']));
    expect(checksum).toBe('9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08');
  });
});