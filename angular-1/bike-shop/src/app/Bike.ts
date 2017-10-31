export class Bike {

  id: number;
  name: string;
  description: string;
  count: number;
  price: number;
  order: number;


  constructor(id: number, name: string, description: string, count: number, price: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.count = count;
    this.price = price;
    this.order = 0;
  }
}
