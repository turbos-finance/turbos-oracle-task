import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GasService } from './gas.service';

@Controller('gas')
export class GasController {
  constructor(private readonly gasService: GasService) { }

  @Post()
  postGas(@Body() body: any): Promise<any> {
    return this.gasService.gas(body.account, body.token);
  }
}
