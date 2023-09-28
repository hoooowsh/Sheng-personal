import { Component, OnInit } from '@angular/core';
import { LeetcodeService } from '../../services/leetcode/leetcode.service';
import { ObjForList } from '../../Models/ObjForList.model';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-leetcode-list-page',
  templateUrl: './leetcode-list-page.component.html',
  styleUrls: ['./leetcode-list-page.component.scss'],
})
export class LeetcodeListPageComponent {
  leetcodes: ObjForList[] = [];
  displayedColumns: string[] = ['title', 'date'];
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

  async ngOnInit(): Promise<void> {
    this.leetcodeService.getAllLeetcode().subscribe((data: ObjForList[]) => {
      this.leetcodes = data
        .map((leetcode) => {
          const dateObject = new Date(leetcode.date * 1000);
          const humanDateFormat = `${
            dateObject.getMonth() + 1
          }/${dateObject.getDate()}/${dateObject.getFullYear()}`;
          return { ...leetcode, formattedDate: humanDateFormat };
        })
        .sort((a, b) => b.date - a.date);
    });
  }

  onRowClicked(leetcode: ObjForList): void {
    this.router.navigate(['/leetcode/id', leetcode.id]);
  }

  createLeetcode(): void {
    this.router.navigate(['/leetcode/add']);
  }
}
