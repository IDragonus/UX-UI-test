import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarOptions } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
})
export class RestaurantsComponent {
  imageUrls: string[] = [
    '../../../../assets/images/hamburguesa-con-amigos-y-salsa-de-champinones_0.jpg',
    '../../../../assets/images/dieta-1.jpeg',
    '../../../../assets/images/sushi.jpg',
  ];

  foods: string[] = [
    '../../../../assets/images/welkhome-club-salir-tapas-madrid-chotis-francés-de-foie-mhd.jpg',
    '../../../../assets/images/welkhome-club-salir-tapas-madrid-combo-na-te-hu-mhd.jpg',
    '../../../../assets/images/welkhome-club-salir-tapas-madrid-ibra-de-arte-mhd.jpg',
    '../../../../assets/images/welkhome-club-salir-tapas-madrid-ibra-wnie-mhd.jpg',
    '../../../../assets/images/welkhome-club-salir-tapas-madrid-mi-amol-cubano-mhd.jpg',
    '../../../../assets/images/welkhome-club-salir-tapas-madrid-wel.chos-originales-mhd.jpg',
  ];

  meals: string[] = [
    '../../../../assets/images/welkhome-club-salir-tapas-madrid-chotis-francés-de-foie-mhd.jpg',
    '../../../../assets/images/welkhome-club-salir-tapas-madrid-mi-amol-cubano-mhd.jpg',
    '../../../../assets/images/welkhome-club-salir-tapas-madrid-ibra-wnie-mhd.jpg',
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

  activeIndex: number = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.nextImage();
    }, 5000);
  }

  nextImage() {
    this.activeIndex = (this.activeIndex + 1) % this.imageUrls.length;
  }
}
