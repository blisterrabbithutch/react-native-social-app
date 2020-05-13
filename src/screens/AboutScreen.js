import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {MainScreen} from "./MainScreen";

export const AboutScreen = () => {
  return (
    <View style={styles.center}>
      <Text>Приложение для публикации личных заметок</Text>
      <Text>Версия - <Text style={styles.version}>0.7</Text></Text>
    </View>
  )
};

AboutScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "О Приложении",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title="Toggle Drawer" iconName="ios-menu" onPress={() => navigation.toggleDrawer()}/>
    </HeaderButtons>
  )
});

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },
  version: {
    fontFamily: 'open-bold',
  }
});