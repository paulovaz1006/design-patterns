import { CustomerData } from './customer-data';

export abstract class CustomerDataParser {
  public customerData: CustomerData[] = [];

  constructor(protected filePath: string) {}

  readonly fixCustomerData = async ():Promise<void> () => {
    this.customerData = await this.parseData();
    this.customerData = await this.fixCpf();
  }

  private fixCpf():CustomerData[] {
    return this.customerData.map((customer) => ({
      ...customer,
      cpf: customer.cpf.replace(/\D/g, ''),
    }));
  }

  protected abstract async parseData(): Promise<CustomerData[]> {}
}
