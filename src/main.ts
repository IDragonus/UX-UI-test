import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { LayoutComponent } from './app/layout.component';
import { appRoutes } from './app/app.routes';

bootstrapApplication(LayoutComponent, {
  providers: [provideAnimations(), provideRouter(appRoutes), provideAnimations()],
}).catch((err) => console.log(err));
