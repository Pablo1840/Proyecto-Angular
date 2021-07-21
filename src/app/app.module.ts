import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { app_routing } from './app.routes'; 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AutoridadesComponent } from './autoridades/autoridades.component';
import { AuthService } from './api/auth.service';
import { MenuComponent } from './menu/menu.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { SolicitudService } from './api/solicitud.service';
import { FilterPipe } from './pipes/filter.pipe';
import { PostulanteComponent } from './postulante/postulante.component';
import { PuntuacionComponent } from './puntuacion/puntuacion.component';
import { UpdatePostulanteComponent } from './update-postulante/update-postulante.component';
import { PostulanteService } from './api/postulante.service';
import { Filtro1Pipe } from './pipes/filtro1.pipe';
import { Filtro2Pipe } from './pipes/filtro2.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AutoridadesComponent,
    MenuComponent,
    SolicitudComponent,
    FilterPipe,
    PostulanteComponent,
    PuntuacionComponent,
    UpdatePostulanteComponent,
    Filtro1Pipe,
    Filtro2Pipe,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    app_routing,
    HttpClientModule
  ],
  providers: [AuthService,SolicitudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
