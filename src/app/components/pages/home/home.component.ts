import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  imageUrls: string[] = [
    '../../../../assets/images/5Platillos_portada.jpg',
    '../../../../assets/images/platillos.jpg',
    '../../../../assets/images/tacos-comida-mexicana.jpg',
  ];

  activeIndex: number = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.nextImage();
    }, 3000);
  }

  nextImage() {
    this.activeIndex = (this.activeIndex + 1) % this.imageUrls.length;
  }
}
