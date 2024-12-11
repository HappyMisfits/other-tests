import { Test, TestingModule } from '@nestjs/testing';
import { RegressionService } from './regression.service';

describe('RegressionService', () => {
  let service: RegressionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegressionService],
    }).compile();

    service = module.get<RegressionService>(RegressionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should calculate the total with a valid discount', () => {
    const total = service.calculateTotal(100, 3); // 3% de remise
    expect(total).toBe(97); // Total attendu
  });

});
