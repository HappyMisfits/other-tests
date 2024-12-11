import { Module } from '@nestjs/common';
import { RegressionService } from './regression.service';

@Module({
  providers: [RegressionService]
})
export class RegressionModule {}
