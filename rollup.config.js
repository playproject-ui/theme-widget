import livereload from 'rollup-plugin-livereload'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import postcssImport from 'postcss-import'

export default {
    input: 'src/index.js',
    output: {
        file: 'public/bundle.js',
        format: 'cjs'
    },
    plugins: [
        livereload(),
        postcss({
            extract: false,
            modules: true,
            use: ['stylus'], 
            plugins: [postcssImport]
        }),
        resolve(),
        commonjs()
    ]
}