import Stroage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

export default function initStroage(){
  let stroage = new Stroage({
  	size: 1000,
  	storageBackend: AsyncStorage,
  	defaultExpires: null,
  	enableCache: true,
  })
  global.stroage = stroage;
}
