import { Component } from '@angular/core';
import { LeetcodeService } from '../../services/leetcode/leetcode.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-leetcode-add',
  templateUrl: './leetcode-add.component.html',
  styleUrls: ['./leetcode-add.component.scss'],
})
export class LeetcodeAddComponent {
  newLeetcode = {
    title: '',
    topic: '',
    content: '',
  };
  user: any = null;
  isAdmin: boolean = false;

  constructor(
    private leetcodeService: LeetcodeService,
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
      this.router.navigate(['/leetocde']);
    }
  }

  async addLeetcode() {
    try {
      console.log(this.newLeetcode.content);
      const addLeetcodeNoteObservable =
        await this.leetcodeService.addOneLeetcode(
          this.newLeetcode.title,
          this.newLeetcode.topic,
          this.newLeetcode.content
        );
      addLeetcodeNoteObservable.subscribe({
        next: (response) => {
          console.log('leetcode successfully added:', response);
          this.newLeetcode.title = '';
          this.newLeetcode.content = '';
          this.router.navigate(['/leetcode']);
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
