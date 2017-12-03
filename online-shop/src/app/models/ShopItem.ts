export class Product {

  _id: string;
  name: string;
  desc: string;
  price: number;
  category: string;
  count: string;


  constructor(id: string, name: string, description: string, price: number, category: string) {
    this._id = id;
    this.name = name;
    this.desc = description;
    this.price = price;
    this.category = category;
  }
}
