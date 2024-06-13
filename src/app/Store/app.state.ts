import { loaderState } from "../shared/components/loader/Store/loader.state";

export const appState = {
  loader: loaderState
};

export interface AppState {
  loader: boolean;
}
