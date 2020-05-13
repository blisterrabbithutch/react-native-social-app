import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Button, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { THEME } from "../theme";
import { useDispatch } from 'react-redux';
import { addPost } from "../store/actions/post";
import { PhotoPicker } from "../components/PhotoPicker";

export const CreateScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const imgRef = useRef();

  const saveHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text: text,
      img: imgRef.current,
      booked: false,
    };
    dispatch(addPost(post));
    navigation.navigate('Main');
  };

  const photoPickHandler = (uri) => {
    imgRef.current = uri;
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Создай новую заметку</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Введите текст заметки"
            value={text}
            onChangeText={setText}
            multiline
          />
          <PhotoPicker  onPick={photoPickHandler} />
          <Button
            color={THEME.MAIN_COLOR}
            title="Создать заметку"
            onPress={saveHandler}
            disabled={ !text }
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
};


CreateScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Создать заметку",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title="Toggle Drawer" iconName="ios-menu" onPress={() => navigation.toggleDrawer()}/>
    </HeaderButtons>
  )
});


const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'open-regular',
    marginVertical: 10,
  },
  textinput: {
    padding: 10,
    marginBottom: 10,
  }

});