import * as React from 'react';
import {useAppDispatch} from '@store/hooks/hooks';
import {Character} from 'src/types/Character';
import {fansCounterSlice} from './FansCounterSlice';

export const useDecrementFansCounter = (selectedCharacter: Character) => {
  const dispatch = useAppDispatch();

  return React.useCallback(() => {
    dispatch(fansCounterSlice.actions.decrementFansCounter(selectedCharacter));
  }, [dispatch, selectedCharacter]);
};
