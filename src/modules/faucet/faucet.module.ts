/**
 * tasks module
 */
import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { FaucetController } from './faucet.controller';

import { FaucetService } from './faucet.service';

@Module({
  imports: [
    ConfigModule,
  ],
  controllers: [FaucetController],
  providers: [
    FaucetService
  ]
})
export class FaucetModule { }