import { Component } from '@angular/core';
import {BillDTO} from "../../model/DTO/BillDTO";
import {JavaWebService} from "../../java-web.service";

@Component({
  selector: 'app-history-admin',
  templateUrl: './history-admin.component.html',
  styleUrls: ['./history-admin.component.css']
})
export class HistoryAdminComponent {
  bills!: BillDTO[];

  constructor(private javaWebService: JavaWebService) {
  }

  ngOnInit(): void {
    this.javaWebService.getBills().subscribe(bills => {
      this.bills = bills;
    });
  }
}
