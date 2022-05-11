import { SystemUserProxy } from './system-user-proxy';

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('teste', 'teste 2');
  console.log('leva 2 segundos');
  console.log(await user.getAddresses());

  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses());
  }
}

clientCode();
