import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharingService } from '../app/form/sharing.service';
import { TetrisCoreModule } from 'ngx-tetris';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { GamePageComponent } from './game-page/game-page.component';
import { GameControlerComponent } from './game-page/game-controler/game-controler.component';
import { HttpClientModule } from '@angular/common/http';
import { RankingListComponent } from './game-page/ranking-list/ranking-list.component';
import { SortPipe } from './game-page/sort.pipe';

const appRoutes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'game-page', component: GamePageComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  { path: '**', redirectTo: '/game-page' },
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    GamePageComponent,
    GameControlerComponent,
    RankingListComponent,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    TetrisCoreModule,
    HttpClientModule,
  ],
  providers: [SharingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
