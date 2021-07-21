import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PuntuacionService } from '../api/puntuacion.service';
import { PuntuacionModel } from '../models/puntuacion.model';

@Component({
  selector: 'app-puntuacion',
  templateUrl: './puntuacion.component.html',
  styleUrls: ['./puntuacion.component.scss']
})
export class PuntuacionComponent implements OnInit {
  static END_POINT='puntuacion';
  public puntuaciones: PuntuacionModel[];

  constructor(private route: ActivatedRoute, private puntuacionService: PuntuacionService) { 
    this.puntuaciones = [];
  }

  filterPuntuacion ='';
  
  ngOnInit(): void {
    this.synch();
  }

  synch():void{
    this.puntuacionService.getAllPuntuaciones().subscribe(
      data => {
        this.puntuaciones = data;
        console.log(data)
      }
    );
  }

  
}
