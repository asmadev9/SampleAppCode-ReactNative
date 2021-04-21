export const Colors = {
  primary: "#1EABC7",
  secondary: "#0C3C60",
  tertiary: "#ED1566",
  grey: "#999999",
  borderGrey: '#707070',
  lightGrey: "#E1E1E1",
  dark_grey: "#54717E",
  grey: "#7E7B7A",
  light_grey: "#E0E0E0",
  red: "#EF2314",
  bgColor: "#1EABC7",
  bgLightColor: "#F8FDFD",
  _grey: "#C9C9C9",
  title: "#09314E",
};

import { StyleSheet } from "react-native";

export const GlobalStyle = StyleSheet.create({
  background: { flex: 1, backgroundColor: "white", paddingHorizontal: 10 },
  title: { fontSize: 25, color: "black", fontWeight: "500", marginVertical: 5 },
  valueText: { color: "#999999", fontSize: 12 },
  valueTitle: { color: "#000", fontSize: 12 },
});

export const API = {
  BASE_URL: "https://api.oneplatform.simc1.com/api",
}
