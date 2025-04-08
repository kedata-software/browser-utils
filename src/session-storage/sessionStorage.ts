const sessionStorage = {
  setItem: <V>(key: string, value: V) => {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  },
  getItem: <T>(key: string): T | string | null => {
    const value = window.sessionStorage.getItem(key);
    if (!value) return null;
    try {
      return JSON.parse(value);
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  removeItem: (key: string) => {
    window.sessionStorage.removeItem(key);
  },
  clear: () => window.sessionStorage.clear(),
  key: (index: number) => window.sessionStorage.key(index),
  get length() {
    return window.sessionStorage.length;
  },
};

export default sessionStorage;
