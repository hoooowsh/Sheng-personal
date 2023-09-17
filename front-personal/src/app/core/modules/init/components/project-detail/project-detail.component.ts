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
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    this.project = this.projectService.getWorkingProjectById(projectId);
  }
}
