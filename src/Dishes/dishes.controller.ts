import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
  } from '@nestjs/common';
  import { DishDto } from './dish.dto';
  import { DishesService } from './dishes.service';
  
  @Controller('dish')
  export class DishesController {
    constructor(private dishesService: DishesService) {}
  
   // getAllDishesByPrice() - Method: GET, Used to fetch the list of all dishes with the same price.
   @Get('/by-price')
   async  getAllDishesByPrice(@Query('price') price: number) {
     const dishes = await this.dishesService. getAllDishesByPrice(price);
     return dishes;
   }

   //	editDish() - Method: PUT, Used to edit the details of a particular dish by passing the dishID as a parameter.
   @Put(':id')
   async editDish(@Param('id') id: number,@Body() dish: DishDto) {
     const dishes = await this.dishesService.editDish(id, dish);
     return dishes;
   }

   // addDish() - Method: POST, Used to create and post a new dish to the existing dish list.
   @Post()
   async addDish(@Body() dish: DishDto) {
     const dishes = await this.dishesService.addDish(dish);
     return dishes;
   }
   // deleteDish() - Method: DELETE, Used to delete a dish by passing the dishID as a query parameter.
  
    @Delete()
    async deleteDish(@Query('id') id: number) {
      const dish = await this.dishesService.deleteDish(id);
      return dish;
    }
  
  }
  