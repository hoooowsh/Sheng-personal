import { Component } from '@angular/core';
import { TechNoteService } from '../../services/techNote/tech-note.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-tech-note-add',
  templateUrl: './tech-note-add.component.html',
  styleUrls: ['./tech-note-add.component.scss'],
})
export class TechNoteAddComponent {
  newTechNote = {
    title: '',
    topic: '',
    content: '',
  };
  user: any = null;
  isAdmin: boolean = false;

  constructor(
    private techNoteService: TechNoteService,
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
      this.router.navigate(['/techNote']);
    }
  }

  async addTechNote() {
    try {
      console.log(this.newTechNote.content);
      const addTechNoteObservable = await this.techNoteService.addOneTechNote(
        this.newTechNote.title,
        this.newTechNote.topic,
        this.newTechNote.content
      );
      addTechNoteObservable.subscribe({
        next: (response) => {
          console.log('Thought successfully added:', response);
          this.newTechNote.title = '';
          this.newTechNote.content = '';
          this.router.navigate(['/techNote']);
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
