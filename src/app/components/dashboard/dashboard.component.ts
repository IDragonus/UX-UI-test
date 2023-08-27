import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarOptions } from 'src/app/interfaces/interfaces';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    NgIf,
  ],
})
export class DashboardComponent {
  optionList: NavbarOptions[] = [
    { option: 'restaurante' },
    { option: 'bebidas al peso' },
    { option: 'carta' },
    { option: 'reservar' },
    { option: 'delivery' },
    { option: 'tu club' },
    { option: 'eventos' },
  ];

  styling(option: string): boolean {
    return option === 'reservar' || option === 'delivery';
  }
}
