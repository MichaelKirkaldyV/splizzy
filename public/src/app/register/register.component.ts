import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: any;
  errors_: any = [];

  constructor(private _http: HttpService,
              private _router: Router) {}

  ngOnInit(): void {
    this.user = {email: "", password: ""}
  }

  register() {
    this._http.registerUser(this.user).subscribe(data =>{
      console.log("data",data)
      if (data['errors']) {
        console.log(data['errors'])
        this.errors_.push(data['errors'])
      } else {
        this._router.navigate(["login"])}
    })
  }

}
