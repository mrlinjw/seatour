import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  View,
} from 'react-native';
import Carousel from 'react-native-looped-carousel';

const { width, height }  = Dimensions.get('window');


export default class Index extends Component {
	constructor(props){
			super(props);
      let now = new Date();

			this.state = {
        imageUrl: {uri:"https://haiyuexing.oss-cn-shenzhen.aliyuncs.com/pub/attachment/2017/05/08/152b32f8b54242a49e06ed7a4291b78b.jpg"},
        size: { width: width, height: 160 },
        ativities: [
          {img:'https://haiyuexing.oss-cn-shenzhen.aliyuncs.com/pub/attachment/2017/05/08/152b32f8b54242a49e06ed7a4291b78b.jpg'},
          {img:'https://haiyuexing.oss-cn-shenzhen.aliyuncs.com/pub/attachment/2017/05/22/f4adc673139e4965aca8bc9240a595cf.jpg'},
          {img:'https://haiyuexing.oss-cn-shenzhen.aliyuncs.com/pub/attachment/2017/05/08/152b32f8b54242a49e06ed7a4291b78b.jpg'},
          {img:'https://haiyuexing.oss-cn-shenzhen.aliyuncs.com/pub/attachment/2017/05/08/152b32f8b54242a49e06ed7a4291b78b.jpg'},
          {img:'https://haiyuexing.oss-cn-shenzhen.aliyuncs.com/pub/attachment/2017/05/22/f4adc673139e4965aca8bc9240a595cf.jpg'}
        ],
        articles:[
          {img:'https://haiyuexing.oss-cn-shenzhen.aliyuncs.com/pub/attachment/2017/05/08/152b32f8b54242a49e06ed7a4291b78b.jpg',title:'标题',content:'内容',author: 'lin'},
          {img:'https://haiyuexing.oss-cn-shenzhen.aliyuncs.com/pub/attachment/2017/05/22/f4adc673139e4965aca8bc9240a595cf.jpg',title:'标题标题标题标题标题标题标题标题标题标题标题标题标题',content:'这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容这个是内容',author: 'lin'},
          {img:'https://haiyuexing.oss-cn-shenzhen.aliyuncs.com/pub/attachment/2017/05/08/152b32f8b54242a49e06ed7a4291b78b.jpg',title:'标题',content:'内容',author: 'lin'},
          {img:'https://haiyuexing.oss-cn-shenzhen.aliyuncs.com/pub/attachment/2017/05/08/152b32f8b54242a49e06ed7a4291b78b.jpg',title:'标题',content:'内容',author: 'lin'},
          {img:'https://haiyuexing.oss-cn-shenzhen.aliyuncs.com/pub/attachment/2017/05/22/f4adc673139e4965aca8bc9240a595cf.jpg',title:'标题',content:'内容',author: 'lin'}
        ]
			};
		}
    componentDidMount(){

		}
    search(type){
      console.log(type)
    }
	  render() {
	    return (
        <View style={styles.container}>
  	      <ScrollView>

              <Carousel
                delay={3000}
                style={this.state.size}
                autoplay
                bullets = {true}
                onAnimateNextPage={(p) => {}}
                >
                <Image source={this.state.imageUrl} style={this.state.size}/>
                <Image source={this.state.imageUrl} style={this.state.size}/>
                <Image source={this.state.imageUrl} style={this.state.size}/>
              </Carousel>

              <View style={[styles.fnMoudle,{ flexDirection:'row' }]}>
                <TouchableOpacity onPress={this.search.bind(this,1)} style={ styles.businessView }>
                  <Image
                    source={require('../img/logo.png')}
                    style={ styles.businessImg}/>
                  <Text
                    style={ styles.businessText }>
                    全部
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.search.bind(this,2)} style={ styles.businessView }>
                  <Image
                    source={require('../img/logo.png')}
                    style={ styles.businessImg}/>
                  <Text
                    style={ styles.businessText }>
                    海钓
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.search.bind(this,3)} style={ styles.businessView }>
                  <Image
                    source={require('../img/logo.png')}
                    style={ styles.businessImg}/>
                  <Text
                    style={ styles.businessText }>
                    海岛游
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={ styles.fnMoudle }>
                <View style={ styles.titleView }>
                  <Text>人气活动</Text>
                  <Text style = { styles.titleMore } onPress={ ()=>console.log('more') }>更多</Text>
                </View>
                <FlatList
                horizontal = {true}
                  data={ this.state.ativities }
                  renderItem={ (ret)=>{
                    let imgUri = { uri: ret.item.img}
                     return (<Image source={imgUri} style={{ width: 100, height: 60, marginRight: 10}}/>)
                    }
                  }
                />
              </View>

              <View style={ styles.fnMoudle }>
                <View style={ styles.titleView }>
                  <Text>热门线路</Text>
                  <Text style = { styles.titleMore } onPress={ ()=>console.log('more') }>更多</Text>
                </View>
                <FlatList
                  data={ this.state.ativities }
                  renderItem={ (ret)=>{
                    let imgUri = { uri: ret.item.img}
                     return (<Image source={imgUri} style={{ width: width, height: 100, marginBottom: 10}}/>)
                    }
                  }
                />
              </View>

              <View style={ [styles.fnMoudle,{ borderBottomWidth: 0} ]}>
                <View style={ styles.titleView }>
                  <Text>文章分享</Text>
                  <Text style = { styles.titleMore } onPress={ ()=>console.log('more') }>更多</Text>
                </View>
                <FlatList
                  data={ this.state.articles }
                  renderItem={ ( ret )=>{
                    let imgUri = { uri: ret.item.img}
                     return (
                       <TouchableOpacity style={{ marginBottom: 10 }} onPress={()=>console.log('list')}>
                          <View style={{flexDirection: 'row'}}>
                            <Image source={imgUri} style={{ width: 100, height: 100, marginBottom: 5, marginRight:5}}/>
                            <View style={{height:100, overflow: 'hidden'}}>
                              <Text style={{fontSize:14, lineHeight: 20, marginBottom:5}}>{ret.item.title}</Text>
                              <Text numberOfLines={3} style={{fontSize:12,lineHeight: 18}}>{ret.item.content}</Text>
                            </View>
                          </View>
                          <Text>{'作者：'+ret.item.author}</Text>
                       </TouchableOpacity>
                     )
                    }
                  }
                />
              </View>

  	      </ScrollView>
        </View>
	    );
	  }
}

const styles = StyleSheet.create({
	  container: {
	    flex: 1,
	    backgroundColor: '#eeeeee',
	  },
    businessView: {
      marginLeft: 10,
      marginRight: 20,
    },
    businessImg: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    businessText: {
      textAlign: 'center',
    },
    fnMoudle: {
      borderBottomWidth: 0.5,
      borderBottomColor: 'gray',
      padding: 10,
    },
    titleView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 0,
      height: 30,
    },
    titleMore: {
      color: 'gray',
    }
});
