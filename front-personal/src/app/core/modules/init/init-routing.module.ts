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
import { LeetcodeComponent } from './components/leetcode/leetcode.component';
import { LeetcodeAddComponent } from './components/leetcode-add/leetcode-add.component';
import { LeetcodeListPageComponent } from './components/leetcode-list-page/leetcode-list-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'thought', component: ThoughtListPageComponent },
  { path: 'techNote', component: TechNoteListPageComponent },
  { path: 'leetcode', component: LeetcodeListPageComponent },
  { path: 'thought/id/:id', component: ThoughtComponent },
  { path: 'techNote/id/:id', component: TechNoteComponent },
  { path: 'leetcode/id/:id', component: LeetcodeComponent },
  { path: 'thought/add', component: ThoughtAddComponent },
  { path: 'techNote/add', component: TechNoteAddComponent },
  { path: 'leetcode/add', component: LeetcodeAddComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'Work-project/:id', component: ProjectDetailComponent },
  { path: 'Side-project/:id', component: ProjectDetailComponent },
  { path: 'project', component: ProjectListPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitRoutingModule {}
