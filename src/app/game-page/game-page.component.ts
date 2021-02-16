import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SharingService} from '../form/sharing.service'

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  data:any;
  constructor(private router: Router, private sharingService:SharingService) { }

  ngOnInit(): void {
    this.data = this.sharingService.getData();
  }
  goBack(){
    this.router.navigateByUrl('/')
  }
  print(){
    console.log(this.data);
  }
}
