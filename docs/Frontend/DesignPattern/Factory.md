# Factory mode

### 简单工厂模式
人员信息管理
```js
const POST_WORK_MAP = new Map([
  ['boss',['管理','发钱']],
  ['guard',['秩序']],
  ['staff',['策划']],
])

function User(name, age, post, works) {
  this.name = name
  this.age = age
  this.post = post
  this.works = works
}

function Factory(name, age, post) {
  const works = POST_WORK_MAP.get(post)
  return new User(name,age,post,works)
}
```
:::  tip 总结
简单工厂的模式在于把控区分变和不变的，然后固定不变的部分，控制变的部分，打到开放封闭的原则
:::

### 抽象工厂模式
开办个手机厂
* 一个加工厂
* 一个操作系统
* 一套硬件
```js
class AbstractPhoneFactory{
  createOs(){
    throw new Error('抽象工厂方法不许直接调用，需要重写')
  }
  createHardware(){
    throw new Error('抽象工厂方法不许直接调用，需要重写')
  }
}
class AbstractOs{
  controlHardware(){
    throw new Error('抽象工厂方法不许直接调用，需要重写')
  }
}
class AbstractHardware{
  runCommand(){
    throw new Error('抽象工厂方法不许直接调用，需要重写')
  }
}

class HuaweiOs extends AbstractOs{
  controlHardware(){
    console.log('我会用安卓的方式操作硬件')
  }
}
class HuaweiHardware extends AbstractHardware{
  runCommand(){
    console.log('我会用高通芯片方式执行')
  }
}

class HuaweiPhoneFactory extends AbstractPhoneFactory{
  createOs(){
    return new HuaweiOs()
  }
  createHardware(){
    return new HuaweiHardware()
  }
}

const huaweiPhone = new HuaweiPhoneFactory()
const huaweiOs = huaweiPhone.createOs()
huaweiOs.controlHardware()
// 我会用安卓的方式操作硬件
const huaweiHardware = huaweiPhone.createHardware()
huaweiHardware.runCommand()
// 我会用高通芯片方式执行
```
现在制裁来了，不让用安卓和高通芯片了，直接在实例化两个抽象操作系统和硬件就好了
```js
class HarmonyOs extends AbstractOs{
  controlHardware(){
    console.log('我会用鸿蒙的方式操作硬件')
  }
}
class QiLinHardware extends AbstractHardware{
  runCommand(){
    console.log('我会用麒麟的芯片的方式')
  }
}

class HarmonyPhoneFactory extends AbstractPhoneFactory{
   createOs(){
    return new HarmonyOs()
  }
  createHardware(){
    return new QiLinHardware()
  }
}

const harmonyPhone = new HarmonyPhoneFactory()
const harmonyOs = harmonyPhone.createOs()
harmonyOs.controlHardware()
// 我会用鸿蒙的方式操作硬件
const qiLinHardware = harmonyPhone.createHardware()
qiLinHardware.runCommand()
// 我会用麒麟芯片方式执行
```
:::  tip 总结
抽象工厂在简单的前提上，固化了，一个工厂的不变的部分，形成了一个固有的框架，和制定了方法原则，至于在规定的方法里面你要实现什么样的逻辑就是开放的
:::