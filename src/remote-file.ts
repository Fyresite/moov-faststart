import { Readable } from "stream";

export abstract class RemoteFile {
  constructor() { }

  async read(size: number, position: number, stream?: boolean): Promise<Buffer | Readable> {
    return Buffer.alloc(0);
  }

  async size(): Promise<number> {
    return 0
  }
}
