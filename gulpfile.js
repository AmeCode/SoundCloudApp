
gulp.task('serveprod', function() {
  connect.server({
    root: '/dist/YoutubeReplay',
    port: process.env.PORT || 5000, // localhost:5000
    livereload: false
  });
});
/*__dirname + '/dist/YoutubeReplay'*/
