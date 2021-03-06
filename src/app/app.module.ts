import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { SharingService } from '../app/form/sharing.service';
import {TetrisCoreModule} from 'ngx-tetris';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { GamePageComponent } from './game-page/game-page.component';
import { GameControlerComponent } from './game-page/game-controler/game-controler.component';

const appRoutes: Routes = [
  {path:'form',component:FormComponent},
  {path:'game-page',component:GamePageComponent},
  {path:'' ,redirectTo:'/form', pathMatch:'full'},
  {path:'**', redirectTo:'/form'}
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    GamePageComponent,
    GameControlerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    TetrisCoreModule
  ],
  providers: [SharingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
