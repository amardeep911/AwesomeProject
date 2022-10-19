import type { Node } from "react";
import PhoneScreen from "./components/PhoneScreen";
import { SafeAreaView, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import OtpScreen from "./components/OtpScreen";
import DialCodeScreen from "./components/DialCodeScreen";
import ContextProvider from "./Store/context";
import Category from "./components/Category";

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App: () => Node = () => {
  return (
    <NavigationContainer>
    <ContextProvider>
        <Stack.Navigator>
          {/* <Stack.Screen component={PhoneScreen} name="Home" options={{headerShown: false}} />
          <Stack.Screen component={OtpScreen} name="OtpScreen" options={{headerShown: false}} />
          <Stack.Screen
            component={DialCodeScreen}
            name="DialCodeScreen"
            options={{ headerShown: false, presentation: "modal" }}
          /> */}
          <Stack.Screen component={Category} name="Category" options={{headerShown: false}}/>
        </Stack.Navigator>
        </ContextProvider>
      </NavigationContainer>
  );
};

export default App;
