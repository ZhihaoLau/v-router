const babel = require('rollup-plugin-babel');
import babelrc from 'babelrc-rollup';

export default {
    input: `${__dirname}/src/index.js`,
    output: {
        file: `${__dirname}/dist/v-router.js`,
        format: 'umd',
        name: 'VRouter'
    },
    plugins: [
        babel(babelrc())
    ]
};