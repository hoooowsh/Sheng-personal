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
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { TechNoteComponent } from './components/tech-note/tech-note.component';
import { TechNoteAddComponent } from './components/tech-note-add/tech-note-add.component';
import { TechNoteListPageComponent } from './components/tech-note-list-page/tech-note-list-page.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectListPageComponent } from './components/project-list-page/project-list-page.component';
import { LeetcodeListPageComponent } from './components/leetcode-list-page/leetcode-list-page.component';
import { LeetcodeAddComponent } from './components/leetcode-add/leetcode-add.component';
import { LeetcodeComponent } from './components/leetcode/leetcode.component';
import { JourneyListPageComponent } from './components/journey-list-page/journey-list-page.component';
import { JourneyAddComponent } from './components/journey-add/journey-add.component';
import { JourneyComponent } from './components/journey/journey.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    HomepageComponent,
    ThoughtListPageComponent,
    ThoughtAddComponent,
    ThoughtComponent,
    ContactComponent,
    ExperienceComponent,
    TechNoteComponent,
    TechNoteAddComponent,
    TechNoteListPageComponent,
    ProjectDetailComponent,
    ProjectListPageComponent,
    LeetcodeListPageComponent,
    LeetcodeAddComponent,
    LeetcodeComponent,
    JourneyListPageComponent,
    JourneyAddComponent,
    JourneyComponent,
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
    TechNoteListPageComponent,
  ],
})
export class InitModule {}
