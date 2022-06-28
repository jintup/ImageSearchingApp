import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import COLORS from '../constants/theme';
import {Fonts} from '../assets';
const SearchBar = ({callSearch, searchString}) => {
  return (
    <View>
      <Text style={styles.title}>Search Images</Text>
      <TextInput
        style={styles.search}
        value={searchString}
        placeholder={'Search here..'}
        onChangeText={callSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: COLORS.COLORS.black,
    fontSize: 30,
    fontWeight: Fonts.Bold,
    textAlign: 'center',
    letterSpacing: 10,
  },
  search: {
    borderColor: COLORS.COLORS.black,
    fontSize: 20,
    fontWeight: Fonts.Semibold,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    marginVertical: 20,
  },
});

export default SearchBar;
