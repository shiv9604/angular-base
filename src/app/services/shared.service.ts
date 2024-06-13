import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../core/services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private api: ApiService) {}

  public getDeadlines(): Observable<any> {
    return this.api.get('src/app/models/data/deadline-resp.json');
  }
}
