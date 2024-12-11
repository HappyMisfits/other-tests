import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IntegrationService } from './integration.service';
import { OrderController } from './integration.controller';
import { Order } from './order.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  providers: [IntegrationService],
  controllers: [OrderController]
})
export class IntegrationModule {}
