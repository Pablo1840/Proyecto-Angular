import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoridadesComponent } from './autoridades/autoridades.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { PostulanteComponent } from './postulante/postulante.component';
import { PuntuacionComponent } from './puntuacion/puntuacion.component';
import { UpdatePostulanteComponent } from './update-postulante/update-postulante.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {
    path:'', component:MenuComponent,
    children:[
      {path: AutoridadesComponent.END_POINT, component: AutoridadesComponent},
      {path: SolicitudComponent.END_POINT, component: SolicitudComponent},
      {path: PostulanteComponent.END_POINT, component: PostulanteComponent},
      {path: PuntuacionComponent.END_POINT, component: PuntuacionComponent},
      {path: UpdatePostulanteComponent.END_POINT, component: UpdatePostulanteComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
