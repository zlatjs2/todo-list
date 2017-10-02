'use strict';

import babel from 'gulp-babel';
import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'gulp-webpack';
import webpackConfig from './webpack.config.js';
import browserSync from 'browser-sync';
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import htmlmin from 'gulp-htmlmin';
import imagemin from 'gulp-imagemin';
import del from 'del';
import nodemon from 'gulp-nodemon';
import Cache from 'gulp-file-cache';
let cache = new Cache();

// 소스/빌드 디렉토리를 담은 객체를 만든다.
const DIR = {
  SRC: 'src',
  DEST: 'dist'
};

const SRC = {
  JS: DIR.SRC + '/js/*.js',
  CSS: DIR.SRC + '/css/*.css',
  SASS: DIR.SRC + '/sass/*.scss',
  HTML: DIR.SRC + '/*.html',
  IMAGES: DIR.SRC + '/images/*',
  SERVER: 'server/**/*.js'
};

const DEST = {
  JS: DIR.DEST + '/js',
  CSS: DIR.DEST + '/css',
  SASS: DIR.DEST + '/sass',
  HTML: DIR.DEST + '/',
  IMAGES: DIR.DEST + '/images',
  SERVER: 'app'
};

// minify javascript
gulp.task('js', () => {
  return gulp.src(SRC.JS)
             .pipe(gulp.dest(DEST.JS));
})

// sass
gulp.task('sass', () => {
  return gulp.src(SRC.SASS)
             .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
             .pipe(gulp.dest(DEST.CSS));
})

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
    css: gulp.watch(SRC.CSS, ['css']),
    sass: gulp.watch(SRC.SASS, ['sass']),
    html: gulp.watch(SRC.HTML, ['html']),
    images: gulp.watch(SRC.IMAGES, ['images']),
    babel: gulp.watch(SRC.SERVER, ['babel'])
  };

  let notify = (event) => {
    gutil.log('FIle', gutil.colors.yellow(event.path), gutil.colors.magenta(event.type));
  };

  for(let key in watcher) {
    watcher[key].on('change', notify);
  }
})

// ES6 코드 변환
gulp.task('babel', () => {
  return gulp.src(SRC.SERVER)
         .pipe(cache.filter())
         .pipe(babel({
            presets: ['es2015']
         }))
         .pipe(cache.cache())
         .pipe(gulp.dest(DEST.SERVER));
});

// 서버사이드 코드가 변경 되었을 때 자동으로 재시작
gulp.task('start', ['babel'], () => {
  return nodemon({
    script: DEST.SERVER + '/main.js',
    watch: DEST.SERVER
  })
})

gulp.task('webpack', () => {
    return gulp.src('src/js/main.js')
           .pipe(webpack(webpackConfig))
           .pipe(gulp.dest('dist/js'));
});

gulp.task('browser-sync', () => {
  browserSync.init(null, {
    proxy: 'http://localhost:3000',
    files: ["dist/**/*.*"],
    port: 7000
  })
});

// default
gulp.task('default', ['clean', 'webpack', 'sass', 'html',
                      'images', 'watch', 'start', 'browser-sync'], () => {
  gutil.log('Gulp is running');
});
