import moment from 'moment';
import {IMAGES} from '../common/Images';
export const formatDate = (date) => {
  return moment(date).format('lll');
};

export const timestamp = () => {
  return new Date().getTime();
};

export const updateTodoHandler = ({todo, text}) => {
  return {...todo, text, date: timestamp()};
};

export const createTodoHandler = (text) => {
  return {
    id: timestamp(),
    date: timestamp(),
    text,
    image: getRandomImage(),
  };
};

export const getRandomImage = () => {
  const images = [IMAGES.bg1, IMAGES.bg2, IMAGES.bg3, IMAGES.bg4, IMAGES.bg5];
  const image = images[Math.floor(Math.random() * images.length)];
  return image;
};
