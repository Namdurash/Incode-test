import * as React from 'react';
import {useAppDispatch} from '@store/hooks/hooks';
import {charactersSlice} from './CharactersListSlice';
import {Character} from 'src/types/Character';

export const useAddFavorite = (selectedCharacter: Character) => {
  const dispatch = useAppDispatch();

  return React.useCallback(() => {
    dispatch(charactersSlice.actions.addCharacterToFavorite(selectedCharacter));
  }, [dispatch, selectedCharacter]);
};
