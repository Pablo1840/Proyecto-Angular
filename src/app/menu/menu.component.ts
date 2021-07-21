import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  navItems=[
    {
      name:"Autoridades",
      route:"/autoridades"
    },
    {
      name:"Solicitud",
      route:"/solicitud"
    }
    ,
    {
      name:"Postulante",
      route:"/postulante"
    }
    ,
    {
      name:"Puntuacion",
      route:"/puntuacion"
    }
  ]

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.canBeActivate();
  }

  canBeActivate():void{
    if(localStorage.getItem('user') === '' || localStorage.getItem('user') === null) this.router.navigate(['login'])
  }

}
