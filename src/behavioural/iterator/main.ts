import { MyDataStructure } from './my-data-structure';
import { MyReverseIterator } from './my-reverse-iterator';

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I');
console.log(dataStructure);

console.log('Roubados:', a, b);

for (const data of dataStructure) {
  console.log(data);
}

console.log();

dataStructure.changeIterator(new MyReverseIterator(dataStructure));

for (const data of dataStructure) {
  console.log(data);
}

console.log();
