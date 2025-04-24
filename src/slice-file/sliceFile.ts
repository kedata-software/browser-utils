import getChecksum from "../get-checksum";

const sliceFile = async (params: SliceFileParams): Promise<SliceFileReturn> => {
  const { file, chunkSize, start = 0 } = params;
  const end = start + chunkSize;

  const chunk = file.slice(start, end);
  const checksum = await getChecksum(chunk);

  return {
    chunk,
    checksum,
    end,
  };
};

type SliceFileParams = {
  /**
   * @description The file to be sliced
   */
  file: File;
  /**
   * @description The size of each chunk in bytes
   */
  chunkSize: number;
  /**
   * @description The starting position of the slice in bytes
   * @default 0
   */
  start?: number;
};

type SliceFileReturn = {
  /**
   * @description The sliced file
   */
  chunk: Blob;
  /**
   * @description The checksum of the sliced file
   */
  checksum: string;
  /**
   * @description The ending position of the slice in bytes. Use it as `start` for the next slice.
   */
  end: number;
};

export default sliceFile;
