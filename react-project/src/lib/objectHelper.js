export default class objectHelper {
    static isEntity (value) {
        return value && Object.keys(value).length && value instanceof Object;
    }
}