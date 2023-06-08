export class DetailCartDTO {
  id: number;
  productName: string;
  img: string;
  amountProduct: number;
  amountMax: number;
  price: number;

  constructor(id: number, productName: string, img: string, amountProduct: number, amountMax: number, price: number) {
    this.id = id;
    this.productName = productName;
    this.img = img;
    this.amountProduct = amountProduct;
    this.amountMax = amountMax,
      this.price = price;
  }
}
