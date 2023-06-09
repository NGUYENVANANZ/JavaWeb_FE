import { Component } from '@angular/core';
import {BillDTO} from "../../model/DTO/BillDTO";
import {JavaWebService} from "../../java-web.service";
import {DetailCartDTO} from "../../model/DTO/DetailCartDTO";

@Component({
  selector: 'app-history-admin',
  templateUrl: './history-admin.component.html',
  styleUrls: ['./history-admin.component.css']
})
export class HistoryAdminComponent {
  bills!: BillDTO[];
  detailCart !: DetailCartDTO[];
  sum: number = 0;

  constructor(private javaWebService: JavaWebService) {
  }

  ngOnInit(): void {
    this.javaWebService.getBills().subscribe(bills => {
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
