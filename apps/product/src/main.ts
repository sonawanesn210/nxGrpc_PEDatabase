/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as path from 'path';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const URL = 'localhost:5000';
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,{
transport:Transport.GRPC,
options:{
  url:URL,
  package:"product",
  protoPath:path.join(__dirname, '../../api/product.proto'),
  

}
    }
  )
  await app.listen();
  console.log('Product service has started');
  Logger.log(
    `🚀 Application is running on: http://localhost:5000`
  );
}

bootstrap();
