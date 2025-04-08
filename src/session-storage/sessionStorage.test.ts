import sessionStorage from './sessionStorage';
import { describe, it, expect } from 'vitest';

describe('sessionStorage', () => {
  it('Should set and get item', () => {
    sessionStorage.setItem('test', 'test');
    const value = sessionStorage.getItem('test');
    expect(value).toBe('test');
  });

  it('Should return invalid json', () => {
    window.sessionStorage.setItem('test', '{"test": 1');
    const value = sessionStorage.getItem('test');
    expect(value).toBe(null);
  });

  it('Should remove item', () => {
    sessionStorage.setItem('test', 'test');
    sessionStorage.removeItem('test');
    const value = sessionStorage.getItem('test');
    expect(value).toBeNull();
  });

  it('Should clear', () => {
    sessionStorage.setItem('test', 'test');
    sessionStorage.clear();
    const value = sessionStorage.getItem('test');
    expect(value).toBeNull();
  });

  it('Should get length', () => {
    expect(sessionStorage.length).toBe(0);
  });

  it('Should return key from index', () => {
    sessionStorage.setItem('test', 'test');
    const key = sessionStorage.key(0);
    expect(key).toBe('test');
  });
});
