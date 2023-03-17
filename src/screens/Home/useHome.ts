import {useAppDispatch, useAppSelector} from '@store/hooks/hooks';
import {fetchNextCharacters} from '@store/reducers/CharactersListing';
import {
  useClearFavorites,
  useGetCharacters,
} from '@store/reducers/CharactersListing';
import {useClearFansCounter} from '@store/reducers/Fans';
import React from 'react';

export const useHome = () => {
  const {characters, pageNumber} = useGetCharacters();
  const {femaleFansCounter, maleFansCounter, othersFansCounter} =
    useAppSelector(state => state.favorites);
  const dispatch = useAppDispatch();
  const clearFansCounter = useClearFansCounter();
  const clearFavorites = useClearFavorites();

  const onEndReached = React.useCallback(() => {
    const nextPage = pageNumber + 1;
    dispatch(fetchNextCharacters(nextPage));
  }, [dispatch, pageNumber]);

  const onClearFans = React.useCallback(() => {
    clearFansCounter();
    clearFavorites();
  }, [clearFansCounter, clearFavorites]);

  return {
    characters,
    femaleFansCounter,
    maleFansCounter,
    othersFansCounter,
    onClearFans,
    onEndReached,
  };
};

// Нужно сделать хук который только дает значение каунтеров и отдельный хук который инкрементит или декрементит
// Сделать два экшена один будет диспатчить изм каунтера, а другой будет изменять массив персонажей добавляя новое свойство фжворит
