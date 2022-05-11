import { deliveryContext } from './delivery-context';
import { DeliveryFactory } from './delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'teste', '20', 'rua tests', 'sp');
deliveryContext(factory, 'teste 1', '30', 'rua teste 2', 'sp');

console.log();
console.log(factory.getLocations());
