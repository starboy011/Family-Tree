import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ScissorAnimation from "./components/SplashScreen/ScissorAnimation";
import Login from "./components/Login/Login";
import { Provider as PaperProvider } from "react-native-paper";
import LoginScreen1 from "./components/Login/LoginScreen1";
import BottomTab from "./components/BottomTab/BottomTab";
import FullFamilyTree from "./components/FamilyTree/FullFamilyTree";
import FamilyTreeWithId from "./components/FamilyTree/FamilyTreeWithId";
import FamilyTree from "./components/FamilyTree/FamilyTree";
import GenerationScreen from "./components/Home/GenerationScreen";
import Relationship from "./components/Home/Relationship";
import messaging from "@react-native-firebase/messaging";
import firebase from "@react-native-firebase/app";
const Stack = createStackNavigator();

export default function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    console.log(token);
  }, [token]);

  const checkFcm = async () => {
    try {
      const fcm = await messaging().getToken();
      setToken(fcm);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    checkFcm();
  });
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {showSplash ? (
            <Stack.Screen name="Splash" component={ScissorAnimation} />
          ) : (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="LoginScreen1" component={LoginScreen1} />
              <Stack.Screen name="BottomTab" component={BottomTab} />
              <Stack.Screen name="FullFamilyTree" component={FullFamilyTree} />
              <Stack.Screen name="FamilyTree" component={FamilyTree} />
              <Stack.Screen name="Relationship" component={Relationship} />
              <Stack.Screen
                name="GenerationScreen"
                component={GenerationScreen}
              />
              <Stack.Screen
                name="FamilyTreeWithId"
                component={FamilyTreeWithId}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
