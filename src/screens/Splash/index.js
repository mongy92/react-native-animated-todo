import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {IMAGES} from '../../common/Images';
import styles from './style';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    startup();
  }, []);

  const startup = () => {
    setTimeout(() => {
      navigation.reset({routes: [{name: 'Todos'}]});
    }, 3000);
  };
  return (
    <View style={styles.container}>
      <Image source={IMAGES.logo} resizeMode={'contain'} style={styles.logo} />
    </View>
  );
};

export default Splash;
