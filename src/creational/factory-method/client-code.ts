import { CarFactory } from './factories/car-factory';
import { randomCarAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';

const carFactory = new CarFactory();
const customerNames = ['teste1', 'teste2', 'teste3', 'teste4'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();

  const newCar = carFactory.pickUp();
  console.log('---');
}
