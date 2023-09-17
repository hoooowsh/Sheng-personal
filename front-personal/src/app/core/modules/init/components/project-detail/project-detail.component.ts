import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project/project.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent {
  project: any;
  contentParagraphs: string[] | undefined;
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    const urlSegment = this.route.snapshot.url[0].path;
    const projectId = this.route.snapshot.paramMap.get('id');
    if (urlSegment === 'Work-project') {
      this.project = this.projectService.getWorkingProjectById(projectId);
    } else if (urlSegment === 'Side-project') {
      this.project = this.projectService.getSideProjectById(projectId);
    }
    this.contentParagraphs = this.project.Content.split('||');
  }
}
