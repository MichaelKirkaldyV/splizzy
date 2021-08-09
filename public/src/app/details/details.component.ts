import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service'


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  shoe_id: any;
  shoe: any;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _http: HttpService,) { }

  ngOnInit(): void {
    this.getParams()
    console.log(this.shoe_id)
  }

  getParams() {
    this._route.params.subscribe(params => {
      console.log("Here is the parameter...", params)
      this.shoe_id = params['id']
      this.getShoe()
    })
  }

  getShoe() {
    this._http.getThisShoe(this.shoe_id).subscribe(data => {
      this.shoe = data
      console.log("Shoe data requested-", data)
    })
  }

}
