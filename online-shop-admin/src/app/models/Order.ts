export class Order {

  _id: string;
  recipientId: string;
  recipientName: string;
  recipientAddress: string;
  items: OrderProduct[];
  status: string;


  constructor(id: string, recipientId: string, recipientName: string, recipientAddress: string, items: OrderProduct[], status: string) {
    this._id = id;
    this.recipientId = recipientId;
    this.recipientName = recipientName;
    this.recipientAddress = recipientAddress;
    this.items = items;
    this.status = status;
  }
}

export class OrderProduct {
  _id: string;
  name: string;
  orderedCount: number;
  price: number;


  constructor(id: string, name: string, orderedCount: number, price: number) {
    this._id = id;
    this.name = name;
    this.orderedCount = orderedCount;
    this.price = price;
  }
}
