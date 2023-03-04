// eslint-disable-next-line
export default {
    compareVersion: (version1, version2) => {
        // x.y.z 参数是大于0的数，至少有x位,a>b返回1，a<b返回-1，其他返回0
        //(0.1,1.1.1)，(13.37,1.2), (1.1, 1.1.0), (1.1, 1.1.1)
        //const result = common.compareVersion('1.2.1', '1.0.1');
        // const arrA = a.replace(/\./g, '');
        // const arrB = b.replace(/\./g, '');
        // const result = arrA - arrB;
        // console.log('123', arrA, arrB, result);
        // if (result > 0) {
        //     return 1;
        // } else if (result < 0) {
        //     return -1;
        // } else {
        //     return 0;
        // }
        // * compareVersion('0.1', '1.1.1'); // 返回-1
        // * compareVersion('13.37', '1.2 '); // 返回1
        // * compareVersion('1.1', '1.1.0'); // 返回0
        // * compareVersion('1.1', '1.1.1'); // 返回-1

        //1.要转成数字再比较，不够后面0，a>b return 1,a<b return -1,相等0
        // const arr1 = version1.split('.')
        // const arr2 = version2.split('.')
        // const length1 = arr1.length
        // const length2 = arr2.length
        // const minlength = Math.min(length1, length2)
        // let i = 0
        // for (i; i < minlength; i++) {
        //     let a = parseInt(arr1[i])
        //     let b = parseInt(arr2[i])
        //     if (a > b) {
        //         return 1
        //     } else if (a < b) {
        //         return -1
        //     }
        // }
        // if (length1 > length2) {
        //     for (let j = i; j < length1; j++) {
        //         if (parseInt(arr1[j]) !== 0) {
        //             return 1
        //         }
        //     }
        //     return 0
        // } else if (length1 < length2) {
        //     for (let j = i; j < length2; j++) {
        //         if (parseInt(arr2[j]) !== 0) {
        //             return -1
        //         }
        //     }
        //     return 0
        // }
        // return 0
        const newVersion1 = `${version1}`.split('.').length < 3 ? `${version1}`.concat('.0') : `${version1}`;
        const newVersion2 = `${version2}`.split('.').length < 3 ? `${version2}`.concat('.0') : `${version2}`;
        //1.2.6
        const toNum = (a) => {
            // 字符串转数组 ['1','2','6'] c
            // ['0000','000', '00', '0'] r
            const c = a.toString().split('.');
            const num_place = ["0", "00", "000", "0000"],
                r = num_place.reverse();
            for (let i = 0; i < c.length; i++) {
                const len = c[i].length;
                c[i] = r[len] + c[i];
                console.log('66666', c, len, r[len], c[i] );
            }
            return c.join('');
        };
        const compareNewVersion = (a, b) => {
            const numA = Number(a.replace(/\./g, ''));
            const numB = Number(b.replace(/\./g, ''));
            const numA1 = toNum(a);
            const numB1 = toNum(b);
            // console.log('numA', a, b, numA, numB, numA1, numB1);
            return numA1 > numB1 ? 1 : numA1 < numB1 ? -1 : 0
            // return numA > numB ? 1 : numA < numB ? -1 : 0
        }
        return compareNewVersion(newVersion1, newVersion2);
    },
    gameCheck: (arr) => {

    }
};
