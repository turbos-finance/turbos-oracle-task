import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

import { ConfigService } from '../config/config.service';

@Injectable()
export class TasksService {

  constructor(
    private readonly configService: ConfigService,
  ) {
    this.init();
  }


  async init() {

  }

  // every 60s run
  @Cron('0 * * * * *')
  async handleCron() {
   
  }

  // every 2s run
  @Cron('*/2 * * * * *')
  async getQty() {

  }

  // every 1h run
  @Cron('1 0 * * * *')
  async hoursStatistics() {
  }

  // every 30 minute run
  @Cron('0 */30 * * * *')
  async updateContractDate() {
  }

  // every 10 minute run
  @Cron('0 */10 * * * *')
  async tenMinitesRun() {
    
  }
}