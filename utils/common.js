export function isEmpty(val) {
    if (val instanceof Array) {
        if (val.length === 0) return true;
    } else if (val instanceof Object) {
        if (JSON.stringify(val) === "{}") return true;
    } else {
        if (val == null || val === undefined || val === "") return true;
        return false;
    }
    return false;
}

export const getHostName = website => website.match(/(w+)(\.)([a-z]+)(\.)(com)/)[3]; // ['www.xxx.com','www','.','xxx','.'.'com',.....]

export const pagingArr = (arr, len = 10) => {
    if (len >= arr.length) {
        return [arr];
    }
    return [arr.slice(0, len), ...pagingArr(arr.slice(len), len)];
};
