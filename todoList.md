1、怎么分析性能问题？
2、性能指标？
3、稳定性？
4、SSR 缓存是怎么做的？
5、JS 实现一个带并发的调度器(scheduler)，保证同时运行的任务最多两个，完善代码中的 Scheduler 类，使得一下程序能正常输出？
6、webview 和小程序的区别（小程序原理，渲染引擎原理）
7、SSR vs SSG
8、小程序话项目方案
9、有什么优化方案？（快照、预请求、串行改并行等）
10、归类：项目的痛点，项目方案，带来多大的收益
11、小程序为什么采用双线程架构？ 浏览器是单线程设计，webWorker 线程安全问题？
12、首屏性能指标（FCP/TTI 等）
13、闭包原理（如何回收掉）
14、实现一个 json stringify

闭包是什么? 闭包的用途?
简述事件循环原理
虚拟 dom 是什么? 原理? 优缺点?
vue 和 react 在虚拟 dom 的 diff 上，做了哪些改进使得速度很快?
vue 和 react 里的 key 的作用是什么? 为什么不能用 Index？用了会怎样? 如果不加 key 会怎样?
vue 双向绑定的原理是什么?
vue 的 keep-alive 的作用是什么？怎么实现的？如何刷新的?
vue 是怎么解析 template 的? template 会变成什么?
如何解析指令? 模板变量? html 标签
用过 vue 的 render 吗? render 和 template 有什么关系

对前端工程化的理解
前端性能优化都做了哪些工作
Nodejs 异步 IO 模型
libuv
设计模式
微前端
节流和防抖
react 有自己封装一些自定义 hooks 吗? vue 有自己封装一些指令吗
vue 向 react 迁移是怎么做的? 怎么保证兼容的
vue 的双向绑定原理
Node 的日志和负载均衡怎么做的
那前后端的分工是怎样的？哪些后端做哪些 node 做

了解过 vue3 吗?
webscoket 的连接原理
react 生命周期
redux 原理
vue 父子组件的通信方式
async await 的原理是什么?
async/await, generator, promise 这三者的关联和区别是什么?

虚拟列表怎么实现?
做过哪些性能优化?

react 和 vue 在技术层面的区别
常用的 hook 都有哪些?
用 hook 都遇到过哪些坑?
了解 useReducer 吗
组件外侧 let a 1 组件内侧点击事件更改 a，渲染的 a 会发生改变吗？如果 let a 放在组件内部，有什么变化吗？和 useState 有什么区别？
了解过 vue3 吗?
Node 是怎么部署的? pm2 守护进程的原理?
Node 开启子进程的方法有哪些?
进程间如何通信?
css 三列等宽布局如何实现? flex 1 是代表什么意思？分别有哪些属性?
前端安全都了解哪些? xss csrf
csp 是为了解决什么问题的?
https 是如何安全通信的?
前端性能优化做了哪些工作?

js 中的闭包
解决过的一些线上问题
线上监控 对于 crashed 这种怎么监控? 对于内存持续增长，比如用了 15 分钟之后才会出现问题怎么监控
对于 linux 熟吗? top 命令的属性大概聊一下?
301 302 304 的区别

async await 的原理是什么?
async/await, generator, promise 这三者的关联和区别是什么?
BFC 是什么? 哪些属性可以构成一个 BFC 呢?
postion 属性大概讲一下, static 是什么表现? static 在文档流里吗?
Webpack 的原理, plugin loader 热更新等等
Set 和 Map
vue 的 keep-alive 原理以及生命周期
vuex

浏览器从输入 url 开始发生了什么
react 生命周期
redux 的原理
vue 父子组件的通信方式
vue 的双向绑定原理
对 vue3 的了解? vue3 是怎么做的双向绑定?

node.js 如何调试
charles map local/map remote
chrome devtool 如何查看内存情况
koa 洋葱模型
中间件的异常处理是怎么做的？
在没有 async await 的时候, koa 是怎么实现的洋葱模型?
body-parser 中间件了解过吗
如果浏览器端用 post 接口上传图片和一些其他字段, header 里会有什么? koa 里如果不用 body-parser，应该怎么解析?
webscoket 的连接原理
https 是如何保证安全的? 是如何保证不被中间人攻击的?

你觉得 js 里 this 的设计怎么样? 有没有什么缺点啥的
vue 的响应式开发比命令式有什么好处
装饰器
vuex
generator 是如何做到中断和恢复的
function 和 箭头函数的定义有什么区别? 导致了在 this 指向这块表现不同
导致 js 里 this 指向混乱的原因是什么?
浏览器的事件循环
宏任务和微任务的区分是为了做什么? 优先级?

小程序的架构? 双线程分别做的什么事情?
为什么小程序里拿不到 dom 相关的 api

Promise then 第二个参数和catch的区别是什么?
Promise finally 怎么实现的
作用域链
Electron架构
微前端
webpack5 模块联邦
Webworker
Symbol
useRef /  ref / forwardsRef 的区别是什么?
useEffect的第二个参数, 传空数组和传依赖数组有什么区别?
如果return 了一个函数, 传空数组的话是在什么时候执行? 传依赖数组的时候是在什么时候执行?
flex布局
ES5继承
ES6继承, 静态方法/属性和实例方法/属性 是什么时候挂载的
Promise各种api
各种css属性

错误捕捉
前端稳定性监控
前端内存处理

promise相关的特性
vue父子组件, 生命周期执行顺序 created mounted
vue3添加了哪些新特性?
xss 的特点以及如何防范?
Http 2.0和http3.0对比之前的版本, 分别做了哪些改进?
HTTP 3.0基于udp的话, 如何保证可靠的传输?
TCP和UDP最大的区别是什么?
CSP除了能防止加载外域脚本, 还能做什么?
typescript is这个关键字是做什么呢?

前端安全 xss之类的
Https中间人攻击
前端History路由配置 nginx

截图怎么实现
qps达到峰值了，怎么去优化
谷歌图片, 如果要实现一个类似的系统或者页面, 你会怎么做?
最小的k个数
节流防抖
sleep函数
js超过Number最大值的数怎么处理?
64个运动员, 8个跑道, 如果要选出前四名, 至少跑几次?
前端路由 a -> b -> c这样前进, 也可以返回 c -> b -> a, 用什么数据结构来存比较高效
node 服务治理



【代码题】 实现一个节流函数? 如果想要最后一次必须执行的话怎么实现?
【代码题】 实现一个批量请求函数, 能够限制并发量?
【代码题】 数组转树结构,写完后问如果要在树中新增节点或者删除节点, 函数应该怎么扩展

```javascript
const arr = [
  {
    id: 2,
    name: "部门B",
    parentId: 0,
  },
  {
    id: 3,
    name: "部门C",
    parentId: 1,
  },
  {
    id: 1,
    name: "部门A",
    parentId: 2,
  },
  {
    id: 4,
    name: "部门D",
    parentId: 1,
  },
  {
    id: 5,
    name: "部门E",
    parentId: 2,
  },
  {
    id: 6,
    name: "部门F",
    parentId: 3,
  },
  {
    id: 7,
    name: "部门G",
    parentId: 2,
  },
  {
    id: 8,
    name: "部门H",
    parentId: 4,
  },
];
```

【代码题】 去除字符串中出现次数最少的字符，不改变原字符串的顺序。

```
“ababac” —— “ababa”
“aaabbbcceeff” —— “aaabbb”
```

【代码题】 写出一个函数 trans，将数字转换成汉语的输出，输入为不超过 10000 亿的数字。

```
trans(123456) —— 十二万三千四百五十六
trans（100010001）—— 一亿零一万零一
```

【代码题】给出代码的输出顺序

```javascript
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(function () {
    console.log('setTimeout');
}, 0)
async1();
new Promise(function (resolve) {
    console.log('promise1');
    resolve();
    console.log('promise2')
}).then(function () {
    console.log('promise3');
});
console.log('script end');

作者：路从今夜白丶
链接：https://juejin.cn/post/7142690757722243102
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

【代码题】 给几个数组, 可以通过数值找到对应的数组名称

```javascript
// 比如这个函数输入一个1，那么要求函数返回A
const A = [1, 2, 3];
const B = [4, 5, 6];
const C = [7, 8, 9];

function test(num) {}
```

【代码题】 不定长二维数组的全排列

```javascript
// 输入 [['A', 'B', ...], [1, 2], ['a', 'b'], ...]
// 输出 ['A1a', 'A1b', ....]
```

【代码题】 两个字符串对比, 得出结论都做了什么操作, 比如插入或者删除

```javascript
pre = "abcde123";
now = "1abc123";
a前面插入了1, c后面删除了de;
```

【代码题】 sleep 函数
【代码题】 节流防抖

【代码题】 ES5 和 ES6 的继承? 这两种方式除了写法, 还有其他区别吗?
【代码题】 EventEmitter

【代码题】 使用 Promise 实现一个异步流量控制的函数, 比如一共 10 个请求, 每个请求的快慢不同, 最多同时 3 个请求发出, 快的一个请求返回后, 就从剩下的 7 个请求里再找一个放进请求池里, 如此循环。

【代码题】 给一个字符串, 找到第一个不重复的字符,时间复杂度是多少?,除了给的两个用例, 还能想到什么用例来测试一下?

```javascript
ababcbdsa;
abcdefg;
```

【代码题】 实现 compose 函数, 类似于 koa 的中间件洋葱模型

```javascript
// 题目需求

let middleware = [];
middleware.push((next) => {
  console.log(1);
  next();
  console.log(1.1);
});
middleware.push((next) => {
  console.log(2);
  next();
  console.log(2.1);
});
middleware.push((next) => {
  console.log(3);
  next();
  console.log(3.1);
});

let fn = compose(middleware);
fn();

/*
1
2
3
3.1
2.1
1.1
*/

//实现compose函数
function compose(middlewares) {}
```

【代码题】 遇到退格字符就删除前面的字符, 遇到两个退格就删除两个字符

```javascript
// 比较含有退格的字符串，"<-"代表退格键，"<"和"-"均为正常字符
// 输入："a<-b<-", "c<-d<-"，结果：true，解释：都为""
// 输入："<-<-ab<-", "<-<-<-<-a"，结果：true，解释：都为"a"
// 输入："<-<ab<-c", "<<-<a<-<-c"，结果：false，解释："<ac" !== "c"

function fn(str1, str2) {}
```

代码输出题

```javascript
console.log(typeof typeof typeof null);
console.log(typeof console.log(1));
```

this 指向题

```javascript
var name = "123";

var obj = {
  name: "456",
  print: function () {
    function a() {
      console.log(this.name);
    }
    a();
  },
};

obj.print();
```

【代码题】 实现一个函数, 可以间隔输出

```javascript
function createRepeat(fn, repeat, interval) {}

const fn = createRepeat(console.log, 3, 4);

fn("helloWorld"); // 每4秒输出一次helloWorld, 输出3次
```

【代码题】 删除链表的一个节点

```javascript
function (head, node) {}
```

【代码题】 实现 LRU 算法

```javascript
class LRU {
  get(key) {}

  set(key, value) {}
}
```

【代码题】 二叉树光照，输出能被光照到的节点, dfs能否解决?

```javascript
输入: [1,2,3,null,5,null,4]
输出: [1,3,4]

输入: []
输出: []

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function exposedElement(root) {
    
};
```

【代码题】 多叉树, 获取每一层的节点之和

```javascript
function layerSum(root) {
    
}

const res = layerSum({
    value: 2,
    children: [
        { value: 6, children: [ { value: 1 } ] },
        { value: 3, children: [ { value: 2 }, { value: 3 }, { value: 4 } ] },
        { value: 5, children: [ { value: 7 }, { value: 8 } ] }
    ]
});

console.log(res);
```

【代码题】 虚拟dom转真实dom

```javascript
const vnode = {
    tag: 'DIV',
    attrs: {
        id: 'app'
    },
    children: [{
            tag: 'SPAN',
            children: [{
                tag: 'A',
                children: []
            }]
        },
        {
            tag: 'SPAN',
            children: [{
                    tag: 'A',
                    children: []
                },
                {
                    tag: 'A',
                    children: []
                }
            ]
        }
    ]
}

function render(vnode) {

}
```

【代码题】 有序数组原地去重

【代码题】 二叉树层序遍历, 每层的节点放到一个数组里

```
给定一个二叉树，返回该二叉树层序遍历的结果，（从左到右，一层一层地遍历）
例如：
给定的二叉树是{3,9,20,#,#,15,7},
该二叉树层序遍历的结果是[[3],[9,20],[15,7]
]
```

【代码题】 实现一个函数, fetchWithRetry 会自动重试3次，任意一次成功直接返回

【代码题】 链表中环的入口节点
```
对于一个给定的链表，返回环的入口节点，如果没有环，返回null
```
【代码题】 叠词的数量
```
Input: 'abcdaaabbccccdddefgaaa'
Output: 4

1. 输出叠词的数量
2. 输出去重叠词的数量
3. 用正则实现
```


【场景设计】 设计一个转盘组件, 需要考虑什么, 需要和业务方协调好哪些技术细节? 前端如何防刷
【场景设计】 大数据列表如何设计平滑滚动和加载，下滑再上滑的操作，上下两个 buffer 区间如何变化和加载数据。
