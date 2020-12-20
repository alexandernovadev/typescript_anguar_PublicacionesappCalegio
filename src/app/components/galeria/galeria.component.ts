import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  galeria2019: any = [];
  slideIndex = 1;

  url = "";

  constructor(private http: HttpClient) { 
    
  }

  ngOnInit() {
    this.cargar_galerea2019();
  }

  private cargar_galerea2019()
  {
    this.http.get('assets/data/galeria2019.json')
    .subscribe( (docentes: any) => {
      this.galeria2019 = docentes;
      console.log('Galeria',docentes);
    });  
  }


  openModal(valor: number) 
  {
    console.log("Este valor",valor);
    this.slideIndex = valor;
    this.url = this.galeria2019[this.slideIndex].url;
    document.getElementById('myModal').style.display = "block";
  }

  closeModal() 
  {
    document.getElementById('myModal').style.display = "none";
  }
  


  
}
