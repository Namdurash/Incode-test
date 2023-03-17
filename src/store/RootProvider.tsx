import * as React from 'react';
import {Provider} from 'react-redux';

import {rootStore} from './rootStore';

interface RootProviderProps {
  children: React.ReactNode;
}

const store = rootStore();

export const RootProvider: React.FC<RootProviderProps> = ({children}) => (
  <Provider store={store}>{children}</Provider>
);
