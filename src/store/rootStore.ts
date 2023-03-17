import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {charactersReducer} from './reducers/CharactersListing';
import {fansCounterReducer} from './reducers/Fans';

const reducers = {
  characters: charactersReducer,
  favorites: fansCounterReducer,
};

const rootReducer = combineReducers(reducers);

export type RootStore = ReturnType<typeof rootReducer>;

export const rootStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof rootStore>;
export type AppDispatch = AppStore['dispatch'];
