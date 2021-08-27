import { MyDatabaseModule } from "./db/my-database-module";

const myDatabaseClassic = MyDatabaseModule;

myDatabaseClassic.add({ name: "teste", age: 30 });
myDatabaseClassic.add({ name: "teste 2", age: 3 });
myDatabaseClassic.show();

export { myDatabaseClassic };
