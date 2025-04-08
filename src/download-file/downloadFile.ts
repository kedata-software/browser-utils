/**
 * @description Download a file on browser
 */
const downloadFile = async (blob: Blob, fileName: string) => {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  a.click();
  a.remove();
};

export default downloadFile;
