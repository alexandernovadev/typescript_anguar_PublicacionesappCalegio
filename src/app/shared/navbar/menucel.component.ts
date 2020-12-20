import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from './navbar.component';

@Component({
  selector: 'app-menucel',
  templateUrl: './menucel.component.html',
  styleUrls: ['./menucel.component.css']
})
export class MenucelComponent implements OnInit {

  modalmenu = document.getElementById('id01');
  estadomodal = 'none';
  constructor(private router: Router,
              protected _nav: NavbarComponent) { }

  ngOnInit() {
  }

  abrirmenu()
  {
    this.estadomodal = 'block';
  }

  cerrarmenu()
  {
    this.estadomodal = 'none';
  }

  irahome()
  {
    this.router.navigate(['/inicio'])
  }
}
