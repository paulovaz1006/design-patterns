import { OrderPending } from './order-pending';
import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderRejected implements ShoppingOrderState {
  private name = 'OrderPending';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvedPayment(): void {
    console.log('Não posso aprovar o pagamento porque o pedido foi recusado');
  }

  rejectPayment(): void {
    console.log(
      'Não posso recusar o pagamento porque o pedido ja esta recusado',
    );
  }

  waitPayment(): void {
    console.log('Não posso aprovar o pagamento porque o pedido foi recusado');
  }

  shipOrder(): void {}
}
