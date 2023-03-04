import React, { Component } from "react";
import PropTypes from "prop-types"
class LifeCycle extends Component {
    constructor(props, context) {
        //将父类的this对象继承给子类，子类是没有this的
        //constructor---->用到就一定要加，用来初始化this
        // 完成数据初始化，接受props和context，注意context要自己配置
        console.log('1111-----', context);
        super(props);
        this.state = {
            num: 0,
            color: 'pink',
            hasError: false,
            showBtn: false
        };
        this.onClickBtn1 = this.onClickBtn1.bind(this);
    }

    //16之前context的用法
    static contextTypes = {
        color: PropTypes.string,
        callback: PropTypes.func
    }
    onClickBtn1() {
        // alert('onClickbtn1');
        this.context.callback();

    }
    onClickBtn2() {
        alert('onClickbtn2');
    }
    // 箭头函数不需要再绑定this
    onClickBtn3 = () => {
        alert('onClickBtn3,箭头函数不需要再重新绑定this');
    };
    static getDerivedStateFromProps(nextProps,prevState) {
        // 挂载时， 接收到新的props和setState，foceUpdate
        return {
            showBtn: true
        };
        //一定要有返回值，object/null，用于返回一个对象更新state里的值
        // react 16.3 引入，替代componentWillReceiveProps，有个问题，就是只在props变化时才调用，16.4的时候解决了
    }
    // componentWillMount() {
    //     //弃用原因：react fiber(16.8)中第一阶段(调节阶段)，可能会被重复调用
    //     // 16.3后换名字了---->UNSAFE_，17后弃用了
    //     // 挂载之前调用
    //     // 可以发起异步请求，并setSate，16.3后可以在state中设置state
    //     // 不建议在这里发起ajax请求，若数据为空，容易造成界面空白--->弃用原因
    //     // 调用setset不会被重新渲染
    //     console.log('66666', this.props);
    // }
    componentDidMount() {
        console.log('66666111', this.props);
        // 组件第一次渲染，dom节点已生成，可以调用ajax请求，props
        // props和state变化，这个会被再次调用，shouldComponentUpdate为true的时候
        // 对dom操作，添加事件监听，存data，创建图表
        //这里也可以setState，但是不建议，因为会多次渲染
    }
    // componentWillReceiveProps(nextProps) {
    //     //弃用原因：react fiber(16.8)中第一阶段(调节阶段)，可能会被重复调用
    //     // 16.3后换名字了---->UNSAFE_，17后弃用了
    //     //接受父组件改变的prop后
    //     //可以对比nextProps，使用setState做些东西
    //     //(弃用原因)可能会被重复调用，getDerivedStateFromProps 和componentDidUpdate 取代了他
    // }
    // shouldComponentUpdate(nextProps, nextState) {
    //     return true;
    //     //在react fiber中,也有可能会被多次调用，但是只会返回true和false，没有什么影响，所有暂时不会被弃用
    //     //可根据返回的nextProps来决定是否再次渲染(willUpdate,render,didupdate),返回true会渲染，默认是返回true的
    //     //提倡用pureComponent来定义组件，它可以对prop和state有个浅层的比较，可以优化性能
    //     //首次渲染和forceUpdate不会触发
    // }
    // componentWillUpdate(preProps, prrevState) {
    //     //弃用原因：react fiber(16.8)中第一阶段(调节阶段)，可能会被重复调用
    //     // 16.3后换名字了---->UNSAFE_，17后弃用了
    //     // 接收到新的props和state会调用
    //     //不能调用setState,不应该做其他操作来触发react组件的更新，比如dispatch redux的action，会造成无限循环
    // }
    getSnapshotBeforeUpdate(preProps, prrevState) {
        return 'snapshot123'
        //16.3引入
        //和componentDidUpdate涵盖过时的componentWillUpdate
        //一一定要和componentDidUpdate用，也要有返回值，不然会有警告
        // 给了一个机会去获取DOM信息，计算得到并返回一个snapshot作为componentDidUpdate的第三个参数
        //一般不用，官方给出的例子是保留滚动的位置
    }
    componentDidUpdate(preProps, prevState, snapshot) {
        console.log('snapshot', snapshot);
        // dom 更新后调用，可以操作dom，也可以发起服务器请求，还可以setState，但注意一定要用if语句控制，不然会无限循环
    }
    componentWillUnmount() {
        //组件卸载及销毁之前直接调用
        //可以清除定时器，事件监听，订阅，取消网络请求
        //不用在这里setState
    }
    static getDerivedStateFromError(error) {
        //会在渲染阶段调用，在后代组件抛出错误时调用
        // 它将抛出的错误作为参数，并返回一个值以更新 state
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        // 16
        // 当有错误的时候，会触发，可以看到些error message
        //在后代组件抛出错误时调用
    }
    render() {
        console.log('context', this.context, this.props, this.state);
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return (
            <div>
                react
                <div style={{ color: `${this.context.color}` }} onClick={this.onClickBtn1}>写法一</div>
                <div onClick={this.onClickBtn2.bind(this)}>写法二</div>
                <div onClick={this.onClickBtn3}>写法三</div>
                <div></div>
            </div>
        )
    }
}
export default LifeCycle;