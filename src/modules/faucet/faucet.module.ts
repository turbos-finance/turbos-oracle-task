/**
 * tasks module
 */
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FaucetEntity } from '../../entities/faucet.entity';
import { ConfigModule } from '../config/config.module';
import { FaucetController } from './faucet.controller';

import { FaucetService } from './faucet.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      FaucetEntity,
    ]),
    ThrottlerModule.forRoot({
      ttl: 10,
      limit: 1,
    }),
    ConfigModule,
  ],
  controllers: [FaucetController],
  providers: [
    FaucetService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    }
  ]
})
export class FaucetModule { }