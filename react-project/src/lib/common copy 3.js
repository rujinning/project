// eslint-disable-next-line
export default {
    compareVersion: (version1, version2) => {
        // 获取最长那个字符串，然后每个都循环弄成一样的位数
        const newVersion1 = `${version1}`.split('.');
        const newVersion2 = `${version2}`.split('.');
        const allVersion = [...newVersion1, ...newVersion2];
        let maxLengthItem = allVersion[0].length;
        for (let i = 0; i < allVersion.length; i++) {
            if (allVersion[i].length > maxLengthItem) {
                maxLengthItem = allVersion[i].length
            }
        }
        const formatVersion = (version) => {
            console.log('version', version);
            // for (let i = 0; i < version.length; i++) {
            //     for (let j = 0; j < maxLengthItem-version[i].length; j++) {
            //         version[i] = '0' + version[i];
            //         console.log('a', i, j, version[i]);
            //     }
            // }
            let a = 0;
            while (a < version.length) {
                while (maxLengthItem>version[a].length) {
                    version[a] = '0' + version[a];
                }
                a++;
            }
            console.log('a', version, version.length);
            return Number(version.join(''));
        };
        // while(0<3){
        //     console.log('version111111', newVersion1);
        // }
        const compareNum = (newVersion1, newVersion2) => {
            const num1 = formatVersion(newVersion1);
            const num2 = formatVersion(newVersion2);
            console.log('666', num1, num2);
            return num1 > num2 ? 1 : num1 < num2 ? -1 : 0;
        };
        return compareNum(newVersion1, newVersion2);
    },
    gameCheck: (arr) => { },
};
