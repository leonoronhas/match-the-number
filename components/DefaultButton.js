import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { scale, verticalScale } from "react-native-size-matters";

import Color from "../constants/colors";
const DefaultButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ ...styles.button, ...props.style }}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 30,
    // Shadow props iOS only
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    // Elevation props Android only
    elevation: 8,
    backgroundColor: Color.primary,
    padding: 15,
    borderRadius: 20,
    width: scale(190),
    height: verticalScale(50),
  },
  buttonText: {
    color: "white",
    fontFamily: "mouseMemoirs",
    fontSize: RFPercentage(4),
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    textShadowColor: "#000",
  },
});

export default DefaultButton;