/**
*本地存储
*/

let StorageUtil = {};

StorageUtil.save = (key, value, expires) => {
  stroage.save({
    key: key,
  	data: value,
  	expires: expires || null
  })
}

/**
* key: string
* params: object
*/
StorageUtil.load = (key, callback) => {
  StorageUtil.loadByParams(key, null, callback);
}
StorageUtil.loadByParams = (key, params, callback) => {
  stroage.load({
    key: key,
    autoSync: true,
    syncInBackground: true,
    syncParams: {
      extraFetchOptions: params || null,
      someFlag: true,
    }
  })
  .then( ret => {
    callback.call( this, ret );
  })
  .catch( error => {
    if( 'NotFoundError' == error.name)
      callback.call(this, null);
    else
      console.error('读取数据失败：' + error.message);
  })
}

StorageUtil.remove = ( key ) => {
  stroage.remove({
    key: key
  })
}

StorageUtil.clearMap = () => {
  storage.clearMap();
}

export default StorageUtil;
