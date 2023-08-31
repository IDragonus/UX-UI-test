import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { Options } from 'src/app/interfaces/interfaces';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css'],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgFor,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
  ],
})
export class ReserveComponent {
  options: Options[] = [
    { value: '13:00h', viewValue: 'Elige día para ver promo' },
    { value: '13:30h', viewValue: 'Elige día para ver promo' },
    { value: '14:00h', viewValue: 'Elige día para ver promo' },
    { value: '14:30h', viewValue: 'Elige día para ver promo' },
    { value: '15:00h', viewValue: 'Elige día para ver promo' },
    { value: '15:30h', viewValue: 'Elige día para ver promo' },
  ];
}
