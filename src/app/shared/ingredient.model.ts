export class Ingredient {
  constructor(public name: string, public amount: number) {
  }
}

// Long form of above
// export class Ingredient {
//   public name: string;
//   public amount: number;

//   constructor(public name: string, public amount: number) {
//     this.name = name;
//     this.amount = amount;
//   }
// }