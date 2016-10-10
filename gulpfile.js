var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var scss = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");
var stream = require('webpack-stream');



gulp.task('scss', function(){
  return gulp
    .src('./app/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(scss.sync().on('error', scss.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'))
    // .pipe(browserSync.reload({stream:true}));
});



gulp.task('webpack', [], function() {
    return gulp.src(path.ALL)
        .pipe(sourcemaps.init())
        .pipe(stream(webpackConfig))
        // .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.DEST_BUILD));
});



gulp.task("webpack-dev-server", function(callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    myConfig.devtool = "eval";
    myConfig.debug = true;

    // Start a webpack-dev-server
    var server = new WebpackDevServer(webpack(myConfig), {
        publicPath: "/" + myConfig.output.publicPath,
        stats: {
            colors: true
        }
    })

    server.listen(8010, "localhost", function(err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "running");
    });

    server.close();

});

var path = {
    HTML: 'app/index.html',
    ALL: [
      'app/js/**/*.jsx',
      'app/js/**/*.js',
      'app/scss/**/*.scss'
    ],
    DEST_SRC: 'dist/src',
    DEST_BUILD: 'dist',
    DEST: 'dist'
};



gulp.task('watch', function() {
    gulp.watch(path.ALL, ['webpack','scss']);
});


gulp.task('default', ['webpack-dev-server', 'watch']);
