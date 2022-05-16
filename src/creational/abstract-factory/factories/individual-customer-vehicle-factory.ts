import { Customer } from '../customer/Customer';
import { IndividualCustomer } from '../customer/individual-customer';
import { IndividualCar } from '../vehicle/individual-car';
import { VehicleProtocol } from '../vehicle/Vehicle-protocol';

export class IndividualCreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, customer);
  }
}
