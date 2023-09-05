import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThoughtService } from '../../services/thought/thought.service';
import { Thought } from '../../Models/Thought';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.scss'],
})
export class ThoughtComponent {
  thought: Thought | null = null;
  constructor(
    private thoughtService: ThoughtService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Check if id is not null or undefined
      this.thoughtService.getOneThought(id).subscribe({
        next: (response) => {
          this.thought = response;
          if (this.thought && this.thought.title) {
            console.log('Title:', this.thought.title);
          } else {
            console.log('Title is undefined');
          }
        },
        error: (error) => {
          console.error('Error during thought retrieval:', error);
        },
      });
    } else {
      console.error('Invalid thought ID:', id);
    }
  }
}
