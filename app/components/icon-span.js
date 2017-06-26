import React, { Component } from 'react';
import{
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
}from 'react-native';

export default class IconSpan extends Component{
  constructor(props){
    super(props);
  }
  render(){
    let { icon, text, click } = this.props;
    return (
        <TouchableOpacity onPress={click}>
          <View style={ styles.containers } >
            <Image source={ icon } style={ styles.images }/>
            <Text style={ styles.text }>{ text }</Text>
            <Image source={require('../img/icon_right.png')} style={ styles.arrow }/>
          </View>
        </TouchableOpacity>
      )
  }
}

const styles = StyleSheet.create({
  containers: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
  images: {
    width: 30,
    height: 30,
  },
  text: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'left',
  },
  arrow: {
    width: 9,
    height: 18,
  }
})
