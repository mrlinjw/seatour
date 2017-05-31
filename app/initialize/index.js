import initCalendar from './calendar'
import initDate from './date'
import initStroage from './stroage'

export default function initData(){
  //持久化存储
  initStroage();
  //初始化日历数据
  initCalendar();
  //时间处理
  initDate();
}
