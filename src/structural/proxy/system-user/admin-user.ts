import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from './system-user-protocol';

export class AdminUser implements SystemUserProtocol {
  public firstName: string;
  public userName: string;

  constructor(firstName: string, userName: string) {
    this.firstName = firstName;
    this.userName = userName;
  }

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([
          {
            street: 'teste 1',
            number: 10,
          },
          {
            street: 'teste 2',
            number: 20,
          },
        ]);
      }, 2000);
    });
  }
}
