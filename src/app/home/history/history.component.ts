import {Component} from '@angular/core';
import {JavaWebService} from "../../java-web.service";
import {BillDTO} from "../../model/DTO/BillDTO";
import {DetailCartDTO} from "../../model/DTO/DetailCartDTO";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  bills!: BillDTO[];
  detailCart !: DetailCartDTO[];
  sum: number = 0;

  constructor(private javaWebService: JavaWebService) {
  }

  ngOnInit(): void {
    this.javaWebService.getBillsByAccountId(localStorage.getItem("id")).subscribe(bills => {
      this.bills = bills;
    });
  }

  getDetailCart(id: number) {
    this.javaWebService.getDetailsByCartId(id).subscribe(data => {
      this.detailCart = data;
      for (let i = 0; i < data.length; i++) {
        this.sum += data[i].price
      }
    })
  }

  close() {
    this.detailCart = [];
    this.sum = 0;
  }
}
