import { Controller, Get, Post, Body } from '@nestjs/common';
import { IntegrationService } from './integration.service';
import { Order } from './order.entity';
import { CreateOrderDto } from './order.dto';


@Controller('orders')
export class OrderController {
  constructor(private readonly service: IntegrationService) {}

  @Post()
  create(@Body() orderData: CreateOrderDto): Promise<Order> {
    return this.service.createOrder(orderData);
  }

  @Get()
  findAll(): Promise<Order[]> {
    return this.service.findAll();
  }
}