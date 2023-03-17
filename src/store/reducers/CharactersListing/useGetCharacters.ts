import {useAppDispatch, useAppSelector} from '@store/hooks/hooks';
import * as React from 'react';
import {fetchCharacters} from './fetchCharacters';

export const useGetCharacters = (page?: number) => {
  const dispatch = useAppDispatch();
  const {characters, page: pageNumber} = useAppSelector(
    state => state.characters,
  );

  React.useEffect(() => {
    dispatch(fetchCharacters(page || 1));
  }, [dispatch, page]);

  return {
    characters,
    pageNumber,
  };
};
