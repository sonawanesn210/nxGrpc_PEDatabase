import { PartialType } from '@nestjs/mapped-types';

import { CreateProductDto } from './createproduct.dto';
export class UpdateProductDto extends PartialType(CreateProductDto) {}
