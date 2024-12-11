import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from './integration.controller';
import { IntegrationService } from './integration.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';

describe.skip('OrderController (integration)', () => {
  let orderController: OrderController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory:',
          dropSchema: true,
          entities: [Order],
          synchronize: true,
        }),
        TypeOrmModule.forFeature([Order]),
      ],
      controllers: [OrderController],
      providers: [IntegrationService],
    }).compile();

    orderController = module.get<OrderController>(OrderController);
  });

  it('should create and retrieve orders', async () => {
    const customerName = 'John Doe'
    const items = ['item1', 'item2']

    // Créer une commande
    const newOrder = await orderController.create({
      customerName,
      items,
    });

    // Check que la commande a bien été crée
    expect(newOrder.id).toBeDefined();
    expect(newOrder.customerName).toBe(customerName);

    // Récupérer toutes les commandes
    const orders = await orderController.findAll();

    // Check que le findAll nous ramène bien toutes les infos
    expect(orders).toHaveLength(1);
    expect(orders[0].customerName).toBe(customerName);
    expect(orders[0].items).toHaveLength(2);
    expect(orders[0].items[0]).toBe("item1")
    expect(orders[0].items[1]).toBe("item2")
  });
});