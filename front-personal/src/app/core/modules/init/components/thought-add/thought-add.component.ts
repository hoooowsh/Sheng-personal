import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../../services/thought/thought.service';
import { Router } from '@angular/router';

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
  constructor(private thoughtService: ThoughtService, private router: Router) {}

  ngOnInit() {
    console.log('asl;kdjf');
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
    } catch (error) {}
  }

  adjustTextarea(event: Event): void {
    const textarea: HTMLTextAreaElement = event.target as HTMLTextAreaElement;
    textarea.style.overflow = 'hidden';
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
}
