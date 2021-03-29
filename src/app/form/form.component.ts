import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharingService } from './sharing.service';

// export interface Player {
//   name: string;
//   email: string;
// }

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  public name: string;
  public token: string;

  constructor(
    private _router: Router,
    private _sharingService: SharingService
  ) {}
  ngOnInit(): void {}

  play() {
    this._sharingService.checkToken(this.token).subscribe((res) => {
      let token: any = res;
      if (!token.success) return alert('Put correct token 4 digits');
      if (this.name && this.name.match(/\S/)) {
        this._sharingService.setData({ name: this.name, token: this.token });
        this._router.navigateByUrl('/game-page');
      } else {
        alert('Put correct name');
      }
    });
  }
}
