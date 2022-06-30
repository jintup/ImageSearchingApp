import React, {useState, useCallback} from 'react';
import {View, FlatList, Text} from 'react-native';
import debounce from 'lodash.debounce';
import styles from './home-style';
import Card from '../../components/card/image-card';
import {getImages} from '../../services/api/get-images/get-images';

import SearchBar from '../../components/searchbar';
const Home = props => {
  const {navigation} = props;
  // const [isLoading, setLoading] = useState(true);
  const [searchString, setSearchString] = useState('');
  const [data, setData] = useState([]);

  const getData = async searchText => {
    const queryParameters = {
      text: searchText,
    };
    const result = await getImages(queryParameters);
    setData(result.photos?.photo);
  };

  const onChangeText = text => {
    setSearchString(text);
    searchOptimize(text);
  };

  // useEffect(() => {
  //   getData();
  // }, []);
  const searchOptimize = useCallback(
    debounce(value => getData(value), 500),
    [],
  );

  const renderCard = ({item}) => {
    let imgUrl = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`;

    const showDetail = () => {
      navigation.navigate('Detail', {cardData: item, imageUrl: imgUrl});
    };
    return (
      <Card onPress={() => showDetail(item)} url={imgUrl} title={item.title} />
    );
  };

  const Empty = ({item}) => {
    return (
      <Text allowFontScaling={false} style={styles.emptyTextStyle}>
        Search
      </Text>
    );
  };

  return (
    <View>
      <SearchBar onChangeText={onChangeText} searchString={setSearchString} />

      <FlatList
        numColumns={6 / 2}
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderCard}
        ListEmptyComponent={Empty}
        // onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default Home;
