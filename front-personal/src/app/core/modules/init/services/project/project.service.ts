import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  WorkingProjects: Map<string, any> = new Map([
    [
      'cyshare',
      {
        Title: 'CyShare',
        ImageUrl: '../../../../../../assets/projects/CyShare.PNG ',
        Content: '',
        Github: '',
        Demo: '',
      },
    ],
    [
      'cyauth',
      {
        Title: 'CyAuth',
        ImageUrl: '../../../../../../assets/projects/CyShare.PNG',
        Content: '',
        Github: '',
        Demo: '',
      },
    ],
    [
      'cyauthios',
      {
        Title: 'CyAuthIOS',
        ImageUrl: '../../../../../../assets/projects/CyAuthIOS.PNG',
        Content: '',
        Github: '',
        Demo: '',
      },
    ],
  ]);

  SideProjects: Map<string, any> = new Map([
    [
      'rmp',
      {
        Title: 'Rate My Property',
        ImageUrl: '../../../../../../assets/projects/RMP.png',
        Content: '',
        Github: '',
        Demo: '',
      },
    ],
    [
      'fuzzer',
      {
        Title: 'Broadcast Fuzzer',
        ImageUrl: '../../../../../../assets/projects/BroadcastFuzzer.jpg',
        Content: '',
        Github: '',
        Demo: '',
      },
    ],
    [
      'synthbiotic',
      {
        Title: 'Synthbiotic Dungeon',
        ImageUrl: '../../../../../../assets/projects/Synthbiotic.PNG',
        Content: '',
        Github: '',
        Demo: '',
      },
    ],
    [
      'christina',
      {
        Title: 'Christina',
        ImageUrl: '../../../../../../assets/projects/Christina.PNG',
        Content: '',
        Github: '',
        Demo: '',
      },
    ],
  ]);
  constructor() {}

  getWorkingProjectById(id: string | null) {
    if (id == null) {
      return '';
    } else {
      return this.WorkingProjects.get(id);
    }
  }

  getSideProjectById(id: string) {
    if (id == null) {
      return '';
    } else {
      return this.SideProjects.get(id);
    }
  }

  getAllWorkingProject() {
    const workingProjects: { Id: string; Title: string; ImageUrl: string }[] =
      [];
    this.WorkingProjects.forEach((project, id) => {
      workingProjects.push({
        Id: id,
        Title: project.Title,
        ImageUrl: project.ImageUrl,
      });
    });
    return workingProjects;
  }

  getAllSideProject() {
    const sideProjects: { Id: string; Title: string; ImageUrl: string }[] = [];
    this.SideProjects.forEach((project, id) => {
      sideProjects.push({
        Id: id,
        Title: project.Title,
        ImageUrl: project.ImageUrl,
      });
    });
    return sideProjects;
  }
}
