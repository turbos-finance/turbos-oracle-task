import { Module } from "@nestjs/common";
import { join } from 'path';
import { ConfigService } from './config.service';

@Module({
  providers: [{
    provide: ConfigService,
    useValue: new ConfigService(join(process.cwd(), '.env')),
  }],
  exports: [ConfigService]
})
export class ConfigModule { }