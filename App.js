import React from 'react'
import { View, Platform, StyleSheet, Text } from 'react-native'
// import { setLocalNotification } from './utils/helpers'
import Decks from './components/Decks'
import AddDeck from './components/AddDeck'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { purple, blue } from './utils/colors'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import 'react-native-gesture-handler'
import  DeckDetails  from './components/DeckDetails'
import  Quiz  from './components/Quiz'
import NoCards from './components/NoCards'
import AddCard from './components/AddCard'

const Tabs = createBottomTabNavigator()
const Stack = createStackNavigator();

function Home() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Decks" component={Decks} options={{
        tabBarIcon: () => (
          <Ionicons name="ios-bookmarks" size={25} color={Platform.OS === 'ios' ? purple : blue} />
        )
      }} />
      <Tabs.Screen name="Add Deck" component={AddDeck} options={{
        tabBarIcon: () => (
          <AntDesign name="pluscircle" size={25} color={Platform.OS === 'ios' ? purple : blue} />
        )
      }}
      />
    </Tabs.Navigator>
  )
}
export default class App extends React.Component {
  // componentDidMount() {
  //   setLocalNotification()
  // }
  render() { 
    return (
      <NavigationContainer>
        <Provider store={createStore(reducer, {}, applyMiddleware(thunk))}>
          <View style={{ flex: 1 }}>
            <Stack.Navigator>
              <Stack.Screen name="Decks" component={Home} options={{ title: 'Decks' }} />
              <Stack.Screen name="DeckDetails" component={DeckDetails} />
              <Stack.Screen name="AddCard" component={AddCard} />
              <Stack.Screen name="Add Deck" component={AddDeck} />
              <Stack.Screen name="Quiz" component={Quiz} />
              <Stack.Screen name="NoCards" component={NoCards} />              
            </Stack.Navigator>
          </View>
        </Provider>
      </NavigationContainer>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
