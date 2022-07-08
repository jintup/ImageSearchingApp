import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './detail-style';

const Detail = ({route}) => {
  // const {cardData, imageUrl} = route.params;
  const cardData = route.params?.cardData;
  const imageUrl = route.params?.imageUrl;

  return (
    <ScrollView style={styles.container}>
      <FastImage
        source={{uri: imageUrl}}
        resizeMode={FastImage.resizeMode.cover}
        style={styles.cardImageStyle}
      />
      <View style={styles.lowerViewStyle}>
        <Text
          allowFontScaling={false}
          numberOfLines={4}
          style={styles.titleStyle}>
          {cardData?.title ? cardData.title : 'No Title'}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Detail;
