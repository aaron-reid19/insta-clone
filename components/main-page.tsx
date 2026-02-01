import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

// Create Mock Data for Main Page
//Stories
const stories = [
  {
    id: "1",
    name: "User1",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: "2",
    name: "User2",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "3",
    name: "User3",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: "4",
    name: "User4",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: "5",
    name: "User5",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: "6",
    name: "User6",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// Posts

const posts = [
  {
    id: "1",
    username: "john_doe",
    profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
    postImage:
      "https://images.pexels.com/photos/30237034/pexels-photo-30237034/free-photo-of-chateau-de-le-lude-in-golden-hour.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 120,
    caption: "Enjoying the sunset 🌅 #blessed",
  },
  {
    id: "2",
    username: "alice_smith",
    profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
    postImage:
      "https://images.pexels.com/photos/15062488/pexels-photo-15062488/free-photo-of-snow-near-castle-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    likes: 98,
    caption: "Best day ever! ☀️",
  },
];

const MainPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image 
      source={{uri:""}}
      />
      </View>
      
    </View>
  )
}

export default MainPage

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
  header:{
    flexDirection:"row",
    alignItems: "center",
    
  }
})