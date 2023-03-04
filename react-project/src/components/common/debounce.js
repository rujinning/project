export const debouce = (fn, delay = 1000) => {
    // 在一定的时间后执行，如果在这段时间内重复触发的话，会清除定时器，重新计算
    // 一定的时间后执行，在这段时间触发的话，会清除定时器重新计算
    let timer = null;
    // 场景scroll事件，浏览器的缩放resize事件，input输入，表单的验证，button的提交
    // 
    return function () {
        // 获取当前的this
        let that = this;
        // 判断是否存在，如果存在则直接清除
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            // 使fn中的this，执行当前的调用者，并传入参数
            fn.apply(that, arguments)
         }, delay)
    }
}