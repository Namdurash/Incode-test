import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Character} from '../../../types/Character';

interface CharacterState {
  characters: Array<Character>;
  page: number;
  isLoading: boolean;
  error: string;
}

interface CharacterPayload {
  characters: Array<Character>;
  page: number;
}

const initialState: CharacterState = {
  characters: [],
  isLoading: true,
  page: 1,
  error: '',
};

export const charactersSlice = createSlice({
  name: 'CharactesList',
  initialState,
  reducers: {
    charactersFetching(state) {
      state.isLoading = true;
    },
    charactersFetchingSuccess(state, action: PayloadAction<Array<Character>>) {
      state.isLoading = false;
      state.error = '';
      state.characters = action.payload;
    },
    charactersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    nextCharacters(state, action: PayloadAction<CharacterPayload>) {
      const updatedCharactersList = [
        ...state.characters,
        ...action.payload.characters,
      ];
      state.page = action.payload.page;
      state.characters = updatedCharactersList;
    },
    addCharacterToFavorite(state, action: PayloadAction<Character>) {
      const favoriteCharacter = {...action.payload, isFavorite: true};
      const characterIdx = state.characters.findIndex(
        char => char.name === action.payload.name,
      );
      if (characterIdx !== -1) {
        state.characters[characterIdx] = favoriteCharacter;
      }
    },
    removeCharacterFromFavorite(state, action: PayloadAction<Character>) {
      const favoriteCharacter = {...action.payload, isFavorite: false};
      const characterIdx = state.characters.findIndex(
        char => char.name === action.payload.name,
      );
      if (characterIdx !== -1) {
        state.characters[characterIdx] = favoriteCharacter;
      }
    },
    clearFavorites(state) {
      state.characters.forEach(char => (char.isFavorite = false));
    },
  },
});

export const charactersReducer = charactersSlice.reducer;
