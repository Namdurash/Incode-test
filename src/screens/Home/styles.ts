import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 10,
  },
  header: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 20,
  },
  fansCounterBlock: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  fansCounter: {
    width: '30%',
    height: 50,
    borderRadius: 20,
    backgroundColor: '#E9D1D1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  clearFansButton: {
    width: '84%',
    height: 50,
    borderRadius: 20,
    borderColor: '#E9D1D1',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  charactersList: {
    paddingHorizontal: 10,
  },
  footerList: {
    marginBottom: 285,
  },
});
