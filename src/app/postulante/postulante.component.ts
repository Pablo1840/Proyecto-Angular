import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostulanteService } from '../api/postulante.service';
import { PostulanteModel } from '../models/postulante.model';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-postulante',
  templateUrl: './postulante.component.html',
  styleUrls: ['./postulante.component.scss']
})
export class PostulanteComponent implements OnInit {
  static END_POINT='postulante';
  public postulantes: PostulanteModel[];
  public postulante: PostulanteModel[];

  constructor(private route: ActivatedRoute, private postulanteService:PostulanteService, private router:Router, private sanitizer:DomSanitizer) { 
    this.postulantes = [];
    this.postulante=[];
  }

  ngOnInit(): void {
    this.synch();
    this.sanitize;
  }

  synch():void{
    this.postulanteService.getAllPostulantes().subscribe(
      data => {
        this.postulantes = data;
        console.log(data)
      }
    );
  }

  updatePostulante(codPostulante: number){
    this.router.navigate(['updatepostulante'+'/'+codPostulante]);
  }


  filtrodePostulanteId='';

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
