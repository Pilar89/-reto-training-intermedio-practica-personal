import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userLogged = this.authService.getUserLogged();
  logged: boolean = false;

  constructor(private authService: ServiceService, private route: Router) {
    // descomentar para validar la prueba
    // (route as any).metodoQueNoExiste();
  }

  userEmail!: string;

  ngOnInit(): void {
    this.traerdatos();
  }

  traerdatos() {
    this.userLogged.subscribe((user) => {
      if (user?.email != null) {
        this.userEmail = user.email;
        this.logged = true;
      } else {
        this.logged = false;
      }
    });
  }

  login() {
    this.route.navigate(['login']);
  }

  async logout() {
    await this.authService.logout();
    window.location.pathname = '/login';
  }
}
