import * as React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {Character} from 'src/types/Character';
import {CharacterItem} from './components/CharacterItem/CharacterItem';
import {styles} from './styles';
import {useHome} from './useHome';

interface CharacterListItem {
  item: Character;
}

const renderCharacterItem = ({item}: CharacterListItem) => {
  return <CharacterItem character={item} />;
};

export const Home: React.FC = () => {
  const {
    characters,
    onEndReached,
    onClearFans,
    femaleFansCounter,
    maleFansCounter,
    othersFansCounter,
  } = useHome();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>STAR WARS CHARACTERS</Text>
        <View style={styles.fansCounterBlock}>
          <View style={styles.fansCounter}>
            <Text>Female Fans: {femaleFansCounter}</Text>
          </View>
          <View style={styles.fansCounter}>
            <Text>Male Fans: {maleFansCounter}</Text>
          </View>
          <View style={styles.fansCounter}>
            <Text>Others: {othersFansCounter}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.clearFansButton} onPress={onClearFans}>
          <Text>CLEAR FANS</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={characters}
        renderItem={renderCharacterItem}
        style={styles.charactersList}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={View}
        ListFooterComponentStyle={styles.footerList}
      />
    </View>
  );
};
