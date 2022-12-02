/**
 * tasks module
 */
import {Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '../config/config.module';
import { AumTaskService } from './aumTask.service';

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
    AumTaskService
  ]
})
export class TasksModule { }