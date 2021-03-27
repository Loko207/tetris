import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharingService } from '../form/sharing.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent {
  public points: number = 0;
  public seconds: number = 0;
  public minutes: number = 0;

  private _interval: any;
  public data: any;
  public status: string = 'ready';

  constructor(
    private _router: Router,
    private _sharingService: SharingService
  ) {}

  ngOnInit(): void {
    this.data = this._sharingService.getData();
  }

  private changeTime(sec) {
    if (sec === 60) {
      this.minutes += 1;
      this.seconds = 0;
    }
  }
  goBack() {
    this._router.navigateByUrl('/form');
  }
  reset() {
    this.points = 0;
    clearInterval(this._interval);
    this.seconds = 0;
    this.minutes = 0;
    this.status = 'ready';
  }
  timeStop() {
    clearInterval(this._interval);
    this.status = 'paused';
  }
  timeStart() {
    this._interval = setInterval(() => {
      this.seconds += 1;
      this.changeTime(this.seconds);
    }, 1000);
    this.status = 'started';
  }
  onLineCleared() {
    this.points += 1;
  }
}
