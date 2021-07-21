import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../api/auth.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: UserModel={};

  constructor(private authService:AuthService, private router:Router) { 

  }

  ngOnInit(): void {
  }

  login():void{
    this.authService.login(this.user).subscribe(
      data => {
        localStorage.setItem('user',data.codUsuario)
        this.router.navigate(['/autoridades']);
      }
    )
  }

}
