const padZero = (num) => {
    return num < 10 ? `0${num}` : num;
}
// date对象转格式化字符串
export const dateToString = (daterange) => {
    return `${daterange.getFullYear()}-${padZero(daterange.getMonth() + 1)}-${padZero(daterange.getDate())} ${padZero(daterange.getHours())}:${padZero(daterange.getMinutes())}:${padZero(daterange.getSeconds())}`
}


// 时间戳转格式化字符串
export function formatDate(value) {
    var date = new Date(value);
    var y = date.getFullYear(),
      m = date.getMonth() + 1,
      d = date.getDate(),
      h = date.getHours(),
      i = date.getMinutes(),
      s = date.getSeconds();
    if (m < 10) { m = '0' + m; }
    if (d < 10) { d = '0' + d; }
    if (h < 10) { h = '0' + h; }
    if (i < 10) { i = '0' + i; }
    if (s < 10) { s = '0' + s; }
    var t = y + '-' + m + '-' + d + ' ' + h + ':' + i + ':' + s;
    return t;
  }
  