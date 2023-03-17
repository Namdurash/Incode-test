import * as React from 'react';
import {useAppDispatch} from '@store/hooks/hooks';
import {charactersSlice} from './CharactersListSlice';

export const useClearFavorites = () => {
  const dispatch = useAppDispatch();

  return React.useCallback(() => {
    dispatch(charactersSlice.actions.clearFavorites());
  }, [dispatch]);
};
