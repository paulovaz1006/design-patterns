import { AlcoholicDrink } from './alcoholic-drink';
import { BrazilTaxVisitor } from './brazil-taxes-visitor';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { UsTaxVisitor } from './us-tax-visitor';

const food = new Food(10);
const cigarette = new Cigarette(5);
const alcoholicDrink = new AlcoholicDrink(5);

const brazilTaxVisitor = new BrazilTaxVisitor();
const usTaxVisitor = new UsTaxVisitor();

const cart = [food, cigarette, alcoholicDrink];
const total = cart.reduce((sum, item) => item.getPrice() + sum, 0);
const totalWithTaxesBrazil = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(brazilTaxVisitor) + sum,
  0,
);

console.log(total);
console.log(totalWithTaxesBrazil);
