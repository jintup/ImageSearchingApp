import React, {useState, useCallback} from 'react';
import {View, FlatList, Text, TextInput} from 'react-native';
import debounce from 'lodash.debounce';
import styles from './HomeStyle';
import Card from '../../components/Card';
import api from '../../services/api_Config';
import Service from '../../services/api';
import st from '../../components/Searchbar';
const Home = props => {
  const {navigation} = props;
  // const [isLoading, setLoading] = useState(true);
  const [searchString, setSearchString] = useState('');
  const [data, setData] = useState([]);

  const getData = async searchText => {
    const apiKey = '344016064c3bf6ef267ff3bb83cedae2';
    const requestUrl =
      api.BASE_URL +
      apiKey +
      '&format=json&nojsoncallback=1&text=' +
      searchText;

    const requestedData = {
      method: 'post',
      url: requestUrl,
    };

    const response = await Service(requestedData);
    setData(response.photos?.photo);
  };

  const callSearch = text => {
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
    <View style={styles.container}>
      <Text style={st.title}>Search Images</Text>
      <TextInput
        style={st.search}
        value={searchString}
        placeholder={'Search here..'}
        onChangeText={callSearch}
      />
      <FlatList
        numColumns={4}
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
