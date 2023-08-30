import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Images, NavbarOptions } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  imageUrls: string[] = [
    '../../../../assets/images/5Platillos_portada.jpg',
    '../../../../assets/images/platillos.jpg',
    '../../../../assets/images/tacos-comida-mexicana.jpg',
  ];

  carouselNav: NavbarOptions[] = [
    {
      label: 'restaurante',
      path: 'restaurante',
    },
    {
      label: 'afterwork',
      path: 'afterwork',
    },
    {
      label: 'club',
      path: 'club',
    },
    {
      label: 'eventos',
      path: 'eventos',
    },
  ];

  buttons: NavbarOptions[] = [
    {
      label: 'reservar',
      path: 'reserve',
    },
    {
      label: 'delivery',
      path: 'delivery',
    },
  ];

  imgs: Images[] = [
    { url: '../../../../assets/images/welkhome-club-yourself-left-mhd.jpg' },
    {
      url: '../../../../assets/images/welkhome-club-yourself-center-1-mhd.jpg',
    },
    {
      url: '../../../../assets/images/welkhome-club-yourself-center-2-mhd.jpg',
    },
    {
      url: '../../../../assets/images/welkhome-club-yourself-center-3-mhd.jpg',
    },
    {
      url: '../../../../assets/images/welkhome-club-yourself-center-4-mhd.jpg',
    },
    { url: '../../../../assets/images/welkhome-club-yourself-right-mhd.jpg' },
  ];

  activeIndex: number = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.nextImage();
    }, 5000);
  }

  nextImage() {
    this.activeIndex = (this.activeIndex + 1) % this.imageUrls.length;
  }

  shouldDisplayImage(index: number): boolean {
    return window.innerWidth >= 992 || index < 3 || index > 4;
  }
}
