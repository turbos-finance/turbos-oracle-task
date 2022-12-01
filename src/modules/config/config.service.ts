import { Injectable } from "@nestjs/common";
import { parse } from 'dotenv';
import { readFileSync } from 'fs';

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string };
  constructor(filePath: string) {
    this.envConfig = parse(readFileSync(filePath));
  }
  get(key: string) {
    return this.envConfig[key];
  }
}