import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { DishesController } from './dishes.controller';
import { DishesService } from './dishes.service';
import { dishesProviders } from './dishes.providers';


@Module({
  imports: [DatabaseModule],
  controllers: [DishesController],
  providers: [...dishesProviders,DishesService],
  exports: [],
})
export class DishesModule {}
