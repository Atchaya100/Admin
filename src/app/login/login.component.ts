import { Component } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: SocialAuthService,private route:Router) { }
  user:any
  loggedIn:any
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.route.navigate(['dashboard'])
      console.log(user)
      this.loggedIn = (user != null);
    });
  }
}
