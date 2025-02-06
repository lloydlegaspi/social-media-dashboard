// Initialize modules
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();
const gulp = require('gulp');

// Use dart-sass for @use
// sass.compiler = require('dart-sass');

// Sass Task
function scssTask() {
  return src('app/scss/style.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('dist', { sourcemaps: '.' }));
}

// JavaScript Task
function jsTask() {
  return src('app/js/script.js', { sourcemaps: true })
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(terser())
    .pipe(dest('dist', { sourcemaps: '.' }));
}

// Browsersync Tasks
function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: '.'
    },
    notify: {
      styles: {
        top: 'auto',
        bottom: '0'
      }
    }
  });
  cb();
}

// BrowserSync Reload
function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask() {
  watch('*.html', browsersyncReload);
  watch(
    ['app/scss/**/*.scss', 'app/**/*.js'], 
    series(scssTask, jsTask, browsersyncReload));
}

// Define a build task
gulp.task('build', function() {
  // Add your build steps here
  return gulp.src('app/scss/style.scss')
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest('dist'));
});

// Default Gulp Task
exports.default = series(
  scssTask,
  jsTask,
  browsersyncServe,
  watchTask
);
