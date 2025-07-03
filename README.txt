
IMPORTANTE - Este no es un bundle real.

Para generar el bundle real funcional de jsonpath-plus:

1. Instala jsonpath-plus: npm install jsonpath-plus
2. Instala rollup y plugins: npm install --save-dev rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs
3. Crea un index.js con: import { JSONPath } from 'jsonpath-plus'; export { JSONPath };
4. Usa este rollup.config.js para empaquetar en UMD:
----------------------------------------
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'index.js',
  output: {
    file: 'jsonpath.fixed.min.js',
    format: 'umd',
    name: 'JSONPath'
  },
  plugins: [resolve(), commonjs()]
};
----------------------------------------
5. Ejecuta: npx rollup -c

6. Sube el jsonpath.fixed.min.js resultante a tu GitHub y usa la URL en Bubble.io.

Este bundle real soportará JSONPath completo incluyendo arrays y búsquedas profundas.

