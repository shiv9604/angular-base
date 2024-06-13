import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() sidenav: MatSidenav;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  public toggleMenu(): void {
    this.sidenav.toggle();
  }

  public logOut() {
    this.authService.userAuth = false;
    this.router.navigate(['auth/login']);
  }
}
