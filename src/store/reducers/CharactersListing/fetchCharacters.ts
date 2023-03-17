import {getCharacters} from '@api/characters';
import {AppDispatch} from '@store/rootStore';
import {charactersSlice} from './CharactersListSlice';

export const fetchCharacters =
  (page: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(charactersSlice.actions.charactersFetching());
      const result = await getCharacters({page});
      dispatch(
        charactersSlice.actions.charactersFetchingSuccess(result.data.results),
      );
      return result.data.results;
    } catch (err) {
      if (err instanceof Error) {
        dispatch(charactersSlice.actions.charactersFetchingError(err.message));
      }
    }
  };
