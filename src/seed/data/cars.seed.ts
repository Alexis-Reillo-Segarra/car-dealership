import { v4 as uuid } from "uuid";

import { Car } from "src/cars/interfaces/car.interface";

export const CARS_SEED: Car[] = [

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