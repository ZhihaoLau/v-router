import Route from './route'
import { version } from '../package.json'
import _ from 'lodash'
import $ from 'jquery'
import { getUrlParams } from './util'

class Router {
    constructor (bluePrints, options) {
        this.bluePrints = bluePrints
        this.options = options

        this.beforeFun = null
        this.afterFun = null 

        this.routes = this.bluePrints.map(this.instantiation)

        window.addEventListener('load', this.handleRouteChange)
        window.addEventListener('hashchange', this.handleRouteChange)

        this.SPA_RESOLVE_INIT = null
    }

    instantiation (bluePrint) {
        return new Route(bluePrint)
    }

    handleRouteChange = () => {
        return () => {
            let currentHash = util.getParamsUrl()
            if (!this.routes[currentHash.path]) return   

            this.goTo(currentHash)
        }
    }
    
    instantiation (config) {
        return new Route(config.path, config.component)
    }
}

export default Router