import {getCharacters} from '@api/characters';
import {AppDispatch} from '@store/rootStore';
import {charactersSlice} from './CharactersListSlice';

export const fetchNextCharacters =
  (page: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(charactersSlice.actions.charactersFetching());
      const result = await getCharacters({page});
      const payload = {
        characters: result.data.results,
        page,
      };
      dispatch(charactersSlice.actions.nextCharacters(payload));
      return result.data.results;
    } catch (err) {
      if (err instanceof Error) {
        dispatch(charactersSlice.actions.charactersFetchingError(err.message));
      }
    }
  };
