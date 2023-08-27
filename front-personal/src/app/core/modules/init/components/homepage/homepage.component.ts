import { Component, OnInit } from '@angular/core';
import { GreetingService } from '../../services/greeting.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  public currentGreeting = '';
  private index = 0;
  private greetings: string[] = [];

  constructor(private greetingService: GreetingService) {
    this.greetings = this.greetingService.getGreetings();
  }

  // init greeting
  ngOnInit() {
    this.changeGreeting();
  }

  // function to change greeting languages
  changeGreeting() {
    this.currentGreeting = '';
    const greeting = this.greetings[this.index];
    let i = 0;

    // simple loop to update greeting by letters
    const typeGreeting = () => {
      if (i < greeting.length) {
        this.currentGreeting += greeting[i];
        i++;
        setTimeout(typeGreeting, 100); // adjust this value to control typing speed
      } else {
        this.index = (this.index + 1) % this.greetings.length;
        setTimeout(eraseGreeting.bind(this), 1000); // pause before starting to erase
      }
    };

    const eraseGreeting = () => {
      if (this.currentGreeting.length > 0) {
        this.currentGreeting = this.currentGreeting.slice(0, -1);
        setTimeout(eraseGreeting, 100);
      } else {
        this.changeGreeting();
      }
    };

    typeGreeting();
  }
}
