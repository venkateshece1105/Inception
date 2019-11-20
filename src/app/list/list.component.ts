import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  blogList;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get('https://5d11b9ba84e90600145764b9.mockapi.io/user')
      .toPromise()
      .then((response) => {
        this.blogList = response;
      }, (error) => {
        console.log(error);
      })
  }

  deleteBlog(id) {
    let result = confirm("Are you sure do you want to delete?");
    if (result == true) {
      console.log(id);
      this.http.delete(`https://5d11b9ba84e90600145764b9.mockapi.io/user/${id}`)
        .toPromise()
        .then((response) => {
          console.log(response);
          this.loadData();
        },
          (error) => {
            console.log(error);
          })
    }
  }
  }
