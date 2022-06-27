import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './CardStyle';

const Card = ({onPress, url}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.cardStyle}>
        <FastImage
          source={{uri: url}}
          resizeMode={FastImage.resizeMode.cover}
          style={styles.cardImageStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Card;
