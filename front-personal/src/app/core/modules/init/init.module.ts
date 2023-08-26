import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitRoutingModule } from './init-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    HomepageComponent,
  ],
  imports: [CommonModule, InitRoutingModule],
  exports: [
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    HomepageComponent,
  ],
})
export class InitModule {}
