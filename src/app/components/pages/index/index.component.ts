import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from 'src/app/components/shared/toolbar/toolbar.component';
import { FooterComponent } from 'src/app/components/shared/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-welkhomeclub',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  imports: [CommonModule, ToolbarComponent, FooterComponent, RouterOutlet],
})
export class IndexComponent {}
