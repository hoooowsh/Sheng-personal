import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThoughtService } from '../../services/thought/thought.service';
import { Thought } from '../../Models/Thought';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.scss'],
})
export class ThoughtComponent {
  thought: Thought | null = null;
  user: any = null;
  isAdmin: boolean = false;
  constructor(
    private thoughtService: ThoughtService,
    private route: ActivatedRoute,
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
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Check if id is not null or undefined
      this.thoughtService.getOneThought(id).subscribe({
        next: (response) => {
          this.thought = response;
          const dateObject = new Date(this.thought.date * 1000);
          const humanDateFormat = `${
            dateObject.getMonth() + 1
          }/${dateObject.getDate()}/${dateObject.getFullYear()}`;
          this.thought.formattedDate = humanDateFormat;
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

  async deleteThought() {
    try {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        const addThoughtObservable = await this.thoughtService.deleteOneThought(
          id
        );

        addThoughtObservable.subscribe({
          next: (response) => {
            console.log(response);
            this.router.navigate(['/thought']);
          },
          error: (error) => {
            console.error('Error adding thought:', error);
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  goBack() {
    this.router.navigate(['/thought']);
  }
}
