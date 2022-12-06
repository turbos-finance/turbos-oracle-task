/**
 * tasks module
 */
import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { GasController } from './gas.controller';

import { GasService } from './gas.service';

@Module({
  imports: [
    ConfigModule,
  ],
  controllers: [GasController],
  providers: [
    GasService
  ]
})
export class GasModule { }