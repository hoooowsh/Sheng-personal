import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ThoughtListPageComponent } from './components/thought-list-page/thought-list-page.component';
import { ThoughtComponent } from './components/thought/thought.component';
import { ThoughtAddComponent } from './components/thought-add/thought-add.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { TechNoteListPageComponent } from './components/tech-note-list-page/tech-note-list-page.component';
import { TechNoteComponent } from './components/tech-note/tech-note.component';
import { TechNoteAddComponent } from './components/tech-note-add/tech-note-add.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectListPageComponent } from './components/project-list-page/project-list-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'thought', component: ThoughtListPageComponent },
  { path: 'techNote', component: TechNoteListPageComponent },
  { path: 'thought/id/:id', component: ThoughtComponent },
  { path: 'techNote/id/:id', component: TechNoteComponent },
  { path: 'thought/add', component: ThoughtAddComponent },
  { path: 'techNote/add', component: TechNoteAddComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'project/:id', component: ProjectDetailComponent },
  { path: 'project', component: ProjectListPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitRoutingModule {}
