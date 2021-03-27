import { Component, OnInit } from '@angular/core';
import { SharingService } from '../../form/sharing.service';

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.scss'],
})
export class RankingListComponent implements OnInit {
  public ranking;
  public sortDirection: string = 'asc';
  constructor(private _sharingService: SharingService) {
    this.loadData();
  }

  ngOnInit(): void {}

  loadData() {
    this._sharingService.loadData().subscribe((result) => {
      this.ranking = result;
    });
  }
}
