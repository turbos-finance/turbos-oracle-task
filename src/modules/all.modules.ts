import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { ErrorsInterceptor } from "../interceptor/errors.interceptor";
import { TransformInterceptor } from "../interceptor/transform.interceptor";

// modules
import { AppModule } from './app/app.module';
import { ConfigModule } from "./config/config.module";
import { DatabaseModule } from "./database/database.module";
import { FaucetModule } from "./faucet/faucet.module";
import { TasksModule } from "./tasks/tasks.module";

@Module({
  imports: [
    DatabaseModule,
    AppModule,
    ConfigModule,
    TasksModule,
    FaucetModule
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorsInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ]
})

export class AllModule { }