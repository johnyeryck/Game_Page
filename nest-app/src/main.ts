import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    rawBody: true,
  });
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
    allowHeadears: 'Content-Type, Authorization',
  });
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
