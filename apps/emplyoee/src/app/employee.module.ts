import { Module } from '@nestjs/common';

//import { EmployeeController } from './emp.controller';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
/* import { GrpcMethod, ClientGrpc } from '@nestjs/microservices';
import { join } from 'path';
import { Observable } from 'rxjs'; */

import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
//import { Product } from '@nx-dbpe/dto';
import {Product} from '../../../../schema/product.schema'
@Module({
  imports: [
    Product,
    ClientsModule.register([
      {
        name: "PRODUCT_PACKAGE",
        transport:Transport.GRPC,
        options:{
          package:'product',
          protoPath:join(__dirname, '../../../api/product.proto'),
          url:'localhost:5000'
        }
      }
    ])
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService,Product],
})
export class EmployeeModule {}
 