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
        Content:
          "In a technical team, I played a significant role in the development of an enterprise-grade, secure file-sharing platform. Leveraging a tech stack that included React for the front-end, NodeJS and Express for the back-end, and MongoDB/Firestore for data storage, we prioritized both functionality and security. To ensure data privacy, advanced encryption algorithms were implemented. For user authentication, Firebase Auth was integrated seamlessly, and for secure payments, Stripe was employed. || Additionally, I took charge of designing and developing an iOS 2FA application using Swift. The emphasis was on enhancing user experience while implementing robust encryption techniques to safeguard sensitive information. Collaborating closely with a cross-functional team, we co-designed a sturdy SAML-based 2FA software architecture, emphasizing scalability and reliability. || Moreover, I played a pivotal role in establishing and optimizing a GitLab CI/CD pipeline. By adhering to industry benchmarks, we ensured a seamless transition to production for both the React-based front-end and the NodeJS-based back-end. This streamlined process significantly improved deployment efficiency and overall project stability. || In a managerial capacity, I directed a co-op team, employing Agile methodologies to guide the development process. Together, we crafted detailed roadmaps and sprint plans, maintaining a sharp focus on timely delivery without compromising on the quality of the end product. This approach facilitated the achievement of important milestones and contributed to the project's overall success.",
        Date: 'Oct 2022 - May 2023',
        Skills:
          'NodeJS, Express, React, Firebase, MongoDB, Stripe, File Encryption',
        Github: 'https://github.com/hoooowsh/Cynorix_FileShare',
        Demo: 'https://gdvault.cynshare.com',
      },
    ],
    [
      'cyauth',
      {
        Title: 'CyAuth',
        ImageUrl: '../../../../../../assets/projects/CyAuth.PNG',
        Content: '',
        Skills:
          'NodeJS, Express, React, Firebase, MongoDB, Stripe, File Encryption',
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
        Skills:
          'NodeJS, Express, React, Firebase, MongoDB, Stripe, File Encryption',
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
        Skills:
          'NodeJS, Express, React, Firebase, MongoDB, Stripe, File Encryption',
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
        Skills:
          'NodeJS, Express, React, Firebase, MongoDB, Stripe, File Encryption',
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
        Skills:
          'NodeJS, Express, React, Firebase, MongoDB, Stripe, File Encryption',
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
        Skills:
          'NodeJS, Express, React, Firebase, MongoDB, Stripe, File Encryption',
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
