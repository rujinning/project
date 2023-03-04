// eslint-disable-next-line
export default {
    compareVersion: (version1, version2) => {
        const v1 = version1.split('.');
        const v2 = version2.split('.');
        let index = 0;
        // 判断数组中共同位置的元素
        // Determine the elements in a common position in an array
        for (; index < v1.length && index < v2.length; index++) {
            let v1n = parseInt(v1[index]), v2n = parseInt(v2[index]);
            if (v1n > v2n) return 1;
            if (v1n < v2n) return -1;
        }
        // 判断version1中多出的元素
        // Judge the extra elements in version1
        if (index < v1.length) {
            for (; index < v1.length; index++) {
                let v1n = parseInt(v1[index]);
                if (v1n > 0) return 1;
            }
        }
        // 判断version2中多出的元素
        // Judge the extra elements in version2
        if (index < v2.length) {
            for (; index < v2.length; index++) {
                let v2n = parseInt(v2[index]);
                if (v2n > 0) return -1;
            }
        }
        return 0;
    },
    gameCheck: (arr) => {
        // Idea: three points connected in a straight line add up to three and win, return true.
        // diagonal
        if (arr[0][0] + arr[1][1] + arr[2][2] === 3 ||
            arr[0][2] + arr[1][1] + arr[2][0] === 3) {
            return true;
        }
        for (let i = 0; i < 3; i++) {
            // rows and columns
            if (arr[i][0] + arr[i][1] + arr[i][2] === 3 || arr[0][i] + arr[1][i] + arr[2][i] === 3) {
                return true;
            }
        }
        return false;
    },
    removeRepet: (arr) => {
        const num = arr.toString().match(/\d+/g);
        const letter = arr.toString().match(/[a-zA-Z]/g);
        const formatNum = (array) => {
            return Array.from(new Set(array)).sort((a, b) => a - b);
        };
        const formatLetter = (array) => {
            return Array.from(new Set(array)).sort();
        };
        const numArr = formatNum(num);
        const letterArr = formatLetter(letter);
        const newArr = [...numArr, ...letterArr];
        return newArr;
    },
    getParamFromURL: (url, key) => {
        const formatObj = (val) => {
            let strs = val.split('&'), obj = {}
            for (let i = 0; i < strs.length; i++) {
                obj[strs[i].split('=')[0]] = strs[i].split('=')[1]
            }
            return obj;
        };
        if (url.indexOf('#') !== -1) {
            if (url.indexOf('?') !== -1) {
                if (url.indexOf('#') > url.indexOf('?') && url.indexOf('?') !== url.lastIndexOf('?')) {
                    let str = url.slice(url.indexOf('?') + 1, url.indexOf('#'))
                    return formatObj(str)[key];
                }
                if (url.indexOf('#') < url.indexOf('?')) {
                    let str = url.substr(url.indexOf('?') + 1)
                    return formatObj(str)[key];
                }
            }
        }
    },
    getUrlFromWords: (text) => {
        let reg = /(https|http):\/\/[A-Za-z]+.((tmall.com)|(taobao.com))\/[A-Za-z]+.(htm|html)\?id=[0-9]+&spm=[a-zA-Z0-9.-]+/g
        return reg.test(text)
    }
};
