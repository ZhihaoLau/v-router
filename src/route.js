import { isFunction } from './util'

class Route {
    constructor (path, callback) {
        if (!isFunction(callback)) {
            throw new Error(`Param 'callback' only accept a Function`);
        }
        this.path = path;
        this.callback = callback;
    }
}

export default Route;