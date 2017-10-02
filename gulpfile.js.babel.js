'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';
import uglify from 'gulp-uglify';
import cleanCSS from 'gulp-clean-css';
import htmlmin from 'gulp-htmlmin';
import imagemin from 'gulp-imagemin';
import del from 'del';

// 소스/빌드 디렉토리를 담은 객체를 만든다.
const DIR = {
  SRC: 'src',
  DEST: 'dist'
};

const SRC = {
  JS: DIR.SRC + '/js/*.js',
  CSS: DIR.SRC + '/css/*.css',
  HTML: DIR.SRC + '/*.html',
  IMAGES: DIR.SRC + '/images/*',
  SERVER: 'server/**/*.js'
};

const DEST = {
  JS: DIR.DEST + '/js',
  CSS: DIR.DEST + '/css',
  HTML: DIR.DEST + '/',
  IMAGES: DIR.DEST + '/images',
  SERVER: 'app'
};

// minify javascript
gulp.task('js', () => {
  return gulp.src(SRC.JS)
                 .pipe(uglify())
                 .pipe(gulp.dest(DEST.JS));
})

// minify css
gulp.task('css', () => {
  return gulp.src(SRC.CSS)
             .pipe(cleanCSS({compatibility: 'ie8'}))
             .pipe(gulp.dest(DEST.CSS));
});

// minify html
gulp.task('html', () => {
  return gulp.src(SRC.HTML)
              .pipe(htmlmin({collapseWhitespace: true}))
              .pipe(gulp.dest(DEST.HTML));
})

// compress images
gulp.task('images', () => {
    return gulp.src(SRC.IMAGES)
                .pipe(imagemin())
                .pipe(gulp.dest(DEST.IMAGES));
})

// clean
gulp.task('clean', () => {
    return del.sync([DIR.DEST]);
});

// watch
gulp.task('watch', () => {
  let watcher = {
    js: gulp.watch(SRC.JS, ['js']),
    css: gulp.watch(SRC.CSS, ['css']),
    html: gulp.watch(SRC.HTML, ['html']),
    images: gulp.watch(SRC.IMAGES, ['images'])
  };

  let notify = (event) => {
    gutil.log('FIle', gutil.colors.yellow(event.path), gutil.colors.magenta(event.type));
  };

  for(let key in watcher) {
    watcher[key].on('change', notify);
  }
})

// default
gulp.task('default', ['clean', 'js', 'css', 'html', 'images', 'watch'], () => {
  gutil.log('Gulp is running');
});
