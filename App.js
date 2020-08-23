import React from "react";
import {
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  View,
  Text,
} from "react-native";
import AllAccountsComponent from "./app/components/AllAccountsComponent";
import colors from "./app/config/colors";
import NavbarComponent from "./app/components/NavbarComponent";

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.app}>
        <SafeAreaView style={styles.container}>
        </SafeAreaView>
        <Tab.Navigator
          initialRouteName="Monthly"
          tabBar={props => <NavbarComponent {...props} />}>
          <Tab.Screen name="Home"
            options={{ title: 'Daily' }}
            component={DetailsScreen} />
          <Tab.Screen name="Weekly" component={DetailsScreen} />
          <Tab.Screen name="Monthly" component={AllAccountsComponent} />
          <Tab.Screen name="Yearly" component={DetailsScreen} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    // TODO: доделать с исппользованием редакса
  },
});

