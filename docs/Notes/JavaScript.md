# JavaScript Note

### 正则

- 车牌
```js
const province = '京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领'
const licensePlate = /^[province][A-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]{0,1}$/
```

### 工具函数

- 睡眠延迟
```js
const sleep = time => new Promise(resolve=> setTimeout(resolve,time))
```

- 获取树形结构父节点
```js
const getPathId = (tree, id) => {
  if (!isArray(tree)) return
  const path = []
  const loop = (tree, id) => {
    for (const item of tree) {
      path.push(item.id)
      if (item.id == id) return path
      if (item.children) {
        const child = loop(item.children, id)
        if (child) return child
      }
      path.pop()
    }
  }
  loop(tree, id)
  return path
}
```

- 表单提交前后数据对比
```js
// transform loadsh 方法
const updateDiff = (update: any, original: any) => {
  const excludeKey = ['created_at', 'updated_at', 'deleted_at']
  const diff = (update: any, original: any) =>
    transform(update, (result: any, value, key: any) => {
      if (!excludeKey.includes(key) && !isEqual(value, original[key])) {
        result[key] = isObject(value) && isObject(original[key]) ? diff(value, original[key]) : value
      }
    })
  return diff(update, original)
}
```

- uuid
```js
const uuid = () => {
  const tempUrl = URL.createObjectURL(new Blob())
  const uuid = tempUrl.toString()
  URL.revokeObjectURL(tempUrl)
  return uuid.substr(uuid.lastIndexOf("/") + 1)
}
```

- 金额数字转大写
```js
const numToCapital = (amount) => {
  // 当传入的金额没有经过科学计算保留两位小数的话，则用四舍五入进行处理
  amount = Math.round(amount * 100) / 100
  //格式化成两位小数格式（两位小数对应“'角”和“分”）
  let sAmount = Math.abs(amount).toFixed(2)
  // 14个数字单位，1万亿以内的数位按顺序从左到右对应排列
  const sUnit = ['仟', '佰', '拾', '亿', '仟', '佰', '拾', '万', '仟', '佰', '拾', '元', '角', '分']
  // 10个大写数字，以数字为索引取对应的大写（eg: sCapital[8] -> ‘捌’）
  const sCapital = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  //去除小数点（使数字与数位对应）
  sAmount = sAmount.replace('.', '')
  //截取当前传入金额对应的数位集合
  sUnit.splice(0, sUnit.length - sAmount.length)
  let sOutput = ''
  for (let i = 0, len = sAmount.length; i < len; i++) {
    //拼接大写数字与数位
    sOutput += sCapital[Number(sAmount.slice(i, i + 1))] + sUnit[i]
  }
  // 返回的时候用正则过滤掉零千、零百、零万等情况
  return (
    sOutput
      .replace(/零角零分$/, '整')
      .replace(/零[仟佰拾]/g, '零')
      .replace(/零{2,}/g, '零')
      .replace(/零([亿|万])/g, '$1')
      .replace(/零+元/, '元')
      .replace(/亿零{0,3}万/, '亿')
      .replace(/^元/, '零元')
  )
}
```

- 获取文件名和扩展名
```js
const getFileName = (str) => str.substring(0, str.lastIndexOf('.'));

const getExtension = (str) => str.substring(str.lastIndexOf('.') + 1);
```