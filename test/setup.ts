import { Blob as BlobPolyfill } from 'node:buffer';

global.Blob = BlobPolyfill as any;