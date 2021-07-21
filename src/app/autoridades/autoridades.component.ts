import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-autoridades',
  templateUrl: './autoridades.component.html',
  styleUrls: ['./autoridades.component.scss']
})
export class AutoridadesComponent implements OnInit {
  static END_POINT='autoridades'
  constructor(private router:Router) {

   }

  ngOnInit(): void {
    this.canBeActivate();
  }

  canBeActivate():void{
    if(localStorage.getItem('user') === '' || localStorage.getItem('user') === null) this.router.navigate(['login'])
  }

}
