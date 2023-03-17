import * as React from 'react';
import * as Navigation from '@react-navigation/native';
import {Character} from 'src/types/Character';
import {Routes} from '@navigation/routes';

interface CharacterDetailsRoute {
  key: string;
  name: string;
  params: {
    character: Character;
  };
}

export const useCharacterDetails = () => {
  const route = Navigation.useRoute<CharacterDetailsRoute>();
  const navigation = Navigation.useNavigation();
  const {name, height, mass, isFavorite} = route.params.character || {};

  const onPressBack = React.useCallback(() => {
    return navigation.navigate(Routes.Home);
  }, [navigation]);

  return {
    name,
    height,
    mass,
    isFavorite,
    onPressBack,
  };
};
