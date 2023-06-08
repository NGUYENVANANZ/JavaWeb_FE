import { Component } from '@angular/core';
import {Product} from "../../model/Product";
import {JavaWebService} from "../../java-web.service";
import {Account} from "../../model/Account";

@Component({
  selector: 'app-information-admin',
  templateUrl: './information-admin.component.html',
  styleUrls: ['./information-admin.component.css']
})
export class InformationAdminComponent {
  account: Account[] = [];
  S: number = 1

  constructor(private javaWebService: JavaWebService) {
  }

  ngOnInit(): void {
    this.javaWebService.getAllAccounts().subscribe(ac => {
      this.account = ac;
    });
  }
}
