import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../../services/thought/thought.service';
import { ThoughtForList } from '../../Models/ThoughtForList.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thought-list-page',
  templateUrl: './thought-list-page.component.html',
  styleUrls: ['./thought-list-page.component.scss'],
})
export class ThoughtListPageComponent {
  thoughts: ThoughtForList[] = [];
  displayedColumns: string[] = ['title', 'date'];
  constructor(private thoughtService: ThoughtService, private router: Router) {}

  ngOnInit(): void {
    this.thoughtService.getAllThought().subscribe((data: ThoughtForList[]) => {
      this.thoughts = data
        .map((thought) => {
          const dateObject = new Date(thought.date * 1000);
          const humanDateFormat = `${
            dateObject.getMonth() + 1
          }/${dateObject.getDate()}/${dateObject.getFullYear()}`;
          return { ...thought, formattedDate: humanDateFormat };
        })
        .sort((a, b) => b.date - a.date);
    });
  }

  onRowClicked(thought: ThoughtForList): void {
    this.router.navigate(['/thought', thought.id]);
  }
  createThought(): void {
    console.log('Create thought clicked');
  }
}
