import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Placeholder, PlaceholderLine, Fade} from 'rn-placeholder';
import {ITEM_HEIGHT} from '../TodoItem/styles';

const PlaceholderListing = () => (
  <FlatList
    data={[1, 2, 3]}
    keyExtractor={(item, index) => `item-${index}`}
    renderItem={() => {
      return (
        <Placeholder Animation={Fade} style={styles.item}>
          <PlaceholderLine width={80} />
          <PlaceholderLine width={80} />
          <PlaceholderLine style={styles.placeholder} />
        </Placeholder>
      );
    }}
  />
);

export {PlaceholderListing};

const styles = StyleSheet.create({
  item: {
    height: ITEM_HEIGHT / 2,
    alignItems: 'flex-end',
  },
  placeholder: {
    borderRadius: 0,
    height: 60,
  },
});
