import * as React from 'react';
import Home from './Screens/Home';
import Searchbar from './Screens/Searchbar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Showimage from './Screens/ShowImage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <Searchbar />
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            name="Showimage"
            component={Showimage}
            options={{headerShown: false}}
          /> */}
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
