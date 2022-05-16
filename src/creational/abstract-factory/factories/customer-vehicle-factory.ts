import { Vehicle } from '../../factory-method/vehicle/vehicle';
import { Customer } from '../interfaces/Customer';

export interface CreateVehicleCustomer {
  createCustomer(customerName: string): Customer;
  createVehicle(vehicleName: string, customerName: string): Vehicle;
}
