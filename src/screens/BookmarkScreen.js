import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import {PostList} from "../components/PostList";

export const BookmarkScreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.navigate('Post', { postId: post.id, date: post.date, booked: post.booked });
  };

  const bookedPosts = useSelector(state => state.post.bookedPosts);

  return (
    <PostList data={bookedPosts} onOpen={openPostHandler} />
  )
};

BookmarkScreen.navigationOptions = ({navigation}) => ({
  headerTitle: "Избранное",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title="Toggle Drawer" iconName="ios-menu" onPress={() => navigation.toggleDrawer()}/>
    </HeaderButtons>
  )
});
