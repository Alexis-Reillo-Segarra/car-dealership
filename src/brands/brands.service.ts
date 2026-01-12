import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'BMW',
      createdAt: Date.now()
    },
    {
      id: uuid(),
      name: 'Mercedes-Benz',
      createdAt: Date.now()
    },
    {
      id: uuid(),
      name: 'Audi',
      createdAt: Date.now()
    }


  ]

  create(createBrandDto: CreateBrandDto) {

    const brand: Brand = {
      id: uuid(),
      ...createBrandDto,
      createdAt: Date.now()
    }

    this.brands.push(brand);

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id = id);

    if (!brand)
      throw new NotFoundException(`The brand whit id: ${id} don't exist`)

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);

    this.brands = this.brands.map(brand => {
      if (brand.id === id) {
        brandDB = {
          ...brand,
          ...updateBrandDto,
          updatedAt: Date.now()
        }
      }
      return brandDB
    })

    return brandDB;
  }

  remove(id: number) {
    return `This action removes a #${id} brand`;
  }
}
