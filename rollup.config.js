import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  output: {
    file: "jsonpath.min.js",
    format: "umd",
    name: "JSONPath",
    exports: "named"
  },
  plugins: [terser()]
};
