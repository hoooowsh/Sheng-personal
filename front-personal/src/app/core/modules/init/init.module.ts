import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- import FormsModule
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { InitRoutingModule } from './init-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { ThoughtListPageComponent } from './components/thought-list-page/thought-list-page.component';
import { ThoughtAddComponent } from './components/thought-add/thought-add.component';
import { ThoughtComponent } from './components/thought/thought.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    HomepageComponent,
    ThoughtListPageComponent,
    ThoughtAddComponent,
    ThoughtComponent,
  ],
  imports: [
    CommonModule,
    InitRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    HomepageComponent,
    ThoughtListPageComponent,
  ],
})
export class InitModule {}
