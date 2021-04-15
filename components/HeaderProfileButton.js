import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

const HeaderProfileButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginRight: 12 }}>
      <Image source={{uri: 'https://randomuser.me/api/portraits/men/32.jpg'}} style={{height: 32, width: 32, borderRadius: 32/2}} />
    </TouchableOpacity>
  );
};

export default HeaderProfileButton;
