import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project/project.service';

@Component({
  selector: 'app-project-list-page',
  templateUrl: './project-list-page.component.html',
  styleUrls: ['./project-list-page.component.scss'],
})
export class ProjectListPageComponent {
  workingProjects = this.projectService.getAllWorkingProject();
  sideProjects = this.projectService.getAllSideProject();

  constructor(private projectService: ProjectService) {}

  ngOnInite() {}
}
