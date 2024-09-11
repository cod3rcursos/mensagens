import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationExceptionFilter } from './filter/validation-exception.filter';
import { InternalExceptionFilter } from './filter/internal-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalFilters(new ValidationExceptionFilter());
  app.useGlobalFilters(new InternalExceptionFilter());
  await app.listen(4000);
}
bootstrap();
