import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  stopLoader,
  showLoader
} from 'src/app/shared/components/loader/Store/loader.actions';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  constructor(private store: Store) {}

  showLoader() {
    return this.store.dispatch(showLoader());
  }

  stopLoader() {
    return this.store.dispatch(stopLoader());
  }
}
