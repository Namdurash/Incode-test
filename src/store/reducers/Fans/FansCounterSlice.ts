import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Character} from 'src/types/Character';

interface FavoriteState {
  femaleFansCounter: number;
  maleFansCounter: number;
  othersFansCounter: number;
}

const initialState: FavoriteState = {
  femaleFansCounter: 0,
  maleFansCounter: 0,
  othersFansCounter: 0,
};

export const fansCounterSlice = createSlice({
  name: 'FansCounter',
  initialState,
  reducers: {
    incrementFansCounter(state, action: PayloadAction<Character>) {
      switch (action.payload.gender) {
        case 'female':
          state.femaleFansCounter += 1;
          break;
        case 'male':
          state.maleFansCounter += 1;
          break;
        case 'n/a':
          state.othersFansCounter += 1;
          break;
        default:
          break;
      }
    },
    decrementFansCounter(state, action: PayloadAction<Character>) {
      switch (action.payload.gender) {
        case 'female':
          state.femaleFansCounter -= 1;
          break;
        case 'male':
          state.maleFansCounter -= 1;
          break;
        case 'n/a':
          state.othersFansCounter -= 1;
          break;
        default:
          break;
      }
    },
    clearFansCounter(state) {
      state.femaleFansCounter = 0;
      state.maleFansCounter = 0;
      state.othersFansCounter = 0;
    },
  },
});

export const fansCounterReducer = fansCounterSlice.reducer;
