/**
 * tasks module
 */
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '../config/config.module';
// import { AumTaskService } from './aumTask.service';
import { PriceBTCTaskService } from './priceBTCTask.service';
import { PriceETHTaskService } from './priceETHTask.service';
import { PriceUSDCTaskService } from './priceUSDCTask.service';

import { TasksService } from './tasks.service';
import { TimeTaskService } from './timeTask.service';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule,
  ],
  providers: [
    TasksService,
    TimeTaskService,
    // AumTaskService,
    PriceBTCTaskService,
    PriceETHTaskService,
    PriceUSDCTaskService
  ]
})
export class TasksModule { }