import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  Text,
  Alert,
  Picker,
  Image,
  Dimensions,
  View,
  TouchableOpacity
} from 'react-native';

import IconSpan from '../../components/icon-span';

export default class Personal extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <ScrollView>

        <View style={ [styles.info, styles.borderStyle] }>
          <Image source={require('../../img/logo.png')} style={ styles.headerPic}/>
          <View>
            <Text>张三 </Text>
            <Text>lv1 </Text>
            <Text>海钓大师 </Text>
          </View>
        </View>

        <View style={ [styles.statistics, styles.borderStyle]}>
          <View>
            <Text style={styles.statisticsText}>1</Text>
            <Text style={styles.statisticsText}>帖子</Text>
          </View>
          <View>
            <Text style={styles.statisticsText}>2</Text>
            <Text style={styles.statisticsText}>关注</Text>
          </View>
          <View>
            <Text style={styles.statisticsText}>3</Text>
            <Text style={styles.statisticsText}>粉丝</Text>
          </View>
          <View>
            <Text style={styles.statisticsText}>199987</Text>
            <Text style={styles.statisticsText}>积分</Text>
          </View>
        </View>

        <View style={ styles.borderStyle }>

          <View style={styles.orderTitle }>
            <Text>我的订单</Text>
            <Text>查看订单记录</Text>
          </View>

          <View style={ styles.order}>
            <TouchableOpacity>
              <View>
                <Image source={require('../../img/logo.png')} style={styles.orderImg}>
                  <Text style={styles.bagde}>2</Text>
                </Image>
                <Text>待支付</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Image source={require('../../img/logo.png')} style={styles.orderImg}></Image>
                <Text>待出行</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Image source={require('../../img/logo.png')} style={styles.orderImg}></Image>
                <Text>待评价</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Image source={require('../../img/logo.png')} style={styles.orderImg}></Image>
                <Text>退款</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <IconSpan icon = {require('../../img/logo.png')} text = {'我的优惠券'}  click= {()=>{alert(1)}}/>
        <IconSpan icon = {require('../../img/logo.png')} text = {'我的收藏'}   click= {()=>{alert(2)}}/>
        <IconSpan icon = {require('../../img/logo.png')} text = {'草稿箱'}  />
        <IconSpan icon = {require('../../img/logo.png')} text = {'邀请朋友'}  />
        <IconSpan icon = {require('../../img/logo.png')} text = {'意见反馈'}  />
        <IconSpan icon = {require('../../img/logo.png')} text = {'设置'}  />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  borderStyle: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
  info: {
    flexDirection:'row',
    alignItems: 'center',
  },
  headerPic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  statistics: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statisticsText: {
    textAlign: 'center',
  },
  orderTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 30,
  },
  order:{
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  orderImg: {
    width: 40,
    height: 40,
  },
  bagde: {
    alignSelf:'flex-end',
    textAlign: 'center',
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'red',
    color: '#fff',
  }
})
