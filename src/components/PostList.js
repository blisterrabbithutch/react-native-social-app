import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import {Post} from "./Post";

export const PostList = ({ data, onOpen }) => {

  if (!data.length) {
    return <View style={styles.wrapper}>
      <Text style={styles.noitems}>Пока нет заметок</Text>
    </View>
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        style={styles.flatlist}
        data={data}
        keyExtractor={post => post.id.toString()}
        renderItem={( {item} ) => <Post post={item} onOpen={onOpen} />}
      />
    </View>
  )
};


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    padding: 10,
  },
  flatlist: {
    width: '100%',
  },
  noitems: {
    fontFamily: 'open-regular',
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 18,
  }
});