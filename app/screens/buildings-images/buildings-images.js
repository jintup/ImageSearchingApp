import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import Card from '../../components/card/image-card';
import {getImages} from '../../services/api/get-images/get-car-images';

// import {TouchableOpacity} from 'react-native-gesture-handler';

export default function BuildingImages({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const queryParameters = {
      text: 'building',
    };
    const result = await getImages(queryParameters);
    setData(result.photos?.photo);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  const renderCard = ({item}) => {
    let imgUrl = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`;

    const showDetail = () => {
      navigation.navigate('Detail', {cardData: item, imageUrl: imgUrl});
    };

    return (
      <Card onPress={() => showDetail(item)} url={imgUrl} title={item.title} />
    );
  };

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          numColumns={6 / 2}
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderCard}

          // onEndReachedThreshold={0.5}
        />
      )}
    </View>
  );
}
