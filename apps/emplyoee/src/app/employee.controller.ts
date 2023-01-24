import {
  Body,
  Controller,
 Param,
  Delete,
  Get,
  Post,
  Put,
  //OnModuleInit,
} from '@nestjs/common';

import { EmployeeService } from './employee.service';
import { CreateProductDto } from '@nx-dbpe/dto';

@Controller()
export class EmployeeController{ 
 constructor(private readonly employeeService: EmployeeService) {}


  @Post('add')
  AddProduct(@Body() createProductDto:CreateProductDto)/* :any */ {
    console.log("massage from client",createProductDto)

      return  this.employeeService.AddProduct(createProductDto) 
  } 
  

}

