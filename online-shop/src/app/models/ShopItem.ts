export class Product {

  id: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;


  constructor(id: string, name: string, description: string, price: number, categoryId: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.categoryId = categoryId;
  }
}
