export class Product {
  _id: string;
  name: string;
  price: number;
  desc: string;
  category: string;
  count: number;

  constructor(id: string = null, name: string = null, price: number = 0, desc: string = null, category: string = null, count: number = 0) {
    this._id = id;
    this.name = name;
    this.price = price;
    this.desc = desc;
    this.category = category;
    this.count = count;
  }
}
