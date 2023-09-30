import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../../services/thought/thought.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-thought-add',
  templateUrl: './thought-add.component.html',
  styleUrls: ['./thought-add.component.scss'],
})
export class ThoughtAddComponent {
  newThought = {
    title: '',
    content: '',
  };
  user: any = null;
  isAdmin: boolean = false;
  constructor(
    private thoughtService: ThoughtService,
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
      this.router.navigate(['/thought']);
    }
  }

  async addThought() {
    try {
      const addThoughtObservable = await this.thoughtService.addOneThought(
        this.newThought.title,
        this.newThought.content
      );

      addThoughtObservable.subscribe({
        next: (response) => {
          console.log('Thought successfully added:', response);
          this.newThought.title = '';
          this.newThought.content = '';
          this.router.navigate(['/thought']);
        },
        error: (error) => {
          console.error('Error adding thought:', error);
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
