import React, { Component } from 'react';
import{
	Alert,
	BackAndroid,
	ToastAndroid,
	Platform
}from 'react-native';

import {Scene, Router, ActionConst} from 'react-native-router-flux';

import Index from '../containers/index';
import First from '../containers/first';
import MyListView from '../containers/listview';
import RouteList from '../containers/routelist';
import Scan from '../components/scan';

export default class AppRoute extends Component{
  constructor(props){
    super(props);
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
        <Scene key='root' style={{paddingTop:Platform.OS === 'ios' ? 64 : 54}}>
            <Scene key='index' component={Index} title='index' initial={true}  />
            <Scene key='first' hideNavBar={true} component={First} title='first' />
            <Scene key='listview' component={RouteList} title='listview' backTitle='back'
              onRight={()=>{console.log(99);}}
              rightButtonImage = {require('../img/menu_burger.png')}
            />
            <Scene key='mylistview' component={MyListView} title='mylistview' />
            <Scene key='scan' component={Scan} title='二维码/条码' direction = 'vertical'/>
        </Scene>
      </Router>
    )
  }
}

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
