import request from "./request";
const apis = {
    postOrderTag(body) {
        return request.post({
            host: 'http://localhost:4006/api',
            path: '/wit/orderTag/save'
        },
            null,
            body, {
            headers: {
                'Content-Type': 'application/json',
                'test': '123'
            }
        }
        );
    },
    keepAlive() {
        return request.get(
            {
                host: 'http://localhost:4006/api',
                path: '/keepAlive'
            }, {}, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        );
    },
    putApproval(body) {
        return request.put({
            host: 'http://localhost:4006/api',
            path: '/tts/approval'
        }, {}, body, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    deleteData(params) {
        return request.delete({
            host: 'http://localhost:4006/api',
            path: '/deleteData'
        }, params, {
            headers:
            {
                'Content-Type': 'application/json'
            }
        })
    }
}
export default apis;