import { ProductCustomizationDecorator } from './product-customization-decorator';
import { ProductStampDecorator } from './product-stamp-decorator';
import { TShirt } from './t-shirt';

const tShirt = new TShirt();
const tShirtWithStamp = new ProductStampDecorator(tShirt);
const customizeTShirt = new ProductCustomizationDecorator(tShirtWithStamp);

console.log(tShirt.getPrice(), tShirt.getName());
console.log(tShirtWithStamp.getPrice(), tShirtWithStamp.getName());
console.log(customizeTShirt);
