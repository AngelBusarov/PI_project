import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DishesModule } from './Dishes/dishes.module';

@Module({
  imports: [ConfigModule.forRoot(), DishesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
