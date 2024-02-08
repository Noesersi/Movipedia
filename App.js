import React from "react";
import Home from "./src/views/home/home";
import DetailView from "./src/views/detailMovieView/detailMovieView";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator options={{ header: () => null }} initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ header: () => null }}
          component={Home}
        />
      <Stack.Screen
          name="DetailView"
          options={{ header: () => null }}
          component={DetailView}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
