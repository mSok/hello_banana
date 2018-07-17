import React, { Component } from 'react';
import { AppRegistry, Image, View, Text } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    const msg = 'Бананы'
    return (
      <View style={{ flexDirection: 'column', height: 200 }}>
        <Image source={pic} style={{ height: 200 }}/>
        <Text style={{fontSize: 31, alignSelf: 'center'}}>{msg}</Text>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Bananas);
