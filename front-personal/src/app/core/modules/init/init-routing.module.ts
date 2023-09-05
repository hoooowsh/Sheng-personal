import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ThoughtListPageComponent } from './components/thought-list-page/thought-list-page.component';
import { ThoughtComponent } from './components/thought/thought.component';
import { ThoughtAddComponent } from './components/thought-add/thought-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'thought', component: ThoughtListPageComponent },
  { path: 'thought/id/:id', component: ThoughtComponent },
  { path: 'thought/add', component: ThoughtAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitRoutingModule {}
