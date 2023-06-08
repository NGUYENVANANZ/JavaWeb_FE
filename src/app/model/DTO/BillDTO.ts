export class BillDTO {
  id: number;
  name: string;
  date: Date;
  id_Cart: number;
  totalBill: number;

  constructor(id: number, name: string, date: Date, id_Cart: number, totalBill: number) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.id_Cart = id_Cart
    this.totalBill = totalBill;
  }
}
