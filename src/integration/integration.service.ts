import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';


@Injectable()
export class IntegrationService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
      ) {}
    
      createOrder(orderData: Partial<Order>): Promise<Order> {
        const order = this.orderRepository.create(orderData);
        return this.orderRepository.save(order);
      }
    
      findAll(): Promise<Order[]> {
        return this.orderRepository.find();
      }
}
