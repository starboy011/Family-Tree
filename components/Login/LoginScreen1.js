import {
  SafeAreaView,
  StyleSheet,
  Platform,
  Animated,
  View,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import React, { useRef, useEffect, useState } from "react";
import LoginFotter from "./LoginFotter";

const { width, height } = Dimensions.get("window");

const isTablet = width >= 600;

const LoginScreen1 = ({ navigation }) => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const slideAnim = useRef(new Animated.Value(1000)).current;

  const handleLogin = () => {
    if (text === "" && password === "") {
      navigation.navigate("BottomTab");
    } else {
      console.log(text, password);
      console.log("Wrong username or password");
    }
  };

  useEffect(() => {
    Animated.spring(slideAnim, {
      toValue: 0,
      friction: 5,
      tension: 100,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={
          Platform.OS === "ios" ? 0 : -Dimensions.get("window").height * 0.2
        }
      >
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.container}>
            <View style={styles.boxcontainer}>
              <Animated.View
                style={[styles.box, { transform: [{ translateX: slideAnim }] }]}
              />
              <Animated.View
                style={[
                  styles.box1,
                  { transform: [{ translateY: slideAnim }] },
                ]}
              />
              <Animated.View
                style={[
                  styles.box2,
                  { transform: [{ translateY: slideAnim }] },
                ]}
              />
            </View>
            <View style={styles.formcontainer}>
              <Animated.View
                style={[
                  styles.title,
                  { transform: [{ translateY: slideAnim }] },
                ]}
              >
                <Text
                  variant="displayLarge"
                  style={{
                    color: "white",
                    fontFamily: "serif",
                    marginLeft: 15,
                    marginTop: -30,
                  }}
                >
                  Login
                </Text>
              </Animated.View>
              <Animated.View
                style={[
                  styles.inputcontainer,
                  {
                    transform: [
                      { translateY: slideAnim },
                      {
                        rotate: slideAnim.interpolate({
                          inputRange: [0, 750],
                          outputRange: ["360deg", "0deg"],
                        }),
                      },
                    ],
                  },
                ]}
              >
                <TextInput
                  label="Email"
                  value={text}
                  onChangeText={setText}
                  right={<TextInput.Icon icon="email" />}
                  style={{
                    width: "90%",
                    backgroundColor: "#8576FF",
                    opacity: 0.5,
                    marginBottom: 10,
                    marginTop: 50,
                    justifyContent: "center",
                  }}
                />
                <TextInput
                  label="Password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={showPassword}
                  right={
                    <TextInput.Icon
                      icon="eye"
                      onPress={() => setShowPassword(!showPassword)}
                    />
                  }
                  style={{
                    width: "90%",
                    backgroundColor: "#8576FF",
                    opacity: 0.5,
                    justifyContent: "center",
                    marginTop: 20,
                  }}
                />
                <Button
                  icon="login"
                  mode="contained"
                  onPress={handleLogin} // Correctly reference the handleLogin function
                  style={{
                    width: "90%",
                    justifyContent: "center",
                    marginTop: 20,
                  }}
                >
                  Login
                </Button>
              </Animated.View>
              <Animated.View
                style={[
                  styles.fotterContainer,
                  {
                    transform: [
                      {
                        translateY: slideAnim.interpolate({
                          inputRange: [0, 1000],
                          outputRange: [0, -height], // Adjust these values as needed
                        }),
                      },
                    ],
                  },
                ]}
              >
                <LoginFotter />
              </Animated.View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen1;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    overflow: "hidden",
    backgroundColor: "#DFF5FF",
  },
  boxcontainer: {
    width: width,
    height: height * 0.2,
  },
  box: {
    backgroundColor: "#1C1678",
    width: width * (isTablet ? 0.8 : 1),
    height: height * 0.5,
    flexDirection: "row",
    borderRadius: 1000,
    marginTop: isTablet ? -250 : -180,
    marginLeft: width * (isTablet ? -0.2 : -0.3),
  },
  box1: {
    backgroundColor: "#8576FF",
    width: width * (isTablet ? 0.8 : 1),
    height: height * 0.5,
    flexDirection: "row",
    borderRadius: 1000,
    marginTop: isTablet ? -500 : -430,
    marginLeft: width * (isTablet ? 0.5 : 0.55),
    opacity: 0.5,
  },
  box2: {
    backgroundColor: "#67C6E3",
    width: width * (isTablet ? 0.8 : 0.5),
    height: height * 0.25,
    flexDirection: "row",
    borderRadius: 1000,
    marginTop: isTablet ? -250 : -300,
    marginLeft: width * (isTablet ? -0.2 : -0.2),
    opacity: 0.8,
  },
  formcontainer: {
    width: width,
  },
  title: {
    width: width,
  },
  inputcontainer: {
    flex: 1,
    width: width,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  username: {
    backgroundColor: "#8576FF",
    opacity: 0.5,
    width: width * 0.9,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  fotterContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
