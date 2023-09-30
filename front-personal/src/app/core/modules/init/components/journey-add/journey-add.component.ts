import { Component, OnInit } from '@angular/core';
import { JourneyService } from '../../services/journey/journey.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-journey-add',
  templateUrl: './journey-add.component.html',
  styleUrls: ['./journey-add.component.scss'],
})
export class JourneyAddComponent {
  newJourney = {
    title: '',
    content: '',
  };
  user: any = null;
  isAdmin: boolean = false;
  constructor(
    private journeyService: JourneyService,
    private router: Router,
    private authService: AuthService
  ) {
    this.authService.userState.subscribe(async (user) => {
      this.user = user;
      if (user) {
        this.isAdmin = await this.authService.isAdmin();
        console.log(this.isAdmin);
      } else {
        this.isAdmin = false;
      }
    });
  }

  ngOnInit() {
    if (!this.isAdmin) {
      this.router.navigate(['/journey']);
    }
  }

  async addJourney() {
    try {
      const addJourneyObservable = await this.journeyService.addOneJourney(
        this.newJourney.title,
        this.newJourney.content
      );

      addJourneyObservable.subscribe({
        next: (response) => {
          console.log('Journey successfully added:', response);
          this.newJourney.title = '';
          this.newJourney.content = '';
          this.router.navigate(['/journey']);
        },
        error: (error) => {
          console.error('Error adding journey:', error);
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  adjustTextarea(event: Event): void {
    const textarea: HTMLTextAreaElement = event.target as HTMLTextAreaElement;
    textarea.style.overflow = 'hidden';
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
}
