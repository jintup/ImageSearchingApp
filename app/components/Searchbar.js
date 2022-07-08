import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import COLORS from '../constants/theme';
import {Fonts} from '../assets';
const SearchBar = ({onChangeText, searchString}) => {
  return (
    <View>
      <Text style={styles.title}>Search Images</Text>
      <TextInput
        style={styles.search}
        value={searchString}
        placeholder={'Search here..'}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: COLORS.COLORS.darkblack,
    fontSize: 30,
    fontWeight: Fonts.Bold,
    textAlign: 'center',
    letterSpacing: 10,
  },
  search: {
    backgroundColor: COLORS.COLORS.Silver,
    fontSize: 20,
    fontWeight: Fonts.Semibold,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginHorizontal: 20,
    marginVertical: 20,
  },
});

export default SearchBar;
