import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostulanteService } from '../api/postulante.service';
import { PostulanteModel } from '../models/postulante.model';

@Component({
  selector: 'app-update-postulante',
  templateUrl: './update-postulante.component.html',
  styleUrls: ['./update-postulante.component.scss']
})
export class UpdatePostulanteComponent implements OnInit {
  static END_POINT = 'updatepostulante/:codPostulante';
  private codPostulante: String | null ;
  public postulante: PostulanteModel={solicitud:{}};

  form:FormGroup;
  
  constructor(private route: ActivatedRoute, private postulanteService:PostulanteService, private router:Router) { 
    this.codPostulante = this.route.snapshot.paramMap.get('codPostulante');
    console.log("prueba"+this.codPostulante);
    this.form = new FormGroup({
      certificadobanca: new FormControl('',[Validators.required]),
      curriculo: new FormControl('',[Validators.required]),
      nombres: new FormControl('',[Validators.required]),
      ci: new FormControl('',[Validators.required]),
      titulo: new FormControl('',[Validators.required]),
    })
  }



  navMenu=[
    {
      name:"Autoridades",
      route:"/autoridades"
    },
    {
      name:"Solicitud",
      route:"/solicitud"
    },
    {
      name:"Postulante",
      route:"/postulante"
    },
    {
      name:"Puntuacion",
      route:"/puntuacion"
    }
  ];

  submit() {
    if (this.form.valid) {
      this.updatePostulante();
    }
    else{
      alert("Rellene todos los campos")
    }
  }


  updatePostulante():void{
    if(this.codPostulante !== null)
    this.postulanteService.updatePostulante(this.codPostulante,this.postulante).subscribe(
      data => {
        console.log(data);
      },error => console.log(error)
    );
  }

  getPostulante():void{
    if(this.codPostulante !== null)
    this.postulanteService.getPostulanteById(this.codPostulante).subscribe(
      data => {
        this.postulante = data;
      },error => console.log(error)
    );
  }

  ngOnInit(): void {
    this.codPostulante = this.route.snapshot.paramMap.get('codPostulante');
    this.canBeActivate();
    this.getPostulante(); 
  }

  canBeActivate(): void {
    if (localStorage.getItem('user') === '' || localStorage.getItem('user') === null) this.router.navigate([''])
  }


  onSubmit(){
    this.updatePostulante();    
  }

  

}
