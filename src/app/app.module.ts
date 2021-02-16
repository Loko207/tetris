import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { SharingService } from '../app/form/sharing.service';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { GamePageComponent } from './game-page/game-page.component';

const appRoutes: Routes = [
  {path:'',component:FormComponent},
  {path:'game-page',component:GamePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    GamePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
