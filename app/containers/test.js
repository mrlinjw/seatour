import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Navigator,
  Text,
  Alert,
  Picker,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  View
} from 'react-native';
import Loading from '../components/loading';
import ImagePicker from 'react-native-image-picker';
import {Actions, ActionConst} from 'react-native-router-flux';
import Carousel from 'react-native-looped-carousel';
import Tool from '../utils/tool';
import Scan from '../components/scan';
import StorageUtil from '../utils/storage-util';
import HTMLView from 'react-native-htmlview';
import * as wechat from 'react-native-wechat';
import MyCalendar from '../components/calendar'
const { width, height }  = Dimensions.get('window');
import Button from 'apsl-react-native-button';
import MyButton from '../components/button';
import Rating from '../components/rating';

export default class Test extends Component {
	constructor(props){
			super(props);
      let now = new Date();

			this.state = {
        loading_visible: false,
				language:'Java',
        imageUrl: {uri:"https://haiyuexing.oss-cn-shenzhen.aliyuncs.com/pub/attachment/2017/05/08/152b32f8b54242a49e06ed7a4291b78b.jpg"},
        size: { width: width, height: 280 },
        date: now.format('yyyy-MM-dd'),
        loadtest: false
			};
		}
    componentDidMount(){
      StorageUtil.load('user',(u)=>{
        if(u){
          //alert(u.name)
        }
        else{
          let user = {
            id:1,
            name: 'lin'
          }
          StorageUtil.save('user',user);
        }
      });
		}
		onButtonPress(){
      //Actions.refresh()
      Tool.to('listview',{lin:888})
		}
    pick(){
      Tool.uploadImage(this,(ret) => {
        this.setState({
          imageUrl: {uri: ret[0].fullUrl}
        });
      })
    }
    takePicture(){
      const options = {};
      this.camera.capture({metadata: options})
        .then((data) => console.log(data))
        .catch(err => console.error(err));
    }
    scan(){
      Tool.to('scan',{callback:(response)=>{
        alert(this.state.language)
        Tool.to('mylistview')
        //alert(response.data)
      }})
    }
    async wechataciton(){
      //wechat.openWXApp();
      let result = "await";
      // wechat.shareToSession({
      //   type: 'imageResource',
      //   title: 'resource image',
      //   description: 'share resource image to time line',
      //   mediaTagName: 'email signature',
      //   messageAction: undefined,
      //   messageExt: undefined,
      //   imageUrl: this.state.imageUrl.uri
      // });
      wechat.sendAuthRequest("snsapi_userinfo",'haiyue').then(ret=>{
          console.log(ret);
      });
      console.log('share resource image to time line successful', result);
    }
    toggleCalendar(){
      this.refs.calendar.open();
    }
    confirmFn(day){
      this.setState({
        date:day
      })
    }
    loadtest(){
      this.setState({
        loadtest:true,
      });
      setTimeout(()=>{
        this.setState({
          loadtest:false,
        });
      },3000)
    }
    onRate(rate){
      alert(rate)
    }
	  render() {
	    return (
        <View style={styles.container}>
  	      <ScrollView>
            <HTMLView
              value = '<p><a href="http://baidu.com">nice job!</a></p>'
              stylesheet = { styles.html_styles }
            />
            <Loading visible = {this.state.loading_visible}/>
            <MyButton onPress={this.toggleCalendar.bind(this)}>{'选择日期：'+this.state.date}</MyButton>
	           <Text style={styles.instructions}>
  	            welcome to haile, let us go fishing 66688
	           </Text>
             <Rating max={5} rating ={4} onRate = {this.onRate.bind(this)}/>
             <MyButton
               onPress = { ()=>{Tool.to('login')}} >
               login
             </MyButton>
              <MyButton
                onPress = { this.wechataciton.bind(this)} >
                wechataciton
              </MyButton>
              <Carousel
                delay={3000}
                style={this.state.size}
                autoplay
                onAnimateNextPage={(p) => {}}
                >
                <Image source={this.state.imageUrl} style={this.state.size}/>
                <Image source={this.state.imageUrl} style={this.state.size}/>
                <Image source={this.state.imageUrl} style={this.state.size}/>
              </Carousel>
              <MyButton
                isLoading = {this.state.loadtest}
                onPressOut = {this.loadtest.bind(this)}
              >
              loading
              </MyButton>
  	          <MyButton
  	          	onPress={this.onButtonPress.bind(this)}
                type = {2}
  	          >
              webview
              </MyButton>
              <MyButton
  	          	onPress={ ()=>{ Tool.to('seawebview', {url: config.pagePath+'lineList'}) } }
                type = {2}
  	          >
              listview
              </MyButton>
              <MyButton onPress = {this.pick.bind(this)}>
              选择图片
              </MyButton>
              <TextInput
                underlineColorAndroid='transparent'
                selectionColor='#00cfff'
                style={{height:40,borderColor:'gray', borderWidth:0.5, borderRadius:3, marginBottom:10,marginLeft:10,marginRight:10}}
                placeholder="请输入"
              />
              <Image source={this.state.imageUrl} style={{width:400,height:200}}/>
              <Text onPress={this.scan.bind(this)} style={{padding:20,margin:20}}>扫描</Text>
  	      </ScrollView>
          <MyCalendar ref = { 'calendar' } seletDate = {this.state.date} confirmFn={this.confirmFn.bind(this)}/>
        </View>
	    );
	  }
}

const styles = StyleSheet.create({
	  container: {
	    flex: 1,
	    backgroundColor: '#eeeeee',
	  },
	  welcome: {
	    fontSize: 20,
	    textAlign: 'center',
	    margin: 10,
	  },
	  instructions: {
	    textAlign: 'center',
	    color: '#333333',
	    marginBottom: 5,
	  },
	  textColor:{
	  	backgroundColor:'#00CFFF',
	  	color:'#fff',
	  	borderRadius:18
	  },
	  picker:{
	  	width:200,
	  	height:50
	  }
});


const html_styles = StyleSheet.create({
  a:{
    color: "red",
  },
  img:{
    width: width,
    height: 50,
  }
});
