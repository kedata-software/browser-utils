/**
 * @description Create a URL object from a path using `window.location.origin` as the base URL.
 * @description This only works in the browser.
 * @param {string} path
 */
const createUrl = (path: string) => {
  return new URL(path, window.location.origin);
};

export default createUrl;
