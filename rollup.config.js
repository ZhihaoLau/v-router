import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'
import json from 'rollup-plugin-json' 
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const intro = '// A Light-weight VanillaJS SPA router By Lozio.'

export default {
    input: `${__dirname}/src/index.js`,
    output: {
        file: `${__dirname}/dist/v-router.js`,
        format: 'umd',
        name: 'VRouter',
        sourcemap: true,
        intro: intro 
    },
    globals: {
        lodash: '_',
        jquery: '$'
    },
    plugins: [
        resolve({
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        }),
        commonjs(),
        json(),
        babel(babelrc())
    ],
    external: [
        'lodash',
        'jquery'
    ]
};
