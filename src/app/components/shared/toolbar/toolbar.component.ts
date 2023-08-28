import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarOptions } from 'src/app/interfaces/interfaces';
import { NgIf } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  standalone: true,
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    NgIf,
    MatMenuModule,
  ],
})
export class ToolbarComponent {
  openMenu = false;

  navigateOptions: NavbarOptions[] = [
    {
      label: 'restaurante',
      path: 'restaurants',
    },
    {
      label: 'bebidas al peso',
      path: 'drinks',
    },
    {
      label: 'carta',
      path: 'menu',
    },
    {
      label: 'reservar',
      path: 'reserve',
    },
    {
      label: 'delivery',
      path: 'delivery',
    },
    {
      label: 'tu club',
      path: 'club',
    },
    {
      label: 'log out',
      path: '',
    },
  ];

  constructor(private router: Router) {}

  navigateTo(route: NavbarOptions) {
    console.log('ruta: ', route.path);
    this.router.navigate([route.path]);
  }
}
