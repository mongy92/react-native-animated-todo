import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../common';
const {height} = Dimensions.get('screen');
export const ITEM_HEIGHT = height * 0.55;
export default StyleSheet.create({
  card: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white,
  },
  image: {
    minHeight: ITEM_HEIGHT,
    justifyContent: 'flex-end',
  },
  thirdItemStyle: {
    // height: height * 0.7,
  },
  info: {
    padding: 20,
    backgroundColor: COLORS.dark,
    opacity: 0.9,
  },
  itemCount: {
    position: 'absolute',
    backgroundColor: COLORS.darkGreyTwo,
    top: 25,
    left: 25,
    fontSize: 18,
    color: COLORS.white,
  },
  dateText: {
    fontSize: 13,
    color: COLORS.white2,
    marginBottom: 10,
  },
  todoText: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  actionBar: {
    borderTopWidth: 0.5,
    borderTopColor: COLORS.coolGrey,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
  },
  editIconSeperator: {
    borderRightWidth: 0.5,
    borderColor: COLORS.coolGrey,
  },
  iconContainer: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
