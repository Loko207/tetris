import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharingService } from '../form/sharing.service';
import { timer } from 'rxjs';

import { ActivatedRoute } from '@angular/router';

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
  public class: string = undefined;

  public sendedData: boolean = false;

  public color: string;
  constructor(
    private _router: Router,
    private _sharingService: SharingService,
    private _route: ActivatedRoute
  ) {
    this.color = this._route.snapshot.params.color;
    if (this.color === 'black&white') {
      this.class = 'black-and-white';
    }
  }

  ngOnInit(): void {
    this.data = this._sharingService.getData();
  }

  private _changeTime(sec) {
    if (sec === 60) {
      this.minutes += 1;
      this.seconds = 0;
    }
  }

  private _addPoints() {
    this._sharingService
      .sendScore(
        {
          name: this.data.name,
          score: this.points,
        },
        this.data.token
      )
      .subscribe();
    this.sendedData = !this.sendedData;
  }

  goBack() {
    this._router.navigateByUrl('/form');
  }

  reset() {
    this._addPoints();
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
    console.log(this.data);
    this._interval = setInterval(() => {
      this.seconds += 1;
      this._changeTime(this.seconds);
    }, 1000);
    this.status = 'started';
    timer(30000, 30000).subscribe(() => {
      if (this.points !== 0) {
        this._addPoints();
      }
    });
  }

  onLineCleared() {
    this.points += 1;
  }

  onGameOver() {
    this._addPoints();
    this.timeStop();
    alert('game over');
  }
}
