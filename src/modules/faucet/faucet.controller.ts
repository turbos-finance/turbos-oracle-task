import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FaucetService } from './faucet.service';

@Controller('faucet')
export class FaucetController {
  constructor(private readonly faucetService: FaucetService) { }

  @Post()
  postGas(@Body() body: any): Promise<any> {
    return this.faucetService.faucet(body.account, body.symbol);
  }
}
