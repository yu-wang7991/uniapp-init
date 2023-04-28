export default function sort_ascii(obj) {
  let arr = new Array()
  let num = 0
  for (let i in obj) {
    arr[num] = i
    num++
  }
  let sortArr = arr.sort()
  //let sortObj = {};    //完成排序值
  let str = '' //自定义排序字符串
  for (let i in sortArr) {
    str += sortArr[i] + '=' + obj[sortArr[i]] + '&'
    //sortObj[sortArr[i]] = obj[sortArr[i]];
  }
  //去除两侧字符串
  let char = '&'
  str = str.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '')
  return `${str}&appKey=CD446279WZ2ZUI67`
}