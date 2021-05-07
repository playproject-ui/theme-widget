import livereload from 'rollup-plugin-livereload'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import stylusCssModules from 'rollup-plugin-stylus-css-modules'

export default {
    input: 'src/index.js',
    output: {
        file: 'public/bundle.js',
        format: 'cjs'
    },
    plugins: [
        livereload(),
        stylusCssModules(),
        postcss({
            extract: false,
            modules: true,
            use: ['stylus']
        }),
        resolve(),
        commonjs()
    ]
}