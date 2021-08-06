import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service'


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  shoe: any;
  shoe_: any;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _http: HttpService,) { }

  ngOnInit(): void {
    this.getParams()
    this.getShoe()
  }

  getParams() {
    this._route.params.subscribe(params => {
      console.log("Here is the parameter...", params)
      this.shoe = params['id']
    })
  }

  getShoe() {
    this._http.getThisShoe(this.shoe).subscribe(data => {
      this.shoe_ = data
      console.log("Shoe data requested-", data)
    })
  }

}
