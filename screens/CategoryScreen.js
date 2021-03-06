import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Alert,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { EventRegister } from "react-native-event-listeners";

import Color from "../constants/colors";
import DefaultTitleText from "../components/DefaultTitleText";
import DefaultButton from "../components/DefaultButton";
import DefaultDoneButton from "../components/DefaultDoneButton";

import { setOption } from "../data/categoryOption";
import { setChosenNumber, getChosenNumber } from "../data/chosenNumber";
import { randomIntFromInterval, getNumber } from "../data/number";

const CategoryScreen = ({ navigation }) => {
  const [selected, setSelected] = useState("");

  const handleOption = (option) => {
    setSelected(option);
    setOption(option);
    let random = randomIntFromInterval(100, 500);
    setChosenNumber(getNumber(option, random));
    console.log("ChosenNumber in category screen is " + getChosenNumber())
    EventRegister.emit("setOption", option);
  };

  const randomize = () => {
    let options = [
      "ROMAN",
      "DECIMAL",
      "HEXADECIMAL",
      "BINARY",
      "PERCENT",
      "CURRENCY",
    ];

    let randomOptionNumber = Math.floor(Math.random() * options.length);
    let randomOption = options[randomOptionNumber];
    handleOption(randomOption);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.text}>
        <DefaultTitleText>Choose category:</DefaultTitleText>
      </View>
      <View style={styles.categoryContainer}>
        <DefaultButton
          style={
            selected === "ROMAN" ? styles.activeOption : styles.inactiveOption
          }
          onPress={() => {
            handleOption("ROMAN");
          }}
        >
          <Text style={styles.buttonTextColor}>ROMAN</Text>
        </DefaultButton>
        <DefaultButton
          style={
            selected === "DECIMAL" ? styles.activeOption : styles.inactiveOption
          }
          onPress={() => {
            handleOption("DECIMAL");
          }}
        >
          <Text style={styles.buttonTextColor}>DECIMAL</Text>
        </DefaultButton>
        <DefaultButton
          style={
            selected === "BINARY" ? styles.activeOption : styles.inactiveOption
          }
          onPress={() => {
            handleOption("BINARY");
          }}
        >
          <Text style={styles.buttonTextColor}>BINARY</Text>
        </DefaultButton>
        <DefaultButton
          style={
            selected === "HEXADECIMAL"
              ? styles.activeOption
              : styles.inactiveOption
          }
          onPress={() => {
            handleOption("HEXADECIMAL");
          }}
        >
          <Text style={styles.buttonTextColor}>HEXADECIMAL</Text>
        </DefaultButton>
        <DefaultButton
          style={
            selected === "PERCENT" ? styles.activeOption : styles.inactiveOption
          }
          onPress={() => {
            handleOption("PERCENT");
          }}
        >
          <Text style={styles.buttonTextColor}>PERCENT</Text>
        </DefaultButton>
        <DefaultButton
          style={
            selected === "CURRENCY"
              ? styles.activeOption
              : styles.inactiveOption
          }
          onPress={() => {
            handleOption("CURRENCY");
          }}
        >
          <Text style={styles.buttonTextColor}>CURRENCY</Text>
        </DefaultButton>
      </View>
      <View style={styles.doneContainer}>
        <DefaultButton
          style={selected === "RANDOM" ? styles.activeOption : styles.random}
          onPress={randomize}
        >
          RANDOM
        </DefaultButton>
        <DefaultDoneButton
          style={styles.done}
          onPress={() => {
            if (selected === "") {
              Alert.alert(
                "Please choose a category!",
                "This will help you see if you have what it takes 😉",
                [
                  {
                    text: "Not ready yet...",
                    onPress: () => navigation.navigate("NewGameScreen"),
                    style: "cancel",
                  },
                  { text: "sounds good", style: "default" },
                ]
              );
            } else {
              navigation.navigate("NewGameScreen");
            }
          }}
        ></DefaultDoneButton>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Color.primary,
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    height: verticalScale(150),
  },
  options: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  text: {
    alignItems: "center",
    marginVertical: 20,
  },
  doneContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 20,
    width: scale(500),
  },
  done: {
    backgroundColor: "white",
  },
  random: {
    backgroundColor: Color.accent,
  },
  activeRandomOption: {
    backgroundColor: Color.danger,
  },
  buttonTextColor: {
    color: Color.warning,
  },
  activeOption: {
    backgroundColor: Color.accent,
    marginBottom: 20,
  },
  inactiveOption: {
    backgroundColor: "white",
    marginBottom: 20,
  },
});

export default CategoryScreen;
