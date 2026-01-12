import { Injectable } from '@nestjs/common';

import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly brandsService: BrandsService,
    private readonly carsService: CarsService
  ) { }


  populateDB() {

    this.carsService.fillsCarsWithSeedData(CARS_SEED);
    this.brandsService.fillsBrandsWithSeedData(BRANDS_SEED)


    return 'Seed executed succesfully'
  }

}
