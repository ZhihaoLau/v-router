
export function isFunction (obj) {
     return !!(obj && obj.constructor && obj.call && obj.apply);
}

export function getUrlParams (url = location.hash) {
    let hashDetails = url.split('?'),
        hashName = hashDetails[0].split('#')[1],
        params = hashDetails[1] ? hashDetails[1].split('&') : [],
        query = {} 

    query = params.map(p => p.split('=')).reduce((acc, next) => {
        let [ key, val ] = next
        acc[key] = val
        return acc
    }, {}) 

    return {
        query,
        path: hashName
    }
}