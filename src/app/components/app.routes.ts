import { RouterModule, Routes, CanActivate} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InstitucionComponent } from './institucion/institucion.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './institucion/nosotros/nosotros.component';

import { DocentesComponent } from './institucion/docentes/docentes.component';
import { FilosofiaComponent } from './institucion/filosofia/filosofia.component';
import { HimnoComponent } from './institucion/himno/himno.component';
import { MisionComponent } from './institucion/mision/mision.component';
import { VisionComponent } from './institucion/vision/vision.component';
import { SimbolosComponent } from './institucion/simbolos/simbolos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomedashComponent } from './dashboard/homedash/homedash.component';
import { AddComponent } from './dashboard/add/add.component';
import { EditComponent } from './dashboard/edit/edit.component';
import { LoginGuard } from '../services/login.guard';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';




const ROUTES: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: '', component: HomeComponent },

    { path: 'institucion', 
      component: InstitucionComponent,
      children  :[
        { path: 'nosotros', component: NosotrosComponent },
        { path: 'simbolos', component: SimbolosComponent },
        { path: 'docentes', component: DocentesComponent },
        { path: 'filosofia', component: FilosofiaComponent },
        { path: 'himno', component: HimnoComponent },
        { path: 'mision', component: MisionComponent },
        { path: 'vision', component: VisionComponent },
        { path: '**', pathMatch: 'full', redirectTo: 'nosotros' }
      ]
    },

    { path: 'galeria', component: GaleriaComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'documentos', component: DocumentosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'posts', component: PostComponent },
    { path: 'post/:id', component: PostDetailComponent },


    {
      path: 'dashboard', component: DashboardComponent,
      canActivate:[LoginGuard],
      children: [
        { path: 'home', component: HomedashComponent },
        { path: 'add', component: AddComponent },
        { path: 'edit/:id', component: EditComponent },
        { path: '**', pathMatch: 'full', redirectTo: 'home' }
      ]
    },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES, {useHash: true});