import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SharingService } from '../../form/sharing.service';

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.scss'],
})
export class RankingListComponent implements OnInit, OnChanges {
  @Input() refresh: boolean;
  public ranking;
  public playerName;
  public sortDirection: string = 'desc';
  constructor(private _sharingService: SharingService) {
    this.loadData();
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.loadData();
  }

  loadData() {
    this.playerName = this._sharingService.getData().name;
    this._sharingService.loadData().subscribe((result) => {
      this.ranking = result;
    });
  }
}
