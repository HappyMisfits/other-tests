import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegressionModule } from './regression/regression.module';
import { IntegrationModule } from './integration/integration.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      dropSchema: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    RegressionModule, 
    IntegrationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
