/**
 * @description Calculates the checksum of a blob
 * @param {Blob} blob 
 * @param {string} algorithm default is `"SHA-256"`
 * @returns `string`
 */
const getChecksum = async (blob: Blob, algorithm = "SHA-256") => {
  const buffer = await blob.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest(algorithm, buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const checksum = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return checksum;
};

export default getChecksum;
