import { MyDatabaseFunction } from "./db/my-database-function";

const myDatabaseClassic = MyDatabaseFunction;

myDatabaseClassic.add({ name: "teste2 1", age: 10 });
myDatabaseClassic.add({ name: "teste2 2", age: 5 });
myDatabaseClassic.show();
