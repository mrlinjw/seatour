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
	/**
	 * title： 为H5页面的title
	 */
	onMessage( even ){
		let title = even.nativeEvent.title || '海约';
		Actions.refresh({
				title: title
		});
	}
	render(){
		return(
			<WebView
				onMessage = { this.onMessage.bind(this) }
				source={{uri: this.props.url}}
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
