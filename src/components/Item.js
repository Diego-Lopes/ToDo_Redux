



// export class Item {
//   //variavel de class;
//   static lastId = 0;


//   constructor(text) {
//     this.id = Item.lastId++;
//     this.text = text;
//     this.done = false;
//   }
// }


export class Item {
  constructor(text, id) {
    this.id = id;
    this.text = text;
    this.done = false;
  }
}