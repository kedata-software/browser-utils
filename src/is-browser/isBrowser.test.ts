import isBrowser from './isBrowser';
import { describe, it, expect } from 'vitest';

describe('isBrowser', () => {
  it('Should return true', () => {
    expect(isBrowser()).toBe(true);
  });
});
