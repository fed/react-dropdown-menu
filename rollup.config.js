import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import sass from 'rollup-plugin-sass';
import postcss from 'postcss';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';

export default [
  {
    input: 'src/Dropdown.js',
    external: ['react'],
    output: [
      {
        file: pkg.main,
        format: 'cjs'
      }
    ],
    plugins: [
      resolve(),
      sass({
        output: 'lib/index.css',
        processor: css =>
          postcss([autoprefixer, cssnano])
            .process(css)
            .then(result => result.css)
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      uglify()
    ]
  }
];
