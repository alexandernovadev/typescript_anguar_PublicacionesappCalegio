import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {

  docenteprees: any = [];
  docenteprim: any = [];
  docentesecu: any = [];
  docenteotros: any = [];
  docentedirectivos: any = [];

  constructor(private http: HttpClient ) {
    this.cargar_docente_preescolar();
    this.cargar_docente_primaria();
    this.cargar_docente_secundaria();
    this.cargar_docente_otros();
    this.cargar_docente_directivos();
   }

  ngOnInit() {
  }

  
  private cargar_docente_preescolar()
  {
    this.http.get('assets/data/docentespreescolar.json')
    .subscribe( (docentes: any) => {
      this.docenteprees = docentes;
      console.log('Docentes Preescolar',docentes);
    });
  }
  private cargar_docente_primaria()
  {
    this.http.get('assets/data/docentesprimaria.json')
    .subscribe( (docentes: any) => {
      this.docenteprim = docentes;
      console.log('Docentes Primaria',docentes);
    });
  }
  private cargar_docente_secundaria()
  {
    this.http.get('assets/data/docentessecundaria.json')
    .subscribe( (docentes: any) => {
      this.docentesecu = docentes;
      console.log('Docentes Secundaria',docentes);
    });
  }

  private cargar_docente_otros()
  {
    this.http.get('assets/data/docentesotros.json')
    .subscribe( (docentes: any) => {
      this.docenteotros = docentes;
      console.log('Docentes Otros',docentes);
    });
  }

  private cargar_docente_directivos()
  {
    this.http.get('assets/data/docentesdirectivos.json')
    .subscribe( (docentes: any) => {
      this.docentedirectivos = docentes;
      console.log('Docentes Otros',docentes);
    });
  }

}
