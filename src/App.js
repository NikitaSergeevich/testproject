import React, { Component } from 'react';
import FriendsList from './FriendsList';
import {
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const friends = [
  {
    "id": "1",
    "firstName": "Sergey",
    "lastName": "Pimeov",
    "avatarUrl": "https://placehold.it/100x100",
    "isOnline": false,
    "company": "Dooglys",
    "email": "ps@dooglys.com"
  },
  {
    "id": "2",
    "firstName": "Maxim",
    "lastName": "Kuznetsov",
    "avatarUrl": "https://placehold.it/100x100",
    "isOnline": false,
    "company": "Dooglys",
    "email": "helenstout@ebidco.com",
  },
  {
    "id": "3",
    "firstName": "Alexey",
    "lastName": "Chesnokov",
    "avatarUrl": "https://placehold.it/100x100",
    "isOnline": true,
    "company": "Dooglys",
    "email": "garlex@dooglys.ru",
  }
];

export class App extends Component {
  render() {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.imageContainer}>
          <FriendsList friends={friends}/>
          <Image
            style={styles.avatar}
            resizeMode="contain"
            source={{ uri: "http://dooglys.com/img/plans/dooglys.png" }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
    width: 800,
    height: 200,
    borderRadius: 25,
    alignSelf: 'center',
  },
});