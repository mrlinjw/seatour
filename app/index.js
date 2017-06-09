import React, { Component } from 'react';

import { Provider } from 'react-redux';
import configureStore from './store/store';
import init from './initialize/index';

import SplashScreen from 'react-native-splash-screen';
import * as wechat from 'react-native-wechat';

import AppRoute from './route/route';


const store = configureStore();
init();

export default class Root extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
		wechat.registerApp('wx6ce431662d339a23');
		SplashScreen.hide();
	}
	render(){
		return(
			<Provider store={store}>
				<AppRoute/>
			</Provider>
		)
	}
}
