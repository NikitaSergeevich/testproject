/**
 * React Native for Web Starter App
 * https://github.com/grabcode/react-native-web-starter
 * Follow me https://twitter.com/grabthecode
 */

import React, { Component } from 'react';
import Friend from './Friend';
import {
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

export default class FriendsList extends Component {

  render() {
    return (
      <ScrollView>
        <View>
            {
              this.props.friends.map(friend =>
                <Friend data = {friend} key={friend.id}/>
              )
            }
        </View>
      </ScrollView>
    );
  }
}
