import { Customer } from './Customer';

export class EnterpriseCustomer implements Customer {
  construtor(public name: string) {
    this.name += '(Enterprise)';
  }
}
