import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../form/sharing.service';
import { SharingService } from '../form/sharing.service';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  constructor(private _sharingService: SharingService) {}

  transform(
    values: Player[],
    field: string,
    dir: string,
    name: string
  ): Player[] {
    if (!values) {
      return null;
    }

    if (dir === 'myScore') {
      return values
        .filter((e) => e.name.toLowerCase() === name)
        .sort((a, b) => b[field] - a[field]);
    }
    return values.sort((a, b) => {
      if (dir === 'asc') {
        return a[field] - b[field];
      }

      return b[field] - a[field];
    });
  }
}
