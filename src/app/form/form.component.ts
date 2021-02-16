import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import {Router} from '@angular/router';
import {SharingService} from './sharing.service'
/* import {Player} from "../app.component"; */
export interface Player{
  name:string,
  email:string
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    constructor(private router: Router,
      private sharingService:SharingService) { }
  ngOnInit(): void {
  }
  /* @Output() start = new EventEmitter<Player>(); */

  name:string;
  email:string;

  play(){
    if(this.name && this.name.match(/\S/) && this.email.includes('@') && this.email.includes('.') && (this.email.indexOf('@')>0 && this.email.indexOf('@')<this.email.lastIndexOf('.'))  ){
      /* this.start.emit({
        name:this.name,
        email:this.email
      }) */
      /* console.log(this.name,this.email) */
      this.sharingService.setData({name:this.name,email:this.email})
      this.router.navigateByUrl('/game-page')
    }
    else{
      alert('Put correct name and email');
    }
  }

}
