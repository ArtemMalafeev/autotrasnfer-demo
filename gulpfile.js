import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import uglify from 'gulp-uglify-es';
import htmlmin from 'gulp-htmlmin';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import browser from 'browser-sync';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';
import { deleteAsync } from 'del';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
import svgtore from 'gulp-svgstore';
import svgo from 'gulp-svgo';

const sass = gulpSass(dartSass);

/* HTML */

export const minifyHTML = () => {
    return gulp.src([
        'app/index.html',
    ])
        .pipe(concat('index.min.html'))
        .pipe(htmlmin({ collapseWhitespace: true, }))
        .pipe(gulp.dest('build'))
        .pipe(browser.stream());
};

/* Styles */

export const minifyCSS = () => {
    const plugins = [
        autoprefixer(),
        cssnano()
    ];

    return gulp.src([
        'app/assets/styles/index.scss',
    ], { sourcemaps: true })
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(concat('index.min.css'))
        .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
        .pipe(browser.stream());;
};

/* Scripts */

export const minifyJS = () => {
    return gulp.src([
        'app/assets/**/*.js',
    ])
        .pipe(concat('index.min.js'))
        .pipe(sourcemaps.init())
        .pipe(uglify.default())
        .pipe(gulp.dest('build/assets/js'))
        .pipe(browser.stream());
};

/* Images */

export const minifyImages = () => {
    return gulp.src([
        'app/assets/images/**/*.{jpg,png}',
        '!app/assets/images/favicons/*.*',
    ])
        .pipe(imagemin())
        .pipe(gulp.dest('build/assets/images'));
};

/* WebP */

export const createWebP = () => {
    return gulp.src([
        'app/assets/images/**/*.{jpg,png}',
        '!app/assets/images/favicons/*.*',
    ])
        .pipe(webp())
        .pipe(gulp.dest('build/assets/images'))
};

/* Sprite */

export const sprite = () => {
    return gulp.src('app/assets/images/icons/*.svg')
      .pipe(svgo())
      .pipe(svgtore({
        inlineSvg: true,
      }))
      .pipe(concat('sprite.svg'))
      .pipe(gulp.dest('build/assets/images'));
    };

/* Copy */

export const copy = () => {
    return gulp.src([
        'app/robots.txt',
    ])
        .pipe(gulp.dest('build'))
};

/* Fonts */

export const optimizeFonts = () => {
    return gulp.src('app/assets/fonts/*.ttf')
        .pipe(ttf2woff2())
        .pipe(gulp.dest('build/assets/fonts/'))
        .pipe(gulp.src('app/assets/fonts/*.ttf'))
        .pipe(ttf2woff())
        .pipe(gulp.dest('build/assets/fonts/'))
};

/* Wayching */

const server = (done) => {
    browser.init({
        server: {
            baseDir: 'build',
            index: 'index.min.html',
        },
        cors: true,
        notify: false,
        ui: false,
    });

    done();
};

// watcher
const watcher = () => {
    gulp.watch(['app/**/*.scss'], gulp.series(minifyCSS));
    gulp.watch(['app/*.html'], gulp.series(minifyHTML));
    gulp.watch(['app/assets/js/**/*.js'], minifyJS);
    gulp.watch('app/*.html').on('change', browser.reload);
};

/* Clean */

export const clean = () => {
    return deleteAsync('build');
};

/* Build */

export const build = gulp.series(
    clean,
    copy,
    gulp.parallel(
        minifyHTML,
        minifyCSS,
        sprite,
        minifyJS,
        optimizeFonts,
        // minifyImages,
        createWebP,
    ),
);


/* Dev */

export default gulp.series(
    clean,
    copy,
    gulp.parallel(
        minifyHTML,
        minifyCSS,
        minifyJS,
        sprite,
        optimizeFonts,
        // minifyImages,
        createWebP,
    ),
    gulp.series(
        server,
        watcher,
    ),
);
