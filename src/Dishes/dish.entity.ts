import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

// id, name, ingredients, weight, price
@Entity()
export class Dish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 50 })
  ingredients: string;

  @Column()
  weight: number;

  @Column()
  price: number;



}