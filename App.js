// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './src/screens/MainScreen';
 
function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Text>Go to Detail Screen</Text>
      </TouchableOpacity>
      {/* <Text>Home Screen</Text> */}
    </View>
  );
}

const Stack = createNativeStackNavigator();

function DetailScreen(){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="RecipeListScreen" component={RecipeListScreen} />
        <Stack.Screen name="ScanRecipeScreen" component={ScanRecipeeScreen} /> */}
        <Stack.Screen name="MainScreen" component={MainScreen} options={{
        headerShown: false,}} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;