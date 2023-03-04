import React, { useState, useEffect, useReducer } from 'react';
import UsecallBacks from './usecallBacks';
function Example(props) {
    // 如果你更新的state和当前的相同，react将跳过子组件的渲染并不会触发effect
    const [count, setCount] = useState(0);
    //16.8
    useEffect(() => {
        // 相当于componentDidMount和componentDidupdate
        document.title = `you clicked ${count} times`;
    });
    //第一次渲染会执行，和props有变化时会执行，相当于componentDidMount和componentDidupdate
    useEffect(() => {
        //订阅
        return () => {
            //组件销毁时做什么事
        }
    })
    //只在第一次渲染执行，相当于componentDidMount
    useEffect(() => {
        //订阅
        return () => {
            //组件销毁时做什么事
        }
    }, [])
    //依赖coount的变化
    useEffect(() => {
        //订阅
        return () => {
            //组件销毁时做什么事
        }
    }, [count])
    //const theme = useContext(ThemeContext);
    //const ThemeContext = React.createContext(themes.light);
    //useContext相当于<testContext.Consumer><div></div></></testContext.Consumer>
    const initialState = { count: 0 };
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
            default:
                throw new Error();

        }
    }
    const Counter = () => {
        // useReducer是usestate的变体
        const [state, dispatch] = useReducer(reducer, initialState);
        return (
            <React.Fragment>
                count:{state.count}
                <button onClick={() => { dispatch({ type: 'decrement' }) }}>-</button>
                <button onClick={() => { dispatch({ type: 'increment' }) }}>+</button>
            </React.Fragment>
        )
    }
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            {count}
            {
                Counter()
            }
            <UsecallBacks />
        </div>
    )
}
export default Example;