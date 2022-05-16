import { Seller, SellerProduct } from './seller';

export class Mediator {
  private sellers: Seller[] = [];

  addSeller(...sellers: Seller[]): void {
    sellers.forEach((seller) => this.sellers.push(seller));
  }

  buy(id: string): SellerProduct | void {
    let product;

    for (let i = 0; i < this.sellers.length; i) {
      product = this.sellers[i].sell(id);

      if (product) {
        console.log(
          'Aqui esta o produto',
          product.id,
          product.name,
          product.price,
        );
      }

      console.log('Nao encontrei nenhum produto com o id', id);
    }
  }

  showProducts(): void {
    this.sellers.forEach((seller) => seller.showProducts());
  }
}
