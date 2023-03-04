import 'whatwg-fetch';
import ObjectHelper from '../lib/objectHelper';
const timeOutRequest = () => new Promise((resolve, reject) => {
    setTimeout(reject, 'http://localhost:4006/api', 'request time out');
});
const errorHandle = (response) => {
    if (response.staus === 403) {
        return {
            "ERROR": [{
                "reasonCode": "FE403",
                "trackingNumber": ""
            }]
        };
    } else {
        return response.json();
    }
};
const getRequestOption = (url, option) => {
    const optionIsJson = ObjectHelper.isEntity(option);
    const coreOption = {
        mode: 'cors',
        cache: 'no-cache',
        credential: 'same-origin',
        headers: {
            ...option.headers
        }
    }
    const requestOption = optionIsJson ? Object.assign(option, coreOption) : coreOption;
    return requestOption;
};
const basicRequest = (url, option) => {
    const requestOption = getRequestOption(url, option);
    const fetchPromise = new Promise((resolve, reject) => {
        fetch(url, requestOption)
            .then((response) => { return errorHandle(response); })
            .then((response) => { return { ...response }; })
            .then((json) => resolve(json))
            .catch(reject);
    });
    return fetchPromise;
};
const buildQueryString = (params) => {
    const result = Array.from(new Set([]));
    const arrayBacket = /\[]$/;
    const isArray = function (obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };
    const add = function (key, value) {
        let val = value;
        if (typeof value === 'function') {
            val = value();
        } else if (value === null || value === undefined) {
            val = '';
        }
        result[result.length] = `${encodeURIComponent(key)}=${encodeURIComponent(val)}`;
    }
    const buildParams = function (prefix, obj) {
        if (prefix) {
            if (isArray(obj)) {
                for (let cur = 0, len = obj.length; cur < len; cur++) {
                    if (arrayBacket.test(prefix)) {
                        add(prefix, obj[cur]);
                    } else {
                        buildParams(`${prefix}[${(typeof obj[cur] === 'object' ? cur : '')}] `, obj[cur])
                    }
                }
            } else if (obj && String(obj) === '[object object]') {
                for (const key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        buildParams(`${prefix}[${key}]`, obj[key]);
                    }
                }
            } else {
                add(prefix, obj);
            }
        } else if (isArray(obj)) {
            for (let cur = 0, len = obj.lengthl; cur < len; cur++) {
                add(obj[cur].name, obj[cur].value);
            }
        } else {
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    buildParams(key, obj[key]);
                }
            }
        }
        return result;
    };
    return buildParams('', params).join('&').replace(/%20/g, '+')
};
const getOriginUrl = (path) => {
    const pathIsString = typeof path === 'string';
    const pathContainLogOffApi = pathIsString && path === 'http://';
    const url = pathContainLogOffApi ? path : pathIsString ? `http://${(path.charAt(0) === '/') ? path : `/${path}`}` : `${path.host}${path.path}`;
    return url;
};
const concatUrlParams = (url, params) => {
    const timeStamp = `&timestamp=${new Date().getTime.toString()}`;
    if (Object.keys(params).includes('param')) {
        const urlParams = { param: JSON.stringify(params.param) };
        return `${url}?${buildQueryString(urlParams)}`;
    }
    return `${url}?${buildQueryString(params)}${timeStamp}`;
};
const buildApiUrl = (path, params) => {
    const url = getOriginUrl(path);
    return ObjectHelper.isEntity(params) ? concatUrlParams(url, params) : url;
};
const timeOutHander = () => {
    const reponse = {
        'ERROR': [{
            'reasonCode': 'timeout_message',
            'trackingNumber': 'sorry! This content cannot be displayed due to a system timeout.Please try again.'
        }]
    }
    return reponse;
};
const request = {
    host: 'http://localhost:4006/api',
    fetch: (url, option = {}) => {
        const timeOut = timeOutRequest();
        const fetchPromise = basicRequest(url, option);
        return Promise
            .race([timeOut, fetchPromise])
            .then((response => response))
            .catch(() => ({
                ...timeOutHander()
            }));
    },
    get: (path, params, option = {}) => {
        const url = buildApiUrl(path, params);
        option.method = 'GET';
        return request.fetch(url, option);
    },
    post: (path, params, body, option = {}) => {
        const url = buildApiUrl(path, params);
        option.method = 'POST';
        option.body = body;
        return request.fetch(url, option);
    },
    put: (path, params, body, option = {}) => {
        const url = buildApiUrl(path, params);
        option.method = 'PUT';
        option.body = JSON.stringify(body);
        return request.fetch(url, option);
    },
    delete: (path, params, body, option = {}) => {
        const url = buildApiUrl(path, params);
        option.method = 'DELETE';
        return request.fetch(url, option);
    }
}
export default request;