import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  date = new Date();
  year: any;
  edicion: boolean;
  identity: String;
  token: String;
  
  title = 'Icav';
  constructor(private _userSV:UserService) 
  {
    this.year  = this.date.getFullYear();
  }

  ngOnInit() 
  {
    this.identity = this._userSV.getIdentity();
    this.token = this._userSV.getToken();
  }

  ngDoCheck(): void {
    this.identity = this._userSV.getIdentity();
    this.token = this._userSV.getToken(); 
  }
}
