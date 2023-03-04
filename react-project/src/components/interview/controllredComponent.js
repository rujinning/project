import { PureComponent } from 'react';
export  default class controllredComponent extends PureComponent {
    constructor() {
        super()

        this.state = {
            username: ""
        }
    }

    handleSubmitClick(event) {
        // 1.阻止默认行为, 防止提交,页面刷新
        event.preventDefault()

        // 2.获取到表单的数据
        console.log(this.state.username)

        // 3.之后就可以发送网络请求提交到服务器
    }

    changeUsername(event) {
        this.setState({
            username: event.target.value
        })
    }

    render() {
        const { username } = this.state

        return (
            <div>
                <form onSubmit={e => this.handleSubmitClick(e)}>
                    <label htmlFor="username">
                        用户:
                        <input
                            type="text"
                            name=""
                            id="username"
                            value={username}
                            onChange={e => this.changeUsername(e)}
                        />
                    </label>
                    <button type='submit'>提交按钮</button>
                </form>
            </div>
        )
    }
}
