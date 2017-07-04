import React, { Component } from 'react';
import{
	StyleSheet,
	View,
	WebView,
	Dimensions,
	Text
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import Tool from '../utils/tool';
const { width, height }  = Dimensions.get('window');

export default class SeaWebView extends Component{
	constructor(props){
		super(props);
	}
	componentWillMount(){

	}
	render(){
		return(
			<WebView
				source={{uri:'http://wechat.gotosea.com.cn/WeChat/lineList/1'}}
			/>

		)
	}
}

const styles = StyleSheet.create({
	wb:{
		width: width,
		height: height,
		color:'#fff',
		backgroundColor:'#00cfff'
	}
})
