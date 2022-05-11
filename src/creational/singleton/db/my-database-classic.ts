

export class MyDataBaseClassic {
  private static instance: MyDataBaseClassic | null = null;
  private users: User[] = []; 

  private constructor() {}

  static getInstance(): MyDataBaseClassic {
    if (MyDataBaseClassic.instance === null) {
      MyDataBaseClassic.instance = new MyDataBaseClassic();
    }

    return MyDataBaseClassic.instance;
  }

  add (user: User):void {
    this.users.push(user);
  }

  remove(index: number):void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user)
    }
  }
}