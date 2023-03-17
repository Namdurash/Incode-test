import * as React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './styles';
import {useCharacterDetails} from './useCharacterDetails';

export const CharacterDetails = () => {
  const {name, mass, isFavorite, height, onPressBack} = useCharacterDetails();
  return (
    <View style={styles.container}>
      <Text style={styles.textItem}>Name: {name}</Text>
      <Text style={styles.textItem}>Mass: {mass}</Text>
      <Text style={styles.textItem}>Mass: {height}</Text>
      {isFavorite ? (
        <Text style={styles.textItem}>
          This character is one of your favorites
        </Text>
      ) : (
        <Text style={styles.textItem}>This character is not yout favorite</Text>
      )}
      <TouchableOpacity onPress={onPressBack} style={styles.button}>
        <Text style={styles.textItem}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};
