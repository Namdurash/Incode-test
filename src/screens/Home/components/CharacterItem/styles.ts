import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 130,
    backgroundColor: '#C6BABA',
    marginBottom: 15,
    borderRadius: 20,
  },
  infoBlock: {
    width: '70%',
    flexDirection: 'column',
    alignContent: 'space-between',
    paddingLeft: 15,
  },
  iconBlock: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  item: {
    width: '100%',
    marginVertical: 3,
  },
});
