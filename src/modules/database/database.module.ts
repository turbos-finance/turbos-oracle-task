import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';

// import config from './config';
import { ConfigModule } from "../config/config.module";
import { ConfigService } from "../config/config.service";

// mysql orm
import { FaucetEntity } from "../../entities/faucet.entity";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        name: 'db',
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [
          FaucetEntity,
        ],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {

}