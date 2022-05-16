import { Customer } from './Customer';

export class IndividualCustomer implements Customer {
  construtor(public name: string) {
    this.name += '(Enterprise)';
  }
}
