import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Task1 from '../screen/task1';
import DetailPage from '../screen/detailPage';
import {styles} from './style';
import {colors} from '../assets/theme/color';
import Screen1 from '../screen/screen1';
import Screen2 from '../screen/screen2';
import {Icons} from '../assets/images';
import {
  moderateScale,
  moderateScaleVertical,
  width,
} from '../components/responsiveSize';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const Navigation = () => {
  const BottomNavigation = () => {
    return (
      <BottomTabs.Navigator initialRouteName="Task1">
        <BottomTabs.Screen
          component={Task1}
          name="Task1"
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <View style={styles.iconView}>
                  <Icons.convo
                    height={moderateScaleVertical(24)}
                    width={moderateScale(24)}
                    color={'#E6427A'}
                  />
                  <Text style={styles.tabBarActiveLabel}>Task1</Text>
                </View>
              ) : (
                <View style={styles.iconView}>
                  <Icons.convo
                    height={moderateScaleVertical(24)}
                    width={moderateScale(24)}
                    color={'#707070'}
                  />
                  <Text style={styles.tabBarInactiveLabel}>Task1</Text>
                </View>
              ),
            tabBarStyle: {
              backgroundColor: colors.white,
              position: 'absolute',
              height: moderateScaleVertical(88),
              shadowColor: '#00000033',
              shadowOffset: {width: 20, height: 50},
              elevation: 5,
            },
          }}
        />

        <BottomTabs.Screen
          component={Screen1}
          name="Screen1"
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <View style={styles.iconView}>
                  <Icons.shop
                    height={moderateScaleVertical(24)}
                    width={moderateScale(24)}
                    color={'#E6427A'}
                  />
                  <Text style={styles.tabBarActiveLabel}>Task2</Text>
                </View>
              ) : (
                <View style={styles.iconView}>
                  <Icons.shop
                    height={moderateScaleVertical(24)}
                    width={moderateScale(24)}
                    color={'#707070'}
                  />
                  <Text style={styles.tabBarInactiveLabel}>Task2</Text>
                </View>
              ),
            tabBarStyle: {
              backgroundColor: colors.white,
              position: 'absolute',
              height: moderateScaleVertical(88),
              shadowColor: '#00000033',
              shadowOffset: {width: 20, height: 50},
              elevation: 5,
            },
          }}
        />

        <BottomTabs.Screen
          component={DetailPage}
          name="DetailPage"
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <View style={styles.iconView}>
                  <Icons.directory
                    height={moderateScaleVertical(24)}
                    width={moderateScale(24)}
                    color={'#E6427A'}
                  />
                  <Text style={styles.tabBarActiveLabel}>Task3</Text>
                </View>
              ) : (
                <View style={styles.iconView}>
                  <Icons.directory
                    height={moderateScaleVertical(24)}
                    width={moderateScale(24)}
                    color={'#707070'}
                  />
                  <Text style={styles.tabBarInactiveLabel}>Task3</Text>
                </View>
              ),
            tabBarStyle: {
              backgroundColor: colors.white,
              position: 'absolute',
              height: moderateScaleVertical(88),
              shadowColor: '#00000033',
              shadowOffset: {width: 20, height: 50},
              elevation: 5,
            },
          }}
        />
      </BottomTabs.Navigator>
    );
  };

  // const DrawerNavigation = () => {
  //   return (
  //     <Drawer.Navigator>
  //       <Drawer.Screen name="BottomNavigation" component={BottomNavigation} />
  //       <Drawer.Screen name="Screen2" component={Screen2} />
  //     </Drawer.Navigator>
  //   );
  // };

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="BottomNavigation" component={BottomNavigation} />
        <Drawer.Screen name="Screen2" component={Screen2} />
      </Drawer.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen
          component={DrawerNavigation}
          name="DrawerNavigation"
          options={{headerShown: false}}
        />
        <Stack.Screen component={Screen2} name="Screen2" />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default Navigation;
