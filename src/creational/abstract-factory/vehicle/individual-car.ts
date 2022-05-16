import { Customer } from '../customer/Customer';
import { VehicleProtocol } from './Vehicle-protocol';

export class IndividualCar implements VehicleProtocol {
  constructor(public name: string, private readonly customer: Customer) {}

  pickUp(): void {
    console.log(
      `${this.name} esta buscando ${this.customer.name} (individual)`,
    );
  }
}
