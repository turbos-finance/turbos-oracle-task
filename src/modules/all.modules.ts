import { Module } from "@nestjs/common";

// modules
import { AppModule } from './app/app.module';
import { ConfigModule } from "./config/config.module";
import { TasksModule } from "./tasks/tasks.module";

@Module({
  imports: [
    AppModule,
    ConfigModule,
    TasksModule,
  ],
  providers: [
  ]
})

export class AllModule { }