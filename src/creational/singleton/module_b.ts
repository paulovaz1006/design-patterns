import { MyDatabaseClassic } from "./db/my-database-classic";

const myDatabaseClassic = MyDatabaseClassic.instance;

myDatabaseClassic.add({ name: "teste2 1", age: 10 });
myDatabaseClassic.add({ name: "teste2 2", age: 5 });
myDatabaseClassic.show();
