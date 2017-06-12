import React, { Component } from 'react';

import { Provider } from 'react-redux';
import configureStore from './store/store';
import config from './utils/config';
import init from './initialize/index';

import SplashScreen from 'react-native-splash-screen';
import {registerApp} from 'react-native-wechat';

import AppRoute from './route/route'

const store = configureStore();
init();

export default class Root extends Component {
	constructor(props){
		super(props);
	}
	componentWillMount(){
		registerApp(config.wechatAppID);
	}
	componentDidMount(){
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
