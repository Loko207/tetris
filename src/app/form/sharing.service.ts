import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Player {
  name: string;
  score: number;
}

export interface PlayersList {
  ranking: Array<Player>;
}

@Injectable({
  providedIn: 'root',
})
export class SharingService {
  private data: any;

  constructor(private _http: HttpClient) {}

  public loadData(): Observable<PlayersList> {
    return this._http.get<PlayersList>(`${environment.apiURL}/scores`, {
      headers: {
        accept: 'application/json',
      },
    });
  }

  public checkToken(token) {
    return this._http.post(
      `${environment.apiURL}/check-token`,
      {
        'auth-token': token,
      },
      {
        headers: {
          accept: 'application/json',
        },
      }
    );
  }

  public sendScore(body, token) {
    body = { ...body, ...{ 'auth-token': token } };
    return this._http.post(`${environment.apiURL}/scores`, body);
  }

  public setData(data: any) {
    this.data = data;
  }

  public getData(): any {
    return this.data;
  }
}
