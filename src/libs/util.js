let util = {}

util.title = function(title) {
  title = title || 'zvale';
  window.document.title = title;
};
// 移除无效页面
util.removeFalseState = function(arr) {
  let newarr = []
  for (const i in arr) {
    if (arr[i].state) newarr.push(arr[i])
  }
  return newarr
};
// 导航排序
util.sortNav = function(a, b) {
  return a.sort - b.sort
}

export default util;
