import esbuild from 'rollup-plugin-esbuild'

export default {
  input: './src/index.ts',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'esm'
    },
  ],
  preserveModules: true,
  plugins: [
    esbuild({
      target: 'es2018'
    }),
  ]
}