import { Component, OnInit } from '@angular/core';
import { JourneyService } from '../../services/journey/journey.service';
import { ObjForList } from '../../Models/ObjForList.model';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-journey-list-page',
  templateUrl: './journey-list-page.component.html',
  styleUrls: ['./journey-list-page.component.scss'],
})
export class JourneyListPageComponent {
  journeys: ObjForList[] = [];
  displayedColumns: string[] = ['title', 'date'];
  user: any = null;
  isAdmin: boolean = false;

  constructor(
    private journeyService: JourneyService,
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
    this.journeyService.getAllJourney().subscribe((data: ObjForList[]) => {
      console.log(data + 'data');
      this.journeys = data
        .map((journey) => {
          const dateObject = new Date(journey.date * 1000);
          const humanDateFormat = `${
            dateObject.getMonth() + 1
          }/${dateObject.getDate()}/${dateObject.getFullYear()}`;
          return { ...journey, formattedDate: humanDateFormat };
        })
        .sort((a, b) => b.date - a.date);
    });
  }

  onRowClicked(journey: ObjForList): void {
    this.router.navigate(['/journey/id', journey.id]);
  }

  createJourney(): void {
    this.router.navigate(['/journey/add']);
  }
}
