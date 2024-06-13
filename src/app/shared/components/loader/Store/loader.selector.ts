import { createFeatureSelector, createSelector } from '@ngrx/store';
import { loaderInterface } from './loader.state';

const counterState = createFeatureSelector('loader');

export const isLoading = createSelector(
  counterState,
  (state: loaderInterface) => {
    return state && state.showLoader;
  }
);
