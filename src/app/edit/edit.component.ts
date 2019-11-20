import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  online;
  constructor( public activatedRoute: ActivatedRoute, public http: HttpClient, public router: Router ) {
      this.online = new FormGroup({
        categories : new FormControl(),
        brandname : new FormControl(),
        triprate : new FormControl(),
        bikebranch : new FormControl(),
        currentlocation : new FormControl()
      });

    }

    ngOnInit() {
     console.log(this.activatedRoute.snapshot.paramMap.get('id'));
      this.http
        .get(
          `https://5d11b9ba84e90600145764b9.mockapi.io/user/${this.activatedRoute.snapshot.paramMap.get('id')}`)
        .toPromise()
        .then(
          (response: any) => {
            this.online.setValue({
              categories: response.categories,
              brandname: response.brandname,
              triprate: response.triprate,
              bikebranch: response.bikebranch,
              currentlocation: response.currentlocation
              });
          },
          error => {
            console.log('error');
          }
        );
    }
    postBlog() {
      this.http
        .put(
          `https://5d11b9ba84e90600145764b9.mockapi.io/user/${this.activatedRoute.snapshot.paramMap.get(
            'id'
          )}`,
          this.online.value
        )
        .toPromise()
        .then(
          response => {
            this.router.navigate(['./list']);
          },
          error => {}
        );
    }
  }


