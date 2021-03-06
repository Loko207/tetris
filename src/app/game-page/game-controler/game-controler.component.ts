import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-controler',
  templateUrl: './game-controler.component.html',
  styleUrls: ['../game-page.component.scss']
})
export class GameControlerComponent {
  @Input() ready:string;
  @Input() game;

  moveLeft(){
    this.game.actionLeft();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
