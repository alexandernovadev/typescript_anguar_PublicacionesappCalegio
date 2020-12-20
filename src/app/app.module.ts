import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './components/app.routes';


import { GaleriaComponent } from './components/galeria/galeria.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { DocumentosComponent } from './components/documentos/documentos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InstitucionComponent } from './components/institucion/institucion.component';

import { HttpClientModule } from '@angular/common/http';

// Idioma Español
import { registerLocaleData } from '@angular/common';
import localeCo from '@angular/common/locales/es-CO';
import { NosotrosComponent } from './components/institucion/nosotros/nosotros.component';
import { MisionComponent } from './components/institucion/mision/mision.component';
import { VisionComponent } from './components/institucion/vision/vision.component';
import { HimnoComponent } from './components/institucion/himno/himno.component';
import { FilosofiaComponent } from './components/institucion/filosofia/filosofia.component';
import { DocentesComponent } from './components/institucion/docentes/docentes.component';
import { SimbolosComponent } from './components/institucion/simbolos/simbolos.component';
import { MenucelComponent } from './shared/navbar/menucel.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddComponent } from './components/dashboard/add/add.component';
import { EditComponent } from './components/dashboard/edit/edit.component';
import { HomedashComponent } from './components/dashboard/homedash/homedash.component';
import { LoginGuard } from './services/login.guard';
import { UserService } from './services/user.service';


// Modulo de angularfileuploader
import { AngularFileUploaderModule } from "angular-file-uploader";
import { PostComponent } from './components/post/post.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
registerLocaleData(localeCo);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    GaleriaComponent,
    ServiciosComponent,
    DocumentosComponent,
    ContactoComponent,
    InstitucionComponent,
    NosotrosComponent,
    MisionComponent,
    VisionComponent,
    HimnoComponent,
    FilosofiaComponent,
    DocentesComponent,
    SimbolosComponent,
    MenucelComponent,
    DashboardComponent,
    AddComponent,
    EditComponent,
    HomedashComponent,
    PostComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule,
    AngularFileUploaderModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es-CO' },
  LoginGuard,
UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
