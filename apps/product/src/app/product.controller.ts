import { Controller, Get,Post,Body,Res } from '@nestjs/common';
//import { Product } from './schema/product.schema';
import { CreateProductDto } from '@nx-dbpe/dto';
import { UpdateProductDto } from '@nx-dbpe/dto';
import { ProductService } from './product.service';
import { Response } from 'express';
import { GrpcMethod } from '@nestjs/microservices';
@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @GrpcMethod('ProductServiceInterface','AddProduct')
addProduct(createProductDto:CreateProductDto):any{
  console.log("createProductDto",createProductDto)
  return this.productService.addProductService(createProductDto)
}
}
