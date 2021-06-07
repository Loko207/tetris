import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharingService } from './sharing.service';

import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';

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
  public colors: Array<string> = ['black&white', 'color'];
  public selectedColor: string = 'black&white';
  constructor(
    private _router: Router,
    private _sharingService: SharingService,
    public fb: FormBuilder
  ) {}

  public spamForm = this.fb.group({
    name: ['', [Validators.required]],
    token: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(4)],
    ],
    color: [this.selectedColor],
  });
  ngOnInit(): void {}
  public onSubmit(form): void {
    //console.log('Form values: ', form.value);
    this.play(form.value.color, form.value.name, form.value.token);
  }

  play(color, name, token) {
    this._sharingService.checkToken(token).subscribe(
      (res) => {
        let token: any = res;
        if (!token.success) return alert('Put correct token 4 digits');
        if (name && name.match(/\S/)) {
          this._sharingService.setData({ name, token });
          this._router.navigate(['/game-page', color]);
          //this._router.navigateByUrl('/game-page', color);
        } else {
          alert('Put correct name');
        }
      },
      (error) => {
        return alert(`Can't connect with server`);
      }
    );
  }
}
