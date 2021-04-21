import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AuthButton from "../../components/AuthComponents/AuthButton";
import AuthInput from "../../components/AuthComponents/AuthInput";
import { Colors } from "../../constants";

export default function SignUp({ navigation }) {
  const [pic, setPic] = useState("");
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);
  const [loading, setLoading] = useState(false);

  const signUp = () => {};

  return (
    <View style={styles.conatiner}>
      <View style={styles.header}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.textStyle}>ONE PLATFORM</Text>
      </View>
      <KeyboardAvoidingView style={styles.content}>
        <ScrollView style={{ flex: 1 }}>
          <Text style={styles.welcome}>Sign Up</Text>

          <AuthInput placeholder={"PIC"} value={pic} onChangeText={setPic} />
          <AuthInput
            placeholder={"User ID"}
            value={userId}
            onChangeText={setUserId}
          />
          <AuthInput
            placeholder={"Email"}
            value={email}
            onChangeText={setEmail}
            keyboardType={"email-address"}
          />
          <AuthInput
            placeholder={"Password"}
            showEye={true}
            secureTextEntry={secureText}
            secureText={secureText}
            onPress={() => setSecureText(!secureText)}
            value={password}
            onChangeText={setPassword}
          />

          <AuthButton
            text={loading ? "Loading..." : "SIGN UP"}
            bgColor={Colors.bgColor}
            alignItems={"center"}
            textColor="white"
            onPress={signUp}
            style={styles.btnContainer}
          />

          <AuthButton
            text={"GO BACK"}
            bgColor={Colors.grey}
            alignItems={"center"}
            textColor="white"
            onPress={() => navigation.goBack()}
            style={styles.btnContainer}
          />
        </ScrollView>
      </KeyboardAvoidingView>
      <View
        style={{
          flex: 0.15,
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Image
          source={require("../../assets/bars.png")}
          resizeMode={"contain"}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: "20%",
    width: "20%",
    resizeMode: "contain",
  },
  textStyle: {
    fontSize: 18,
    marginTop: 15,
    color: Colors.title,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 20,
    color: Colors.title,
  },
  content: {
    flex: 0.55,
    paddingHorizontal: 17,
  },
  btnText: {
    color: Colors.grey,
    fontSize: 13.5,
  },
  btnContainer: {
    marginTop: 10,
  },
  image: {
    // width: '100%',
    height: "150%",
    top: 10,
    right: 60,
  },
});
