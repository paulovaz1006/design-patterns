import { BicycleFactory } from '../factories/bicycle-fatroy';
import { CarFactory } from '../factories/car-factory';
import { randomNumbers } from '../utils/random-numbers';
import { Vehicle } from '../vehicle/vehicle';

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();

  const bicycleFactory = new BicycleFactory();

  const car1 = carFactory.getVehicle('car1');
  const car2 = carFactory.getVehicle('car2');

  const bicycle = bicycleFactory.getVehicle('bicicle');

  const cars = [car1, car2, bicycle];

  return cars[randomNumbers(cars.length)];
}
