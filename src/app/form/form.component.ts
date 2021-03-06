import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {SharingService} from './sharing.service'

export interface Player{
  name:string,
  email:string
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent{
  public name:string;
  public email:string;

  constructor(
      private _router: Router,
      private _sharingService:SharingService) {}
  ngOnInit(): void {
  }

  play(){
    if(this.name && this.name.match(/\S/) && this.email.includes('@') && this.email.includes('.') && (this.email.indexOf('@')>0 && this.email.indexOf('@')<this.email.lastIndexOf('.')) && this.email.lastIndexOf('.')!==this.email.length-1){
      this._sharingService.setData({name:this.name,email:this.email})
      this._router.navigateByUrl('/game-page')
    }
    else{
      alert('Put correct name and email');
    }
  }
}
