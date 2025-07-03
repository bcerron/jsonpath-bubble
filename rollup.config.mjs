import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'index.js',
    output: {
        file: 'jsonpath.fixed.min.js',
        format: 'umd',
        name: 'JSONPath',
    },
    plugins: [resolve(), commonjs()],
};
