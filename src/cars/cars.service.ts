import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'

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

    createCar(car: Car) {
        car.id = uuid()
        this.cars.push(car)

        return this.cars.includes(car)
    }
}
