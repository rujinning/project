export const throttle = (fn, delay = 1000) => {
    //一定的事件内多次触发只会执行一次
    //场景-->DOM元素拖拽功能实现，鼠标的移动距离，scroll滚动事件，input框和sumbit button
    let timer = null;
    return function () {
        let that = this;
        // 如果存在定时器，则不作处理
        if (!timer) {
            timer = setTimeout(() => {
                // arguments默认是个空数组，保证传进来有参函数也可以执行并得到结果
                fn.apply(that, arguments);
                timer = null;
            }, delay);
        }
    }
}