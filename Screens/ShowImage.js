import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

const Showimage = () => {
  return (
    <View>
      <ImageBackground
        style={styles.image}
        source={{
          uri: `https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip`,
        }}
      />
    </View>
  );
};
export default Showimage;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  image: {
    height: height,
    width: width,
    borderRadius: 10,
    margin: 10,
  },
});
