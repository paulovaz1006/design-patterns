import { User } from "../interfaces/user";

export const MyDatabaseFunction = (function() {
  const users: User[] = [];

  return {
    add(user: User): void {
      this.users.push(user);
    }

    remove(index: number): void {
      this.users.splice(index, 1);
    }

    show(): void {
      for (const user of this.users) {
        console.log(user);
      }
    }
  }
})();
