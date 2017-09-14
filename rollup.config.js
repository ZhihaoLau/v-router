export default {
    entry: `${__dirname}/src/index.js`,
    output: {
        file: `${__dirname}/dist/v-router.js`,
        format: 'umd',
        name: 'VRouter'
    }
};