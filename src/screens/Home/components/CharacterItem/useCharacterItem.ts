import {getPlanet, getSpecies} from '@api/index';
import {URLManager} from '@managers/URLManager';
import {Routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {
  useAddFavorite,
  useRemoveFavorite,
} from '@store/reducers/CharactersListing';
import {
  useIncrementFansCounter,
  useDecrementFansCounter,
} from '@store/reducers/Fans';
import * as React from 'react';
import {Character} from 'src/types/Character';

export const useCharacterItem = (character: Character) => {
  const [planetName, setPlanetName] = React.useState('');
  const [speciesName, setSpeciesName] = React.useState<Array<string>>([]);
  const addFan = useIncrementFansCounter(character);
  const removeFan = useDecrementFansCounter(character);
  const addFavorite = useAddFavorite(character);
  const removeFavorite = useRemoveFavorite(character);
  const navigation = useNavigation();

  const getPlanetName = React.useCallback(async () => {
    const homeworldNumber = URLManager.getNumberFromURL(character.homeworld);
    const name = await getPlanet(homeworldNumber);
    setPlanetName(name.data.name);
  }, [character.homeworld]);

  const getSpeciesTitles = React.useCallback(async () => {
    const species = character.species.map(async (el: string) => {
      const speciesNumber = URLManager.getNumberFromURL(el);
      const name = await getSpecies(speciesNumber);

      return name.data.name;
    });

    const results = await Promise.all(species);

    setSpeciesName(results);
  }, [character.species]);

  const onIconPress = React.useCallback(() => {
    if (!character.isFavorite) {
      addFavorite();
      addFan();
    } else {
      removeFavorite();
      removeFan();
    }
  }, [addFan, addFavorite, character.isFavorite, removeFan, removeFavorite]);

  const onItemPress = React.useCallback(() => {
    navigation.navigate(Routes.CharacterDetails, {
      character,
    });
  }, [character, navigation]);

  React.useEffect(() => {
    getPlanetName();
    getSpeciesTitles();
  }, [getPlanetName, getSpeciesTitles]);

  return {
    planetName,
    speciesName,
    isFavorite: character.isFavorite,
    onItemPress,
    onIconPress,
  };
};
