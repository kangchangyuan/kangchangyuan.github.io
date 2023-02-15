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