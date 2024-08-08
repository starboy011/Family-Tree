import { StyleSheet, Text, View, Alert } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { TextInput, Button } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
const Admin = () => {
  const navigation = useNavigation();
  const [text, setText] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [disable, setDisable] = React.useState(true);
  const handleTitleChange = (inputText) => {
    if (inputText.length <= 40) {
      setTitle(inputText);
      setDisable(false);
    }
  };
  const handleTextChange = (inputText) => {
    if (inputText.length <= 60) {
      setText(inputText);
      setDisable(false);
    }
  };
  const handleSend = () => {
    if (text !== "") {
      Alert.alert(
        "Send Notification",
        "Are you sure you want to send the notification?",
        [
          {
            text: "No",
            onPress: () => console.log("Notification sending cancelled"),
            style: "cancel",
          },
          {
            text: "Yes",
            onPress: handlePress,
          },
        ],
        { cancelable: false }
      );
    }
  };
  const handlePress = () => {
    fetch(`http://192.168.68.116:8085/sendNotification/${title}/${text}`, {
      method: "GET",
    });

    Alert.alert("Congratulations", "Notification initinated successfully");
  };
  return (
    <>
      <Appbar.Header style={{ backgroundColor: "#fff1e0" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Admin login" />
      </Appbar.Header>
      <View style={styles.container}>
        <View
          style={{
            width: "100%",
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <LinearGradient
            colors={["#ffbc73", "#ff9f38", "#ff8400"]}
            style={styles.headerGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.headerText}>Send Notification</Text>
          </LinearGradient>
        </View>
        <View style={{ width: "100%", alignItems: "center" }}>
          <TextInput
            label="Notification title"
            value={title}
            style={{ width: "95%", marginTop: 20 }}
            onChangeText={handleTitleChange}
            backgroundColor={"white"}
            activeUnderlineColor="#ff8400"
          />
          <TextInput
            label="Notification message"
            value={text}
            style={{ width: "95%", marginTop: 20 }}
            onChangeText={handleTextChange}
            multiline={true}
            backgroundColor={"white"}
            activeUnderlineColor="#ff8400"
          />
          <Text
            style={{ marginTop: 10, alignSelf: "flex-end", marginRight: 20 }}
          >{`${text.length}/60 `}</Text>
        </View>
        <View
          style={{
            width: "95%",
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity onPress={handleSend} disabled={disable}>
            <Button
              icon="send"
              mode="contained"
              width={100}
              marginTop={20}
              buttonColor="red"
            >
              Send
            </Button>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Admin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerGradient: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: "center",
    borderRadius: 10,
    width: "95%",
  },
  headerText: {
    fontFamily: "serif",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});
