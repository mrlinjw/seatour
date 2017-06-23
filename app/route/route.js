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
        <Scene key='root' style={{}} passProps={true} hideNavBar = {false} style = {styles.scenStyle}>
					<Scene key='indexTabs' component={IndexTabs}
						title='海约行'
						hideBackImage={true}
						initial = {true}
					/>
					<Scene key='test' component={Test} title='test'/>
					<Scene key='login' component={Login} title='登录'  />
					<Scene key='resetPass' component={ResetPass} title='重置密码'/>
          <Scene key='listview' component={RouteList}
						title='listview'
						backTitle='back'
            onRight={()=>{console.log(99);}}
            rightButtonImage = {require('../img/menu_burger.png')}
						renderTitle={()=>{return <TextInput placeholder='ss' style={{ height: 40, marginTop: 20, width: 200,alignSelf:'center', justifyContent:'center',alignItems:'center', borderWidth:0.5, borderColor:'gray', borderRadius:20}}/>}}
          />
          <Scene key='mylistview' component={MyListView} title='mylistview' />
          <Scene key='scan' component={Scan} title='二维码/条码' direction = 'vertical'/>
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
