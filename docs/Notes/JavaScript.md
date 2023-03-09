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

- 对比前后数据
用于信息变更，提交最小数据量给服务器
```js
export const updateDiff = (update, original) => {
  const excludeKey = ['created_at', 'updated_at', 'deleted_at']
  const diff = (update, original) =>
    transform(update, (result, value, key) => {
      if (!excludeKey.includes(key) && !isEqual(value, original[key])) {
        result[key] = isObject(value) && isObject(original[key]) ? diff(value, original[key]) : value
      }
    })
  return diff(update, original)
}
```

- 获取树形结构父节点
```js
const getPathInTree = (tree, id) => {
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