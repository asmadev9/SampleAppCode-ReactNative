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
import AuthService from "../../services/AuthService";



export default function SignIn({ navigation }) {
  const [pic, setPic] = useState("QDZZ3333");
  const [userId, setUserId] = useState("2277981");
  const [password, setPassword] = useState("12345678");
  const [secureText, setSecureText] = useState(true);
  const [loading, setLoading] = useState(false);  
  
  const signIn = async () => {
      try {
        const data = await AuthService.login(pic, userId, password);
        console.log(data);
      } catch (error) {
        console.log(error.response.data)
      }
  }

  return (
    <View style={styles.conatiner}>
      <View style={styles.header}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.textStyle}>ONE PLATFORM</Text>
      </View>
      <KeyboardAvoidingView style={styles.content}>
        <ScrollView style={{ flex: 1 }}>
          <Text style={styles.welcome}>Welcome Back</Text>
          <AuthInput
            placeholder={"PIC"}
            value={pic}
            onChangeText={(value) => setPic(value)}
          />
          <AuthInput
            placeholder={"User ID"}
            value={userId}
            onChangeText={(value) => setUserId(value)}
          />
          <AuthInput
            placeholder={"Password"}
            showEye={true}
            secureTextEntry={secureText}
            secureText={secureText}
            onPress={() => setSecureText(!secureText)}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <AuthButton
            text={"Forgot your password?"}
            simpleButton={true}
            justifyContent={"flex-end"}
          />
          <AuthButton
            disabled={loading}
            text={loading ? "Loading..." : "SIGN IN"}
            bgColor={Colors.bgColor}
            alignItems={"center"}
            textColor='white'
            onPress={signIn}
          />
          <AuthButton
            text={"Don't Have A Pic?"}
            simpleButton={true}
            justifyContent={"center"}
            onPress={() => navigation.navigate("SignUp")}
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
    height: '20%',
    width: '20%',
    resizeMode: 'contain'
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
  image: {
    // width: '100%',
    height: "150%",
    top: 10,
    right: 60,
  },
});