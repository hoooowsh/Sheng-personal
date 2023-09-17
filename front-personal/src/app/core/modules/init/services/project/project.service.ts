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
          'NodeJS, Express, React, Firebase, MongoDB, FireStore, Firebase Real-time DB, Stripe, File Encryption, CI/CD, Agile',
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
        Date: 'May 2023 - Present',
        Skills: 'System Design, 2FA, SAML, Cyber Security, Agile',
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
        Date: 'May 2023 - Present',
        Skills:
          'iOS App Development, Swift, Notification Extension, Location Push Extension, Agile',
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
        Content:
          'In my role as a back-end developer, I led the creation of an anonymous property review platform utilizing cutting-edge technologies. Leveraging the power of NodeJS and Express, I meticulously designed and implemented REST APIs that seamlessly interfaced with MongoDB, ensuring efficient data management. Rigorous unit testing, employing industry-standard tools like Jest and Mocha, validated the functionality and resilience of each endpoint, guaranteeing a robust and reliable platform. || Operating within a well-structured Agile framework, I orchestrated seamless development cycles. Using JIRA, I actively contributed to sprint planning, daily stand-ups, and retrospectives, fostering effective communication and progress tracking. This approach ensured that our platform not only met technical benchmarks but also provided a dynamic and user-centric space for anonymous property reviews.',
        Date: 'Jan, 2022 – May, 2022',
        Skills: 'NodeJS, Express, MongoDB, AWS, Docker, Mocha, Jest',
        Github: 'https://github.com/hoooowsh/RateMyPropertyWebDev',
        Demo: '',
      },
    ],
    [
      'fuzzer',
      {
        Title: 'Broadcast Fuzzer',
        ImageUrl: '../../../../../../assets/projects/BroadcastFuzzer.jpg',
        Content:
          "As a vital member of a collaborative team, I spearheaded the development of a powerful black box testing tool designed specifically for Android applications. Leveraging fuzzing techniques on Broadcast Receiver components, our tool autonomously injected diverse data sets, including jpg, mp4, and txt formats, to rigorously stress-test app robustness and uncover potential vulnerabilities. || To bolster our fuzzing endeavors, I took charge of implementing a sophisticated random data generator using Python. This generator was instrumental in simulating real-world scenarios, ensuring comprehensive testing coverage and uncovering nuanced vulnerabilities that might have otherwise eluded detection. || One standout achievement was the identification of a critical crash in the Telegram Android app, along with the uncovering of abnormal behavior in several other fuzzed applications. This success story not only underscores our team's collective proficiency but also highlights the tool's potential to significantly enhance the security and reliability of Android applications.",
        Date: 'May, 2022 – Sep, 2022',
        Skills: 'Python, Fuzzing, Random Data Generator',
        Github: 'https://github.com/hoooowsh/broadcast-fuzzer',
        Demo: '',
      },
    ],
    [
      'synthbiotic',
      {
        Title: 'Synthbiotic Dungeon',
        ImageUrl: '../../../../../../assets/projects/Synthbiotic.PNG',
        Content:
          "In the realm of Unreal Engine, I harnessed the power of Blueprint and C++ to bring forth a captivating gaming experience. Through skillful design and implementation, I crafted essential features such as a dynamic dungeon shop, an intuitive mini-map, and an intricate system for character skills. This involved a meticulous blend of Blueprint's visual scripting and C++'s robust programming capabilities, resulting in a seamless and engaging gameplay environment.|| Collaboration was at the heart of this endeavor. Working closely with a team of artists and fellow programmers, I orchestrated the integration of various elements, ensuring they harmonized flawlessly within the game's framework. This collaborative effort extended to the final stages, where we collectively propelled the game onto the prestigious Steam store, marking a significant milestone in our journey towards delivering a polished and accessible gaming experience to a wider audience.",
        Date: 'Sep, 2020 – May, 2021',
        Skills: 'Unreal Engine, Blueprint, C++',
        Github: '',
        Demo: 'https://store.steampowered.com/app/1576880/Synthbiotic_Dungeon/',
      },
    ],
    [
      'christina',
      {
        Title: 'Desktop Assistant (Still In Development Process)',
        ImageUrl: '../../../../../../assets/projects/Christina.PNG',
        Content:
          'A desktop assistant application that utilizes chatbot APIs, complete with a customized user interface. By incorporating AI technology, I anticipate that this app will significantly improve my work efficiency and provide a range of benefits. Given the promising future of AI and chatbots, developing this app has allowed me to gain valuable hands-on experience with these cutting-edge technologies. || Please be aware that this project is currently in the development stage, and additional improvements will be made. Specifically, a more user-friendly interface will be implemented, and model animation based on the responses from the ChatGPT API will be added. These changes will transform the desktop assistant into an even more effective and user-friendly tool.',
        Date: 'Apr, 2023 – Present',
        Skills: 'Unity, C#',
        Github: 'https://github.com/hoooowsh/Christina_Enhance',
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

  getSideProjectById(id: string | null) {
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
