import { Component, OnInit } from '@angular/core';
import { ThoughtService } from '../../services/thought/thought.service';

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
  constructor(private thoughtService: ThoughtService) {}

  ngOnInit() {
    console.log('asl;kdjf');
  }

  onSubmit() {
    try {
      console.log('Title:', this.newThought.title);
      console.log('Content:', this.newThought.content);
    } catch (error) {}
  }
}
