
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SharingService} from '../form/sharing.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  private points:number = 0;
  private seconds:number = 0;
  private interval:any;
  private data:any;
  constructor(private router: Router, private sharingService:SharingService) { }

  ngOnInit(): void {
    this.data = this.sharingService.getData();
  }
  private goBack(){
    this.router.navigateByUrl('/')
  }
  private reset() {
    this.points = 0;
    clearInterval(this.interval);
    this.seconds = 0;
  }
  private timeStop(){
    clearInterval(this.interval);
  }
  private timeStart(){
    this.interval = setInterval(()=>{
      this.seconds += 1
    },1000)

  }
  private onLineCleared(){
    this.points += 1;
  }
}
