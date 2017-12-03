import {Product} from "./models/Product";
import {Order, OrderProduct} from "./models/Order";


export const MOCK_PRODUCTS = [
  new Product("1", "Produkt 1", 5000, "Opis produktu", "category1", 10),
  new Product("2", "Produkt 2", 5000, "Opis produktu", "category1", 10),
  new Product("3", "Produkt 3", 5000, "Opis produktu", "category1", 10),
  new Product("4", "Produkt 4", 5000, "Opis produktu", "category1", 10),
  new Product("5", "Produkt 5", 5000, "Opis produktu", "category1", 10),
  new Product("6", "Produkt 6", 5000, "Opis produktu", "category1", 10),
  new Product("7", "Produkt 7", 5000, "Opis produktu", "category1", 10),
  new Product("8", "Produkt 1", 5000, "Opis produktu", "category1", 10),
  new Product("9", "Produkt 1", 5000, "Opis produktu", "category1", 10),
  new Product("10", "Produkt 1", 5000, "Opis produktu", "category1", 10),
  new Product("11", "Produkt 1", 5000, "Opis produktu", "category1", 10),
  new Product("12", "Produkt 1", 5000, "Opis produktu", "category1", 10),
  new Product("13", "Produkt 1", 5000, "Opis produktu", "category1", 10),
  new Product("14", "Produkt 1", 5000, "Opis produktu", "category1", 10),
  new Product("15", "Produkt 1", 5000, "Opis produktu", "category1", 10)
];


export const MOCK_ORDERS = [
  new Order("1", "1", "Jan Kowalski", "krakow 159", [
    new OrderProduct("1", "Produkt1", 3, 1000),
    new OrderProduct("1", "Produkt1", 1, 1000),
    new OrderProduct("1", "Produkt1", 3, 100),
    new OrderProduct("1", "Produkt1", 5, 400)
  ], "Pending"),
  new Order("2", "2", "Jan Kowalski 2", "krakow 159", [
    new OrderProduct("1", "Produkt1", 3, 1000),
    new OrderProduct("1", "Produkt1", 1, 1000),
    new OrderProduct("1", "Produkt1", 3, 100),
    new OrderProduct("1", "Produkt1", 5, 400)
  ], "Pending"),
  new Order("3", "3", "Jan Kowalski 3", "krakow 159", [
    new OrderProduct("1", "Produkt1", 3, 1000),
    new OrderProduct("1", "Produkt1", 1, 1000),
    new OrderProduct("1", "Produkt1", 3, 100),
    new OrderProduct("1", "Produkt1", 5, 400)
  ], "Pending"),
];
