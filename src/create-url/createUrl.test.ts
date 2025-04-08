import createUrl from './createUrl';
import { describe, it, expect } from 'vitest';

describe('createUrl', () => {
  it('Should create url', () => {
    const url = createUrl('/test');
    expect(url.pathname).toBe('/test');
  });
});
