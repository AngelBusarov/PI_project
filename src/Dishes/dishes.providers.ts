import { DataSource } from 'typeorm';
import { Dish } from './dish.entity';

export const dishesProviders = [
  {
    provide: 'DISHES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Dish),
    inject: ['DATA_SOURCE'],
  },
];
