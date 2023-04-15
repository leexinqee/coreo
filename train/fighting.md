### 1、怎么分析性能问题？

测量工具：performance、Lighthouse、在线版 WebpageTest
内存分析：memory分析工具，perf-dog

### 2、web 性能指标？

内容呈现相关的性能指标：
FP（首次绘制像素），从开始加载到浏览器首次绘制像素到屏幕上的时间，也就是页面在屏幕上首次发生视觉变化的时间。但此变化可能是简单的背景色更新或不引人注意的内容，它并不表示页面内容完整性，可能会报告没有任何可见的内容被绘制的时间。

```JavaScript
function getFirstPaint() {
  let firstPaints = {};
  let performanceEntries = performance.getEntriesByType('paint') || [];
  performanceEntries.forEach((entry) => {
    if (entry.name === 'first-paint') {
      firstPaints.firstPaint = entry.startTime;
    } else if (entry.name === 'first-contentful-paint') {
      firstPaints.firstContentfulPaint = entry.startTime;
    }
  });
  return firstPaints;
}
```

FCP（首次渲染时间），指页面开始渲染第一个可见元素的时间，并不意味着它是有用的内容（可能是标题和导航栏等），影响该节点时长通常是因为字体文件的加载（可将字体文件 font-display: swap 延后覆盖）。

FMP（主要内容绘制到屏幕上的时间）：这是一个更好的衡量用户感知加载体验的指标。布局数量最大并且 Web 字体已加载的时刻作为主要内容绘制的近似时间，测量标准不统一，因此最好使用 LCP 来替代。

LCP（可视区域中最大的内容）：可视区域中最大的内容元素呈现到屏幕上的时间，用以估算页面的主要内容对用户可见时间。

```JavaScript
// 如何统计，测量方式
const po = new PerformanceObserver((entryList) => {
  const entries = entryList.getEntries();
  const lastEntry = entries[entries.length - 1];
  // 优先取 renderTime，如果没有则取 loadTime
  let lcp = lastEntry.renderTime || lastEntry.loadTime;
  window.perfData.push({
    'LCP', lcp
  });
});
po.observe({type: 'largest-contentful-paint'});
```

FSP（首屏可交互时长）：首屏可交互时长，页面从开始加载到首屏内容全部绘制完成的时间，用户可以看到首屏的全部内容。如果说 LCP 是用户看到有效内容的最近似的时间，那么在 FSP 这个时间点用户已经看到了可视区域内完整的内容，可以说是衡量用户视觉体验最合适的指标。

交互响应性相关性能指标：

TTI（可持续交互时间 Time to Interactive）:表示网页第一次 完全达到可交互状态 的时间点，浏览器已经可以持续性的响应用户的输入。完全达到可交互状态的时间点是在最后一个长任务（Long Task）完成的时间, 并且在随后的 5 秒内网络和主线程是空闲的。

```javascript
const ttiPolyfill = require("tti-polyfill");
ttiPolyfill.getFirstConsistentlyInteractive().then((tti) => {
  window.perfData.push({
    tti: tti,
  });
});
```

FCI（首次用户可以开始与页面交互时 First CPU Idle）: FCI 和 TTI 都是页面可以响应用户输入的时间。FCI 发生在用户可以开始与页面交互时；TTI 发生在用户完全能够（可持续）与页面交互时。

FID（First Input Delay）-先不管: 用户第一次与页面交互（例如单击链接、点击按钮等）到浏览器实际能够响应该交互的时间

FPS(每秒可以重新绘制的帧数):

| 用户体验核心指标 | 定义                                       | 衡量指标  |
| ---------------- | ------------------------------------------ | --------- |
| 白屏时间         | 页面开始有内容的时间，在没有内容之前是白屏 | FP 或 FCP |
| 首屏时间         | 可视区域内容已完全呈现的时间               | FSP       |
| 可交互时间       | 用户第一次可以与页面交互的时间             | FCI       |
| 可流畅交互时间   | 用户第一次可以持续与页面交互的时间         | TTI       |

### 3、稳定性？

### 4、SSR 缓存是怎么做的？

SSR 缓存是指将 SSR 生成的 HTML 页面缓存起来，以便在下一次请求时直接返回缓存的 HTML 页面而不是重新生成。这样可以大大提高页面加载速度和减轻服务器负担。

### 5、JS 实现一个带并发的调度器(scheduler)，保证同时运行的任务最多两个，完善代码中的 Scheduler 类，使得一下程序能正常输出？

### 6、webview 和小程序的区别（小程序原理，渲染引擎原理）

小程序原理：
整体架构上：基于 WEB 规范封装的一套 Hybrid 应用框架，整体架构分三层视图层、逻辑层、bridge/native 层，上层由渲染层和逻辑层构成，底层由 bridge 层来承接视图和逻辑层之前的数据传递和事件绑定。
数据传递：使用了单项数据流 MVVM 框架的数据驱动，让数据和视图绑定在一起，同时也使用了虚拟 dom 优化了对页面 Dom 的频繁操作带来的性能问题
![小程序架构](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3dff90394f8342c68f3d0bf629ade56f~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)

渲染引擎原理：
当浏览器内核获取到 HTML 文件后，会从上自下的加载，并在加载过程中进行解析渲染，如果遇到 css 和图片就发起请求(此处为异步)，并不会阻塞浏览器继续渲染。而当遇到 JavaScript 文件时，HTML 渲染会被挂起等待 JavaScript 执行完成，因为 JavaScript 可能会操作 HTML dom 节点的变化。所以为了避免 JavaScript 的执行影响 GUI 引擎的渲染，通常会将 JavaScript 代码放置在 body 之后。

### 7、SSR vs SSG

SSR 是在服务器上动态生成 HTML 页面，它会在每个请求时动态生成页面内容。所以在高并发情况下，服务器可能会承受不住高并发的压力。
SSG 是在构建时生成静态内容的过程，这种方式可以提供更快的页面加载速度，因为页面已经预先生成好了，不需要每次请求时再生成。由于页面内容是静态的，所以可以将页面缓存在 CDN 中，进一步提高性能。
SSR 适用于需要 SEO 和动态数据的应用程序，而 SSG 适用于内容不太变化或者数据更新不太频繁的应用程序。

### 9、有什么优化方案？（快照、端侧 TabBar 方案、商详预请求、串行改并行等）

为什么要小程序走 H5 方案：1、性能问题(首屏冷启动 5s+，热启动也需要 3s，首屏打开率 60%) 2、工程复杂性(多人共同开发一个项目，项目分险搞) 3、更多的 H5 性能优化方案实践 4、跨端方案的打通与协调难
首屏性能优化：小程序迁 H5 方案：小程序(5s+) -> CSR(2.8s) -> SSR -> ESR(流式渲染)的升级方案，然后又做了快照、端 TabBar 方案、预请求方案等，打开率 60%->90%
CSR：

### 11、小程序为什么采用双线程架构？ 浏览器是单线程设计，webWorker 线程安全问题？

小程序为什么采用双线程架构：
目的：体验问题(执行 JS 的时候会同步阻塞页面渲染，导致卡屏和白屏等情况)，解决 JS 单线程问题，管控（安全管控和流量管控）

浏览器是单线程设计？
浏览器是多进程多线程，浏览器管理多个浏览页面，每个浏览页面都会重启一个 render 进程同时初始化浏览器内核，浏览器内核中有存在多个线程，如 GUI 绘制线程、JS 引擎线程、定时器、事件触发、异步 http 请求等线程。
JS 线程初始化即 JS 引擎初始化，引擎先处理

webWorker 线程安全问题：
web worker 是一种主子线程模式，子线程只能做计算，不能操作 dom，也不能访问浏览器存储（比如 localStorage），且子线程的执行环境和主线程的也是隔离的，从而避免了线程安全问题。（除 SharedArrayBuffer 内存共享，结构同 arrayBuffer，可通过 postMessage 方法将一个 SharedArrayBuffer 对象从一个用户代理共享到另一个用户代理（另一个页面的主进程或者当前页面的一个 worker 从而实现共享内存）

### 13、闭包原理（如何回收掉）

### 14、JavaScript 内存管理和垃圾回收机制

常发生内存泄露的情况：滥用全局变量未被释放的引用、未销毁的定时器和回调函数、未释放引用的闭包、DOM 引用

JavaScript 引擎的垃圾收集器基本上会寻找从内存中删除的无法访问的对象，常见的垃圾收集算法：引用计数法、标记清除法
引用计数法：查找那些没有被引用的对象，如果对象没有附加引用，则可以进行垃圾回收。
标记清除法：先标记所有存在的变量打上“红”标记，然后再从 JavaScript 的全局对象中去遍历能够触达到的对象打上“绿”标记，最后垃圾收集器执行的时候会清理掉所有的“红”标记。

### 14、实现一个 json stringify
