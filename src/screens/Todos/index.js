import React, {useEffect, useRef, useState, useCallback} from 'react';
import {FlatList, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Spinner} from '../../component/Spinner';
import {useDispatch, useSelector} from 'react-redux';
import {PlaceholderListing, TodoItem} from '../../component';
import styles from './styles';
import {onDeleteTodo} from '../../redux/actions';
import {STRINGS} from '../../common/Strings';

const Todos = () => {
  const listRef = useRef();
  const navigation = useNavigation();
  const {todos} = useSelector((state) => ({todos: state.todos}));
  const dispatch = useDispatch();

  const [loading, setloading] = useState(true);
  const [listHeight, setlistHeight] = useState(null);
  const [isIntialRender, setIsIntialRender] = useState(true);
  const [viewableItems, setViewableItems] = useState([]);

  /** Simulate fetching data */

  useEffect(() => {
    fetchTodos();
  }, []);
  const fetchTodos = () => {
    setTimeout(() => {
      setloading(false);
      setIsIntialRender(false);
    }, 2000);
  };

  useEffect(() => {
    if (viewableItems && viewableItems.length > 0) {
      const thirdTodo = todos[2];
      const isThirdItemVisible =
        viewableItems.findIndex(
          ({item}) => thirdTodo && thirdTodo.id === item.id,
        ) !== -1;
      if (isThirdItemVisible && thirdTodo) {
        listRef.current.scrollToIndex({animated: true, index: 2});
      }
    }
  }, [viewableItems, todos]);

  const onPressDelete = (id) => {
    dispatch(onDeleteTodo(id));
  };
  const ListEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>{STRINGS.empty_message}</Text>
    </View>
  );

  const onViewRef = React.useRef(({viewableItems}) => {
    setViewableItems(viewableItems);
  });
  const viewConfigRef = React.useRef({
    itemVisiblePercentThreshold: 70,
    minimumViewTime: 150,
    waitForInteraction: false,
  });


  if (loading) return <PlaceholderListing />;
  return (
    <FlatList
      ref={listRef}
      onContentSizeChange={(w, h) => {
        if (listHeight && h > listHeight) {
          listRef.current.scrollToEnd();
        }
        setlistHeight(h);
      }}
      onViewableItemsChanged={onViewRef.current}
      viewabilityConfig={viewConfigRef.current}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.list}
      data={todos}
      renderItem={({item, index}) => (
        <TodoItem
          isInitialRender={isIntialRender}
          todo={item}
          index={index}
          onPressEdit={() => navigation.navigate('CreateTodo', {todo: item})}
          onPressDelete={() => onPressDelete(item.id)}
        />
      )}
      ListEmptyComponent={ListEmptyComponent}
      keyExtractor={(item) => `item--${item.id}`}
    />
  );
};

export default Todos;
