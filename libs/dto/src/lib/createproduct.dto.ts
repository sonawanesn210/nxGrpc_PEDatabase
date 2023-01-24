import { IsString, IsNotEmpty, IsNumber, MaxLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly title: string;
  @IsString()
  @IsNotEmpty()
  readonly price: string;
  @IsNumber()
  @IsNotEmpty()
  readonly standerd: number;
 
}
