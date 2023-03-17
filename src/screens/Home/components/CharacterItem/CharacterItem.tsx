import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Character} from 'src/types/Character';
import {styles} from './styles';
import {useCharacterItem} from './useCharacterItem';

interface CharacterItemProps {
  character: Character;
}

export const CharacterItem = ({character}: CharacterItemProps) => {
  const {name, birth_year, gender} = character;
  const {planetName, speciesName, isFavorite, onIconPress, onItemPress} =
    useCharacterItem(character);
  const formattedSpecies = speciesName[0] ? speciesName : '-';

  return (
    <TouchableOpacity style={styles.wrapper} onPress={onItemPress}>
      <View style={styles.infoBlock}>
        <Text style={styles.item}>Name: {name}</Text>
        <Text style={styles.item}>Birth Year: {birth_year}</Text>
        <Text style={styles.item}>Gender: {gender}</Text>
        <Text style={styles.item}>Home World: {planetName}</Text>
        <Text style={styles.item}>Species: {formattedSpecies}</Text>
      </View>
      <View style={styles.iconBlock}>
        <TouchableOpacity onPress={onIconPress}>
          {isFavorite ? (
            <Icon name="heart" size={30} color="#900" />
          ) : (
            <Icon name="hearto" size={30} color="#900" />
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
