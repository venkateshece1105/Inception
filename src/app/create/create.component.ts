import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  shop;
  constructor(public http: HttpClient, public router: Router) { }

  ngOnInit() {
    this.shop = new FormGroup({
      categories : new FormControl(),
      brandname : new FormControl(),
      triprate : new FormControl(),
      bikebranch : new FormControl(),
      currentlocation : new FormControl()
    });
  }
  submitData() {
    this.http
      .post('https://5d11b9ba84e90600145764b9.mockapi.io/user/', this.shop.value)
      .toPromise()
      .then(
        response => {
          this.router.navigate(['./list']);
        },
        error => {}
      );
  }
}
