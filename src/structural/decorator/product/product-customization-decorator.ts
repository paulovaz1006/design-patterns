export class ProductCustomizationDecorator extends ProductDecorator {
  getName(): number {
    return this.product.getName() + ' (Customizada)';
  }

  getPrice(): number {
    return this.product.getPrice() + 10;
  }
}
