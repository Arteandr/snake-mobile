import React from "react";
import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";
import colors from "../config/colors";
import SettingsIcon from "../assets/ico/SettingsIcon";
import SearchIcon from "../assets/ico/SearchIcon";
import PlusIcon from "../assets/ico/PlusIcon";



export default function NavbarComponent({ state, descriptors, navigation, position }) {

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <View style={styles.navigation__settingsIcon}>
          <SettingsIcon />
        </View>
        <Text style={styles.navigation__title}>Accounts</Text>
        <View style={styles.navigation__right}>
          <View>
            <SearchIcon />
          </View>
          <View>
            <PlusIcon />
          </View>
        </View>
      </View>
      <View style={styles.pages__center}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          }

          return (
            <View
              key={index}
              style={[styles.pages__button, isFocused ? styles.pages__button__active : styles.pages__button]}>
              <TouchableNativeFeedback
                accessibilityRole="button"
                accessibilityStates={isFocused ? ['selected'] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
              >
                <Text style={styles.pages__button__text}>{label}</Text>
              </TouchableNativeFeedback>
            </View>
          );

        })}
      </View>
      <View style={styles.borderBottom}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  //текущая странциа
  navigation: {
    justifyContent: "center",
    flexDirection: "row",
    textAlign: "center",
    width: "100%",
    paddingBottom: 12,
    marginTop: 12,
  },
  navigation__title: {
    color: colors.white,
    fontSize: 17,
  },
  navigation__right: {
    flexDirection: "row",
    width: 60,
    justifyContent: "space-between",
    position: "absolute",
    right: 15,
  },
  navigation__settingsIcon: {
    position: "absolute",
    left: 15,
  },
  // переключение страниц в нафигации
  pages__center: {
    flexDirection: "row",
    paddingTop: 12,
  },
  pages__button: {
    width: "25%"
  },
  pages__button__text: {
    textAlign: "center",
    color: colors.white,
    textTransform: "uppercase",
    opacity: 0.7,
  },
  pages__button__text__active: {
    opacity: 1,
  },
  pages__button__active: {
    paddingBottom: 10,
    borderBottomColor: colors.white,
    borderBottomWidth: 2,
  },
  borderBottom: {
    width: "100%",
    height: 1,
    backgroundColor: "rgba(255,255,255,0.1)",
    position: "absolute",
    bottom: 0,
  },
});
