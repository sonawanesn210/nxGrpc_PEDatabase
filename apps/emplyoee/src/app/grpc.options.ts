import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

// Same options object used by microservice server
export const microserviceOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
      url:'localhost:5000',
      package: 'product',
      protoPath: join(__dirname, '../../../api/product.proto'),
    },
  }
