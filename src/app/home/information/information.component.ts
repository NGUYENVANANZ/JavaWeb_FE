import {Component} from '@angular/core';
import {Account} from "../../model/Account";
import {JavaWebService} from "../../java-web.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent {
  account !: Account;

  constructor(private javaWebService: JavaWebService) {
  }

  ngOnInit(): void {
    const id = localStorage.getItem("id")
    this.javaWebService.getAccountById(Number(id)).subscribe((data) => {
      this.account = data;
    });
  }

  onSubmit() {
    this.javaWebService.updateAccount(this.account.id, this.account).subscribe((data) => {
      Swal.fire(
        ' ',
        '<h2 style="color: green; font-size: 32px">Cập nhật thành công !!!</h2>',
        'success'
      )
    })
  }

}
