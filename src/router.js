import Route from './route'

class Router {
    constructor (routes, options) {
        this.routes = routes;
        this.options = options;

        this.instances = this.routes.map(this.instantiation);

        this.listen();
    }

    listen () {
        window.addEventListener('hashchange', this.handleRouteChange, false);
    }

    handleRouteChange () {
        console.log('# changed');
    }

    instantiation (config) {
        return new Route(config.path, config.component)
    }
}

export default Router;