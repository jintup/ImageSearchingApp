import React from 'react';
import {Text, View, TextInput, StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Searchbar = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#808080" />
      <View>
        <Text style={styles.title}>Search Images</Text>
        <TextInput placeholder="Search images..." style={styles.search} />
      </View>
    </SafeAreaView>
  );
};
// creating Styles

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 10,
  },
  search: {
    borderColor: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
export default Searchbar;
