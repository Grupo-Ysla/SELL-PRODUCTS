import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./screens/Home";
import Add from "./screens/Add";
import SceneNames from "./navigator/SceneNames";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SceneNames.Home} component={Home} />
      <Stack.Screen
        name={SceneNames.Add}
        component={Add}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};
