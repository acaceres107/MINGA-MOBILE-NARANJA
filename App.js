import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from "./src/navigation/Drawer";
import { Provider } from "react-redux";
import { store } from './src/screens/store';

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer> 
    </Provider>
  );
}

