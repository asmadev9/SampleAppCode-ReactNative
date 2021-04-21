import React, { useEffect } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { getUser } from "../../utils";
export default AppLoading = ({ navigation }) => {
  useEffect(() => {
    // clearUser();
    _checkUser();
  }, []);

  const _checkUser = async () => {
    const user = await getUser();
    if (user) {
      navigation.replace("Home"); // Pin is not verified
    } else {
      navigation.replace("Auth");
    }
  };
  return <View style={styles.container}></View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
