import { Pipe, PipeTransform } from '@angular/core';
import { PlayersList } from '../form/sharing.service';
import { SharingService } from '../form/sharing.service';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  constructor(private _sharingService: SharingService) {}

  transform(values: PlayersList[], field: string, dir): PlayersList[] {
    if (!values) {
      return null;
    }
    let random = [...values];
    let data = this._sharingService.getData();
    if (dir === 'all') return random;
    if (dir === 'myScore') {
      return values.filter(
        (e) => e.name.toLowerCase() === data.name.toLowerCase()
      );
    }
    return values.sort((a, b) => {
      if (dir === 'asc') {
        return a[field] - b[field];
      }

      return b[field] - a[field];
    });
  }
}
