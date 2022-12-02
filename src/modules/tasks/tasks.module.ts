/**
 * tasks module
 */
import {Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
// import { AddressModule } from '../address/address.module';
// import { CoingeckoModule } from '../coingecko/coingecko.module';
import { ConfigModule } from '../config/config.module';
// import { HttpServerModule } from '../httpserver/httpserver.module';
// import { PriceModule } from '../price/price.module';
// import { ShadowsModule } from '../shadows/shadows.module';

import { TasksService } from './tasks.service';
import { TimeTaskService } from './timeTask.service';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule,
    // PriceModule,
    // ShadowsModule,
    // CoingeckoModule,
    // HttpServerModule,
    // AddressModule
  ],
  providers: [
    TasksService,
    TimeTaskService
  ]
})
export class TasksModule { }