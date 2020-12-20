import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User;
  error: boolean;
  identity: String;
  token: String;
  opcionespage = ['inicio','institucion','galeria', 'servicios', 'documentos','contacto']

  
  constructor(public appcomponent: AppComponent,
              public router: Router,
              private _userSV:UserService,
              private app: AppComponent) {

                this.error = false;
                this.user  = new User(
                  '',
                  '',
                  '',
                  '',
                  '',
                  '',
                  ''
                );
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

  irahome()
  {
    this.router.navigate(['/inicio'])
  }

  login()
  {
    // ToDO Si el servidor no existe
    // O la peticin HTTP falla hay que mostrar un error
    this._userSV.login(this.user).subscribe(
      res=>
      {
        if(res.status == 'error')
        {
          this.error = true;

        }
        else if(res.status == 'success')
        {
          this.error = false;
          console.log("Sirve");
          
          localStorage.setItem('identity', JSON.stringify(res.user));

          this._userSV.login(this.user , true).subscribe(
            res=>{
              // console.log("toke",res.token);
              localStorage.setItem('token', res.token);

              this.router.navigate(['\dashboard']);
              document.getElementById('loginmodal').style.display = 'none';
            },err=>{console.log('Eroor Get Token', err);}
          );
        }

      },
      err=>{console.log('Error al Login', err);
      }
    );
  }

  log_out() 
  {
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    this.router.navigate(['\inicio']);
  }

}
