import { Injectable } from '@nestjs/common/decorators';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './schema/product.schema';
import { CreateProductDto } from '@nx-dbpe/dto';
import { UpdateProductDto } from '@nx-dbpe/dto';
@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private products: Model<ProductDocument>
  ) {}

  //creating new student

  async addProductService(createProductDto:CreateProductDto): Promise<Product> {
    const newProduct =await new this.products(createProductDto);

    return newProduct.save()
   
  }

  
}

//////////////////////////////////////////////////////////////////

