import React, { Component } from 'react';
import{
	StyleSheet,
	Image,
	TextInput,
	Alert,
	BackAndroid,
	ToastAndroid,
	Platform
}from 'react-native';

import {Actions, Scene, Router, ActionConst} from 'react-native-router-flux';

import StorageUtil from '../utils/storage-util';

import Test from '../containers/test';
import IndexTabs from '../containers/index-tabs';
import MyListView from '../containers/listview';
import RouteList from '../containers/routelist';
import Scan from '../components/scan';
import SeaWebView from '../containers/webview';
import Map from '../containers/map';


//登录
import Login from '../containers/login/login'
import ResetPass from '../containers/login/reset-pass'

export default class AppRoute extends Component{
  constructor(props){
    super(props);
  }
	componentWillMount(){
		let me = this;
	}
  onExitApp(){
    // Alert.alert('提示','是否提出海约行',[
    // 	{text:'取消',onPress: ()=> {return false}},
    // 	{text:'确定',onPress: ()=> {BackAndroid.exitApp()}}
    // ])
    let now = new Date();
    if( this.lastBackPressed && this.lastBackPressed.add('s',2) >= now){
      return false;
    }
    this.lastBackPressed = now;
    ToastAndroid.show('再按一次退出海约行',ToastAndroid.SHORT);
    return true;
  }
  render(){
    return(
      <Router
        onExitApp = {this.onExitApp.bind(this)}
        navigationBarStyle = {{backgroundColor:'#fff'}}
        backButtonTextStyle = {{backgroundColor:'#fff',color:'#00cfff'}}
        backButtonImage = {require('../img/back_chevron.png')}
        direction = 'horizontal'
        titleStyle = {{color:'#00cfff'}}>
        <Scene key='root' style={{}} passProps={true} hideNavBar = {false} >
					<Scene key='indexTabs' component={IndexTabs}
						style = {styles.scenStyle}
						title='海约行'
						hideBackImage={true}
						initial = {true}
					/>
					<Scene key='test' component={Test} title='test' style = {styles.scenStyle}/>
					<Scene key='login' component={Login} title='登录'  style = {styles.scenStyle}/>
					<Scene key='resetPass' component={ResetPass} title='重置密码' style = {styles.scenStyle}/>
          <Scene key='listview' component={RouteList}
						style = {styles.scenStyle}
						title='listview'
						backTitle='back'
            onRight={()=>{console.log(99);}}
            rightButtonImage = {require('../img/menu_burger.png')}
          />
					<Scene key='mylistview' component={MyListView} title='mylistview' style = {styles.scenStyle}/>
					<Scene key='seawebview' component={SeaWebView} title='' style = {styles.scenStyle}/>
					<Scene key='map' component={Map} title='' hideNavBar = {true}/>
					<Scene key='scan' component={Scan} title='二维码/条码' direction = 'vertical' style = {styles.scenStyle}/>
        </Scene>
      </Router>
    )
  }
}
const styles = StyleSheet.create({
	scenStyle: {
		paddingTop:Platform.OS === 'ios' ? 64 : 54
	}
})

//hideNavBar hideTabBar
//Actions.key(params),进行跳转，key替换为对应的key名称
// const Root = () => (
// 	<Provider store={store}>
// 		<Router >
// 		 	<Scene key='root' >
// 	        	<Scene key='index' component={Index} title='index' initial={true}/>
// 	        	<Scene key='first' component={First} title='first' />
// 	        	<Scene key='listview' component={MyListView} title='listview' />
// 	        </Scene>
// 	    </Router>
// 	</Provider>
// );
//
// export default Root;
