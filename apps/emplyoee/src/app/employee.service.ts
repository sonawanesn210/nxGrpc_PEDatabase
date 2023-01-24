


import {Inject, Injectable, OnModuleInit } from '@nestjs/common';

import {ProductServiceInterface} from '../../../interface/product.interface'
import  {Client,ClientGrpc} from '@nestjs/microservices';
  import { microserviceOptions } from './grpc.options';
import { CreateProductDto } from '@nx-dbpe/dto';
//import { UpdateProductDto } from '@nx-dbpe/dto';
import { InjectModel } from '@nestjs/mongoose';
//import {Product,ProductDocument} from '@nx-dbpe/dto'
import { Product,ProductDocument } from 'schema/product.schema';
import { Model } from 'mongoose';
@Injectable()

export class EmployeeService {
  public productServiceinterface:ProductServiceInterface
  

  constructor(
    @InjectModel(Product.name) private products: Model<ProductDocument>
    ) {}
  @Client(microserviceOptions)
  private client : ClientGrpc;
  ;

 

  onModuleInit(){
    this.productServiceinterface= this.client.getService<ProductServiceInterface>('ProductServiceInterface')

}

 // public products:Product={} as any;

 

  async AddProduct(createProductDto:CreateProductDto) {
  const newProduct = await new this.products(createProductDto);
  console.log("newProduct from employee",newProduct)
  return newProduct.save()
  
  
  }


  
 
  
}




