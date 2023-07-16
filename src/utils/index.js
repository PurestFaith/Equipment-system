/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}

export function tranListToTreeData(list, parent_id) {
  var arr = []
  list.forEach((item) => {
    if (item.parent_id === parent_id) {
      // console.log(item)
      // 找到之后 就要去找 item 下面有没有子节点
      const children = tranListToTreeData(list, item.id)
      if (children.length) {
        // 如果children的长度大于0 说明找到了子节点
        item.children = children
      }
      arr.push(item) // 将内容加入到数组中
    }
  })
  return arr
}


// 定义一个方法，用于递归查找父节点
export const getParentNodes = (treeData, nodeId, parentNodes = []) => {
  console.log(treeData, nodeId);
  for (let i = 0; i < treeData.length; i++) {
    const node = treeData[i]
    if (node.id === nodeId) {
      // 找到了当前子节点，返回它的所有父节点
      return parentNodes
    }
    if (node.children) {
      // 递归查找子节点的父节点
      const result = getParentNodes(node.children, nodeId, [...parentNodes, node])
      if (result) {
        // 如果找到了，直接返回结果
        return result
      }
    }
  }
  // 没有找到，返回null
  return null
}

//tree: 树形结构， menuid: 已知节点属性，（代码中判断id相等）
export function treeFindPath(tree, menuid) {
  var path = [];

  if (!tree) return [];
  var forFn = function (tree, menuid) {
    for (var i = 0; i < tree.length; i++) {
      // 存放最后返回的内容,返回text集合
      var data = tree[i];
      path.push(data);
      if (data.id === menuid) return path;
      if (data.children) {
        const findChildren = forFn(data.children, menuid);
        if (findChildren) return findChildren
      }
      path.pop()
    }
  }
  forFn(tree, menuid);
  return path;
}


export const search = (treeData, nodeId, parentNodes = []) => {
  console.log(treeData, nodeId);
  for (let i = 0; i < treeData.length; i++) {
    const node = treeData[i]
    if (node.id == nodeId) {
      // 找到了当前子节点，返回它的所有父节点
      return parentNodes
    }
    if (node.children) {
      // 递归查找子节点的父节点
      const result = getParentNodes(node.children, nodeId, [...parentNodes, node])
      if (result) {
        // 如果找到了，直接返回结果
        return result
      }
    }
  }
  // 没有找到，返回null
  return null
}


//获取当前日期函数
export function getNowFormatDate() {
  let date = new Date(),
    year = date.getFullYear(), //获取完整的年份(4位)
    month = date.getMonth() + 1, //获取当前月份(0-11,0代表1月)
    strDate = date.getDate() // 获取当前日(1-31)
  // if (month < 10) month = `0${month}` // 如果月份是个位数，在前面补0
  // if (strDate < 10) strDate = `0${strDate}` // 如果日是个位数，在前面补0

  return `${year}-${month}-${strDate}`
}



/**
 *获取当前日期函数
 */
export function getNowFormatDateTxt() {
  let date = new Date(),
    year = date.getFullYear(), //获取完整的年份(4位)
    month = date.getMonth() + 1; //获取当前月份(0-11,0代表1月)
  // strDate = date.getDate() // 获取当前日(1-31)
  if (month < 10) month = `0${month}` // 如果月份是个位数，在前面补0
  // if (strDate < 10) strDate = `0${strDate}` // 如果日是个位数，在前面补0

  return `${year}-${month}`
}



/**
* 获取指定月份的第一天和最后一天
*/
export function getDay(year, month) {
  if (year != '' && month != '') {
    var firstDay = new Date(year, month - 1, 1) //这个月的第一天
    var currentMonth = firstDay.getMonth() //取得月份数
    var lastDay = new Date(firstDay.getFullYear(), currentMonth + 1, 0) //是0而不是-1
    var start = firstDay;
    var date = new Date(start);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    var d = date.getDate();
    d = d < 10 ? "0" + d : d;
    let startime = y + "-" + m + "-" + d;


    var end = lastDay;
    var date = new Date(end);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    var d = date.getDate();
    d = d < 10 ? "0" + d : d;
    let endtime = y + "-" + m + "-" + d;

    return [startime, endtime]
  }
}

// /**
// * @param  // type 0 第一天; 1 最后一天; 不传 当天;
// */
// function getCurMonthFirstOrLast(type = 2) {
//   let date = new Date;
//   let y = date.getFullYear().toString();
//   let m = (date.getMonth() + 1).toString().padStart(2, 0);
//   // let d = (['1', new Date(y, m, 0).getDate(), date.getDate()][type]).toString().padStart(2, 0);
//   return [y, m];
// }
// const res = getCurMonthFirstOrLast()
// console.log(res);
// const aa = getDay(res[0], res[1])
// console.log(aa);
