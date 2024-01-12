import esbuild from 'rollup-plugin-esbuild'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/index.ts',
  output: {
    file: 'dist/index.umd.js',
    format: 'umd',
    name: 'YoctoQueue',
  },
  plugins: [
    esbuild({ 
      target: 'es2015'
    }),
    babel({
      presets: ['@babel/preset-env'],
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    resolve(),
    commonjs(),
  ]
}