import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { OptionExtends, Options } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatExpansionModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  panelOpenState = false;

  options: OptionExtends[] = [
    {
      value: '¿vinos al peso?',
      viewValue: 'Aquí veremos las ofertas disponibles para vinos',
      urls: [
        '../../../../assets/images/w_halla_b.png',
        '../../../../assets/images/w_figueroa_b.png',
        '../../../../assets/images/w_topo_b.png',
      ],
    },
    {
      value: 'cervezas',
      viewValue: 'Aquí veremos las ofertas disponibles para cervezas',
      urls: [
        '../../../../assets/images/b_damm_b.png',
        '../../../../assets/images/b_free_b.png',
        '../../../../assets/images/b_lemon_b.png',
      ],
    },
    {
      value: 'refrescon y aguas',
      viewValue: 'Aquí veremos las ofertas disponibles para cervezas',
      urls: [
        '../../../../assets/images/w_piri_b.png',
        '../../../../assets/images/c_coke_b.png',
        '../../../../assets/images/s_sprite_b.png',
      ],
    },

    {
      value: '¿licores al peso?',
      viewValue: 'Aquí veremos las ofertas disponibles para licores al peso',
      urls: [
        '../../../../assets/images/l_rua_b.png',
        '../../../../assets/images/l_baileys_b.png',
        '../../../../assets/images/l_hierba_b.png',
      ],
    },
  ];
}
