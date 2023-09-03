import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../../services/thought/thought.service';
import { ThoughtForList } from '../../Models/ThoughtForList.model';

@Component({
  selector: 'app-thought-list-page',
  templateUrl: './thought-list-page.component.html',
  styleUrls: ['./thought-list-page.component.scss'],
})
export class ThoughtListPageComponent {
  thoughts: ThoughtForList[] = [];
  displayedColumns: string[] = ['title', 'date'];
  constructor(private thoughtService: ThoughtService) {}

  ngOnInit(): void {
    this.thoughtService.getAllThought().subscribe((data: ThoughtForList[]) => {
      // console.log('this is data ', data);
      // console.log(typeof data); // should print true if data is an array

      // Corrected function name and added type
      this.thoughts = data.sort((a, b) => b.date - a.date); // Sort by time
    });
  }

  onRowClicked(row: any): void {
    console.log('Row clicked: ', row);
  }
  createThought(): void {
    console.log('Create thought clicked');
  }
}
