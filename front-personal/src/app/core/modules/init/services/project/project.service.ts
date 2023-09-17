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
          "In a technical team, I played a significant role in the development of an enterprise-grade, secure file-sharing platform. Leveraging a tech stack that included React for the front-end, NodeJS and Express for the back-end, and MongoDB/Firestore for data storage, we prioritized both functionality and security. To ensure data privacy, advanced encryption algorithms were implemented. For user authentication, Firebase Auth was integrated seamlessly, and for secure payments, Stripe was employed. || Moreover, I played a pivotal role in establishing and optimizing a GitLab CI/CD pipeline. By adhering to industry benchmarks, we ensured a seamless transition to production for both the React-based front-end and the NodeJS-based back-end. This streamlined process significantly improved deployment efficiency and overall project stability. || In a managerial capacity, I directed a co-op team, employing Agile methodologies to guide the development process. Together, we crafted detailed roadmaps and sprint plans, maintaining a sharp focus on timely delivery without compromising on the quality of the end product. This approach facilitated the achievement of important milestones and contributed to the project's overall success.",
        Date: 'Oct 2022 - May 2023',
        Skills:
          'NodeJS, Express, React, Firebase, MongoDB, Stripe, File Encryption',
        Github: '',
        Demo: 'https://gdvault.cynshare.com',
      },
    ],
    [
      'cyauth',
      {
        Title: 'CyAuth',
        ImageUrl: '../../../../../../assets/projects/CyAuth.PNG',
        Content:
          'Played a pivotal role in the design process of a comprehensive 2FA application work cycle, which encompassed the frontend, backend, and mobile application. Our primary focus was on enhancing user experience while implementing robust encryption techniques to safeguard sensitive information. Collaborating closely with a cross-functional team, we co-designed a sturdy SAML-based 2FA software architecture, placing a significant emphasis on scalability and reliability. This approach not only empowers our platform to handle substantial user loads efficiently but also guarantees the utmost dependability in safeguarding critical data. || A cornerstone of our architecture is the service account microservice, a crucial component that enables other companies to seamlessly generate unique service accounts and integrate their existing login systems with our robust 2FA platform. This innovation extends the reach and applicability of our solution to a wider spectrum of organizations and systems, bolstering the security of their authentication process. This microservice not only enhances the functionality of our platform but also exemplifies our commitment to providing adaptable and integrative solutions for our clients.',
        Skills: 'System Design, 2FA, SAML, Cyber Security',
        Github: '',
        Demo: 'https://cynorix-authenticator.firebaseapp.com/',
      },
    ],
    [
      'cyauthios',
      {
        Title: 'CyAuthIOS',
        ImageUrl: '../../../../../../assets/projects/CyAuthIOS.PNG',
        Content:
          'I spearheaded the development of an iOS Two-Factor Authentication (2FA) application using Swift. The project prioritized user experience, seamlessly integrating advanced encryption techniques to fortify data privacy. This involved the proficient utilization of iOS App Development, Swift, Notification Extension, and Location Push Extension to ensure a seamless and secure authentication process. || Through meticulous design and coding, I created an iOS 2FA application that sets a high standard for user interaction and data security. Swift, as the primary language, enabled a smooth and responsive interface. Additionally, I implemented critical features including a Notification Extension for timely updates and a Location Push Extension for contextual notifications, enhancing the overall user experience. || The resulting application is a testament to my expertise in iOS development and my dedication to crafting secure, user-friendly solutions. It stands as a robust tool for ensuring both convenience and privacy in the authentication process.',
        Skills:
          'iOS App Development, Swift, Notification Extension, Location Push Extension',
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
