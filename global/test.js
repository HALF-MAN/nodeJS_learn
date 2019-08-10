/**
 * __filename
 */
console.log(__filename);
/**
 * __dirname
 */
console.log(__dirname);

/**
 * setTimeout
 */
function printHello() {
    console.log("Hello World!");
}

let v = setTimeout(printHello, 2000);

//清除定时器
clearTimeout(v);

/***
 *  setInterval
 */
// 两秒后执行以上函数,会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
let i = setInterval(printHello, 2000);

clearInterval(i);

/**
 * console
 */
console
console.info("info");
console.error("err");
console.warn("warn");
console.time();
console.trace()

//label必须一致
console.time("获取数据");
//
// 执行一些代码
//
console.timeEnd('获取数据');

/**
 * process
 */
process.on('exit', function(code) {

    // 以下代码永远不会执行
    setTimeout(function() {
        console.log("该代码不会执行");
    }, 2000);

    console.log('退出码为:', code);
});
console.log("程序执行结束");