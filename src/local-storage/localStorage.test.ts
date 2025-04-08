import localStorage from './localStorage';
import { describe, it, expect } from 'vitest';

describe('localStorage', () => {
  it('Should set and get item', () => {
    localStorage.setItem('test', 'test');
    const value = localStorage.getItem('test');
    expect(value).toBe('test');
  });

  it('Should return invalid json', () => {
    window.localStorage.setItem('test', '{"test": 1');
    const value = localStorage.getItem('test');
    expect(value).toBe(null);
  });

  it('Should remove item', () => {
    localStorage.setItem('test', 'test');
    localStorage.removeItem('test');
    const value = localStorage.getItem('test');
    expect(value).toBeNull();
  });

  it('Should clear', () => {
    localStorage.setItem('test', 'test');
    localStorage.clear();
    const value = localStorage.getItem('test');
    expect(value).toBeNull();
  });

  it('Should get length', () => {
    expect(localStorage.length).toBe(0);
  });

  it('Should return key from index', () => {
    localStorage.setItem('test', 'test');
    const key = localStorage.key(0);
    expect(key).toBe('test');
  });
});
