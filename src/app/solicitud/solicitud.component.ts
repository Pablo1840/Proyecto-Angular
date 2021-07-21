import { Component, OnInit } from '@angular/core';
import { SolicitudModel } from '../models/solicitud.model';
import { SolicitudService } from '../api/solicitud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss']
})
export class SolicitudComponent implements OnInit {
  static END_POINT='solicitud';
  public solicituds: SolicitudModel[];
  public solicitud: SolicitudModel={};
  public myForm;

  constructor(public fb:FormBuilder,private route: ActivatedRoute, private solicitudService:SolicitudService, private router:Router) {
    this.myForm = new FormGroup({
      estado : new FormControl ('', [Validators.required]),
      fecha : new FormControl ('', [Validators.required]),
      nombre : new FormControl ('', [Validators.required]),
      perfild : new FormControl ('', [Validators.required]),
      razon : new FormControl ('', [Validators.required]),
    });


    this.solicituds=[];

  }

  filterSolicitud='';

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      console.log('id='+params['id']);
    });
    this.synch();
  }

  synch():void{
    this.solicitudService.getAllSolicituds().subscribe(
      data => {
        this.solicituds = data;
        console.log(data)
      }
    );
  }

  
  submit(){
    if (this.myForm.valid) {
      if (this.solicitud !== null) this.solicitudService.createSolicitud(this.solicitud).subscribe(
        data => {
          this.solicitud = data  
          alert("La Solicitud se creo con exito")
        } 
      );
    }
    else{
      alert("Rellene todos los campos")
    }
  }
  
}
