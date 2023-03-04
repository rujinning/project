function Goods(props) {

    console.log(props);

    return (
        <div className="box1">
            <h3 style={{ color: props.color }}>Hello Js</h3>
        </div>
    )
}
//高阶组件的代码， 属性代理的方式
// 一个函数接收一个WrappedComponent组件作为参数传入，并返回一个继承React.Component组件的类，
//且在该类的render（）方法中返回被传入的WrappedComponent组件
function Color(WrapperComponent) {

    return class Color extends React.Component {

        render() {
            console.log(this.props)
            let obj = { color: "#0088dd" }
            return (
                <WrapperComponent {...this.props} {...obj} />
            )
        }
    }
}
export default Color(Goods);