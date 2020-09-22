import React from 'react';
import {ActivityIndicator} from 'react-native';
import {COLORS} from '../../common';

const Spinner = () => (
  <ActivityIndicator size={'large'} color={COLORS.redishOrange} />
);

export{Spinner};