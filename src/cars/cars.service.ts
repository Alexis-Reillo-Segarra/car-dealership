import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { CreateCarDto, UpdateCarDto } from './dto/index';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'CHR'
        }, {
            id: uuid(),
            brand: 'Mercedes-Benz',
            model: 'Clase A'
        },
        {
            id: uuid(),
            brand: 'Audi',
            model: 'R8'
        },
    ]

    findAll() {
        return this.cars
    }

    findById(id: string) {
        const car = this.cars.find(car => { return car.id === id })
        if (!car) {
            throw new NotFoundException(`Car whit id: '${id}', not found`)

        }
        return car;

    }

    createCar(createCarDto: CreateCarDto) {

        const newCar: Car = {
            id: uuid(),
            ...createCarDto
        }

        this.cars.push(newCar)

        return this.cars.includes(newCar)
    }

    update(id: string, updateCarDto: UpdateCarDto) {
        let carDB = this.findById(id);

        this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id
                }
                return carDB
            }
            return car
        })

        return carDB

    }

    delete(id: string) {
        const carDB = this.findById(id);

        this.cars = this.cars.filter(car => {
            if (car.id !== id) return car
        })

        return carDB;

    }
}
