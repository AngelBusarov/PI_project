import {
    Inject,
    Injectable,
    NotFoundException,
  } from '@nestjs/common';
  import { DataSource, Repository } from 'typeorm';
  import { DishDto } from './dish.dto';
  import { Dish } from './dish.entity';
  
  @Injectable()
  export class DishesService {
    constructor(
      @Inject('DISHES_REPOSITORY')
      private dishesRepository: Repository<Dish>,
      @Inject('DATA_SOURCE')
      private dataSource: DataSource,
    ) {}
  
    public async getAllDishesByPrice(price: number){
        const dishes = await this.dishesRepository.find({
            where: { price }
          });
          return dishes;
    } 

   public async editDish(id: number, dishDto: DishDto): Promise<Dish> {
    let persistedDish = await this.dishesRepository.findOne({
      where: { id },
    });
    if (!persistedDish) {
      throw new NotFoundException(`Dish with id ${id} was not found.`);
    }
    persistedDish = await this.dishesRepository.save({...persistedDish, ...dishDto }); //merge the properties of the dishDto object with the properties of the persistedDish
    return persistedDish;
   }

   public async addDish(dish: DishDto){
    let createdDish = (await (
        await this.dishesRepository.insert(dish)
      ).identifiers[0]) as DishDto;
      createdDish = await this.dishesRepository.findOne({
        where: { id: createdDish.id }
      });
      return createdDish;
   }

   public async deleteDish(id: number){
    let persistedDish = await this.dishesRepository.findOne({
        where: { id }
      });
      if (!persistedDish) {
        throw new NotFoundException(`Dish with id ${id} was not found.`);
      }
      persistedDish = (await this.dishesRepository.delete({ id }))?.raw;
      return persistedDish;
   }
  }
  