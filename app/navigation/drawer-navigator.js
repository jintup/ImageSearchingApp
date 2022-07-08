import * as React from 'react';
import Home from '../screens/home-screen/home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CarImages from '../screens/car-images-screen/car-images';
import PhoneImages from '../screens/phones-images/phones-images';
import BuildingImages from '../screens/buildings-images/buildings-images';
import {COLORS} from '../assets';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        drawerActiveBackgroundColor: COLORS.lightLime,
        drawerInactiveBackgroundColor: COLORS.lightGray,
        drawerInactiveTintColor: COLORS.darkblack,

        swipeEdgeWidth: 1,
      }}>
      <Drawer.Screen name="Search" component={Home} />
      <Drawer.Screen name="Cars" component={CarImages} />
      <Drawer.Screen name="Phones" component={PhoneImages} />
      <Drawer.Screen name="Buildings" component={BuildingImages} />
    </Drawer.Navigator>
  );
}
