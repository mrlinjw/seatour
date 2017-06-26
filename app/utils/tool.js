import config from './config';
import {
  Alert,
  ToastAndroid,
  Platform
} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';


const Tool = {};

/**
 * [fetch description]
 * @param  {[type]} cmp        [请求页面容器，主要用于显示loading加载框，传null时不显示加载框，加载款必须为	<Loading  visible={this.state.loading_visible}]  />]
 * @param  {[type]} url        [请求地址]
 * @param  {[type]} params     [参数]
 * @param  {[type]} fn_succ    [成功回调]
 * @return {[type]}            [description]
 */
Tool.fetch = (cmp, url, params, fn_succ) => {
  let keys = '';
  if(params){
    for(let k in params){
      keys += k+'='+params[k]+'&'
    }
    keys = keys.substring(0,keys.length-1);
  }
  cmp && cmp.setState({ loading_visible: true })
  return fetch(config.urlPath+url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: keys
  })
  .then( (response) => {
    return response.json();
  } )
  .then( (result ) => {
      cmp && cmp.setState({ loading_visible: false })
      if( result.code == 200 ){
        if(fn_succ && Tool.isFunction( fn_succ ))
          fn_succ.call(this, result.data);
      }
      //399未登录，398未实名
      else if(result.code == '399')
        Tool.alert('请先登录',true)
      else if(result.code == '398') {
        Tool.alert('未实名认证',true)
      } else{
        setTimeout(()=>{
          Tool.alertLong(result.errorMessage);
        },1);
      }
      return;
  })
  .catch((error) => {
    //这里loading跟alert都用到了modal框，使用setTimeout重置代码序列，保证同步执行
    cmp && cmp.setState({ loading_visible: false })
    setTimeout(()=>{
      Tool.alertLong('网络错误，信息提交失败');
    },1);
  });
}

Tool.upload = (cmp, url, imgArray, fn_succ) => {
  if(imgArray.length<=0)return;
   let formData = new FormData();
    for(var i = 0;i<imgArray.length;i++){
        let file = {uri: imgArray[i].uri, type: 'multipart/form-data', name: imgArray[i].fileName};
        formData.append("files",file);
    }
    cmp && cmp.setState({ loading_visible: true })
    fetch(config.urlPath+url, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData
    })
    .then( (response) => response.json() )
    .then( (result ) => {
        cmp && cmp.setState({ loading_visible: false })
        if( result.code == 200 ){
          if(fn_succ && Tool.isFunction( fn_succ ))
            fn_succ.call(this, result.data);
        }else{
          setTimeout(()=>{
            Tool.alertLong('图片上传失败：'+result.alertMsg);
          },1)
          return;
        }
        return;
    })
    .catch((error) => {
      cmp && cmp.setState({ loading_visible: false });
      setTimeout(()=>{
        Tool.alert('网络出错：'+error.message)
      },1)

    });
}

Tool.uploadImage = (cmp, callback) => {
  var options = {
    title: '请选择图片',
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle:'从相册选择',
    quality: 0.75,
    noData: false,
    allowsEditing: true,
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  };
  ImagePicker.showImagePicker(options,(response) => {
    console.log(response);
    if(response.didCancel)return;
    Tool.upload(cmp,'oss/uploadFile',[response],(ret)=>{
      if(Tool.isFunction(callback))
        callback.call(this, ret);
    });
    // let source = '';
    // if (Platform.OS === 'android') {
    //     source = {uri: response.uri, isStatic: true};
    // } else {
    //     source = {
    //         uri: response.uri.replace('file://', ''),
    //         isStatic: true
    //     };
    // }
    // this.setState({
    //   imageUrl: source
    // });
  });
}

Tool.to = (key, params) => {
  let routeAction = Actions[key];
  routeAction(params);
}
Tool.back = () => {
  Actions.pop();
}

Tool.alert = (content, isAlert) => {
  Tool.alertShort(content, isAlert);
}

Tool.alertShort = (content, isAlert) => {
  if(!content)content = '未知错误'
  if(isAlert || Platform.OS === 'ios')
    Alert.alert('提示', content.toString())
  else
    ToastAndroid.show(content.toString(), ToastAndroid.SHORT)
}

Tool.alertLong = (content, isAlert) => {
  if(!content)content = '未知错误'
  if(isAlert || Platform.OS === 'ios')
    Alert.alert('提示', content.toString())
  else
    ToastAndroid.show(content.toString(), ToastAndroid.LONG)
}


Tool.isObject = (obj) => {
    return typeof(obj) == 'object' && Object.prototype.toString.call(obj).toLowerCase() === '[object object]' && !obj.length; //true 是 false不是
}

Tool.isArray = (arr) => {
    return Object.prototype.toString.call(arr).toLowerCase() === '[object array]';
}

Tool.isBoolean = function(v){
    return typeof v === 'boolean';
}
Tool.isFunction = function(v){
    return Object.prototype.toString.apply(v) === '[object Function]';
}
Tool.isEmpty = function(v, allowBlank) {
    return v === null || v === undefined || ((Tool.isArray(v) && !v.length)) || (!allowBlank ? v === '' : false);
}

Tool.isNumber = function( v ){
    return typeof parseInt( v ) === 'number';
}

/**
*数组合并去重：将来arr2合并到arr1后面
*/
Tool.concat = (arr1, arr2) => {
  if(!Tool.isArray(arr1))arr1=[];
  if(!Tool.isArray(arr2))arr2=[];
  let array = arr1.concat();
  for (var i = 0; i < arr2.length; i++) {
    array.indexOf(arr2[i])===-1?array.push(arr2[i]):0
  }
  return array;
}

export default Tool;
