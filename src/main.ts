import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AllModule } from './modules/all.modules';
import { ConfigModule } from './modules/config/config.module';
import { ConfigService } from './modules/config/config.service';
import { HttpExceptionFilter } from './exceptionFilters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AllModule);
  const env: any = app.select(ConfigModule).get(ConfigService);

  // global exception
  app.useGlobalFilters(new HttpExceptionFilter());

  app.use(helmet());
  app.enableCors();

  await app.listen(env.envConfig.PORT, () => {
    Logger.log(`web service starting,web port:${env.envConfig.PORT}`);
  });
}
bootstrap();
