import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  shoes: any;

  constructor(private _http: HttpService,
              private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getShoes()
  }

  getShoes(){
    this._http.getAllShoes().subscribe( data => {
      this.shoes = data
      console.log("Shoes---", data)
    })
  }

}
