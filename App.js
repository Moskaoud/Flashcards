import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Platform, StyleSheet, Text } from 'react-native'
// import { setLocalNotification } from './utils/helpers'
import Decks from './components/Decks'
import AddDeck from './components/AddDeck'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { purple, white } from './utils/colors'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'

const Tabs = createBottomTabNavigator()


export default class App extends React.Component {
  // componentDidMount() {
  //   setLocalNotification()
  // }
  render() {
    return (
      <Provider store={createStore(reducer, {}, applyMiddleware(thunk))}>
        <View style={{ flex: 1 }}>

          <NavigationContainer>
            <Tabs.Navigator>
              <Tabs.Screen name="Decks" component={Decks} />
              <Tabs.Screen name="Add Deck" component={AddDeck} />
            </Tabs.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
