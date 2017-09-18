import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { RaceModel } from './models/race.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RaceService {

  constructor(private http: HttpClient) { }

  params = new HttpParams().set('status', 'PENDING');

  list() {
    return this.http.get('http://ponyracer.ninja-squad.com/api/races', {params: this.params});
  }

}
