export class Product {

  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  count: string;


  constructor(id: string, name: string, description: string, price: number, category: string) {
    this._id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
  }
}
