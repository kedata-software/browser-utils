const localStorage = {
  setItem: <V>(key: string, value: V) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: <T>(key: string): T | null => {
    const value = window.localStorage.getItem(key);
    if (!value) return null;
    try {
      return JSON.parse(value);
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  removeItem: (key: string) => {
    window.localStorage.removeItem(key);
  },
  clear: () => window.localStorage.clear(),
  key: (index: number) => window.localStorage.key(index),
  get length() {
    return window.localStorage.length;
  },
};

export default localStorage;
