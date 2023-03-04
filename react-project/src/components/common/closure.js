export const closure = () => {
    //循环中使用闭包解决var定义函数的问题
    // for (var i = 0; i < 8; i++) {
    //     setTimeout((j) => {
    //         console.log('closure', j);
    //     }, 1000, i)
    // }
    for (var i = 0; i < 8; i++) {
        ((j) => {
            setTimeout(() => {
                console.log('closure', j);
            }, 1000)
        })(i);
    }
    for (let i = 0; i < 8; i++) {
        setTimeout((j) => {
            console.log('closure', j);
        }, 1000, i)
    }
}