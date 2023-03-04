const ReverHOC = WrapComponent => {
    return class extends WrapComponent {
        constructor(props) {
            super(props)
            this.state = { count: 1000 }
        }
        componentDidMount() {
            // 反向继承后,可以拿到原始组件的props和state数据
            console.log("高阶组件", this.props, this.state)

            console.log("高阶组件 did mount")
            this.clickComponent()
        }
        render() {
            return (
                // 反向继承时, MyCom是父组件, 不能在子组件模板中使用父组件标签
                // return <MyCom/>
                // 使用 super.render() 渲染父组件模板 
                <div>
                    <h1 onClick={this.clickComponent}>高阶组件</h1>
                    <div>{super.render()}</div>
                </div>
            )
        }
    }
}
export default ReverHOC;