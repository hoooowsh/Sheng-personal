import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitRoutingModule } from './init-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { ThoughtListPageComponent } from './components/thought-list-page/thought-list-page.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    HomepageComponent,
    ThoughtListPageComponent,
  ],
  imports: [CommonModule, InitRoutingModule, HttpClientModule],
  exports: [
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    HomepageComponent,
  ],
})
export class InitModule {}
