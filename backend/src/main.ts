import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:8080', 
      'http://172.20.34.19:8080',
      'http://localhost:4200', 
      'http://172.20.34.19:4200',
    ],
    methods: ['GET','POST', 'PUT', 'DELETE']
    
  });
  await app.listen(3002);
}
bootstrap();
