import * as React from 'react';
import {useAppDispatch} from '@store/hooks/hooks';
import {fansCounterSlice} from './FansCounterSlice';

export const useClearFansCounter = () => {
  const dispatch = useAppDispatch();

  return React.useCallback(() => {
    dispatch(fansCounterSlice.actions.clearFansCounter());
  }, [dispatch]);
};
