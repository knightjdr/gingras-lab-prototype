const autoprefixer = require('autoprefixer');
const babel = require('gulp-babel');
const csso = require('gulp-csso');
const del = require('del');
const gulpif = require('gulp-if');
const htmlmin = require('gulp-htmlmin');
const nanoid = require('nanoid');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const uglify = require('gulp-uglify');
const { dest, src } = require('gulp');


const cleanBuild = () => del(['build/**/*']);

// Assets.
const assets = () => (
  src(['public/**/*', '!public/**/*.js', '!public/**/*.css', '!public/**/*.html'])
    .pipe(dest('build'))
);

// CSS.
const css = (id) => (
  src('public/css/*.css')
    .pipe(postcss([autoprefixer()]))
    .pipe(csso())
    .pipe(rename((path) => {
      path.basename += `.${id}`;
    }))
    .pipe(dest('build/css'))
);

// HTML.
const html = async (baseURL, buildID) => (
  src('public/**/*.html')
    .pipe(replace(/base href="\/"/, `base href="${baseURL}"`))
    .pipe(gulpif(
      process.env.NODE_ENV === 'production',
      replace(/<meta name="robots" content="noindex,nofollow">/, ''),
    ))
    .pipe(replace(/href="css\/([a-z]+).css"/g, `href="css/$1.${buildID}.css"`))
    .pipe(replace(/src="bundle.js"/, `src="bundle.${buildID}.js"`))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('build'))
);

// Javascript.
const javascript = async (id) => (
  src('public/bundle.js')
    .pipe(babel({
      presets: ['@babel/env'],
    }))
    .pipe(uglify())
    .pipe(rename((path) => {
      path.basename += `.${id}`;
    }))
    .pipe(dest('build'))
);

const build = async () => {
  const baseURL = process.env.NODE_ENV === 'development' ? '/gingras-lab/' : '/';
  const id = nanoid(10);
  await cleanBuild();
  await assets();
  await css(id);
  await javascript(id);
  await html(baseURL, id);
};

exports.build = build;
