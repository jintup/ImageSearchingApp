import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Home({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getPhotos = async () => {
    var requestOptions = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    };

    fetch(
      'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=344016064c3bf6ef267ff3bb83cedae2&format=json&nojsoncallback=1&text=cats&per_page=8&extras=url_o',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log(result.photos.photo);
        setData(result.photos.photo);
        setLoading(false);
      })
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <View>
              {/* <Text>{item.title}</Text> */}
              <TouchableOpacity
                key={item}
                onpress={() => navigation.replace('Showimage')}>
                <Image
                  style={styles.image}
                  source={{
                    uri: `https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip`,
                  }}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}
// creating Styles

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
  },
  image: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    height: height / 3,
    width: width / 2 - 6,
    borderRadius: 10,
    margin: 2,
  },
});
