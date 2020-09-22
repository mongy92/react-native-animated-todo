import {StyleSheet} from 'react-native';
import {COLORS} from '../../common';

export default StyleSheet.create({
  list: {
    flexGrow: 1,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    color: '#aaa',
    width: '80%',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  plusStyle: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.grass,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
  },
});
