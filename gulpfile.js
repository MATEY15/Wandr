var gulp = require('gulp'),
		rigger = require('gulp-rigger'),
		browserSync = require('browser-sync');

gulp.task('html', function () {
    gulp.src('app/*.html')
    .pipe(rigger())
    .pipe(gulp.dest('build'))
    .pipe(browserSync.stream());
});

/* Style CSS */

gulp.task('css', function(){
	gulp.src('app/css/*.css')
		//.pipe(rigger())
		// .pipe(prefixer())
		.pipe(gulp.dest('build/css'))
		.pipe(browserSync.reload({stream: true}));
});

/* Images Build */

gulp.task('img', function(){
	return gulp.src('app/img/**/*')
		// .pipe(imagemin({
		// 	progressive: true,
		// 	svgoPlugins: [{removeViewBox: false}],
		// 	use: [pngquant()]
		// }))
		.pipe(gulp.dest('build/img/'))
		.pipe(browserSync.stream());
});

/* Script Build */

gulp.task('js', function(){
	gulp.src('app/js/*.js')
		.pipe(rigger())
		.pipe(gulp.dest('build/js/'))
		.pipe(browserSync.stream());
});

gulp.task('libs-js', function(){
	gulp.src('app/libs/**/*.js')
		.pipe(rigger())
		.pipe(gulp.dest('build/libs/'))
		.pipe(browserSync.stream());
});
gulp.task('libs-css', function(){
	gulp.src('app/libs/**/*.css')
		.pipe(rigger())
		.pipe(gulp.dest('build/libs/'))
		.pipe(browserSync.reload({stream: true}));
});

/* Fonts Build */

gulp.task('fonts', function(){
	gulp.src('app/fonts/**/*.*')
		.pipe(gulp.dest('build/fonts/'))
		.pipe(browserSync.stream());
});

/* Browser-Sync */

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'build'
		},
		notify: false
	});
});

gulp.task('build', ['html', 'css', 'js', 'libs-js', 'libs-css', 'fonts', 'img']);

/* Watch */

gulp.task('watch', ['browser-sync', 'build'], function(){
	gulp.watch('app/**/*.html', ['html']);
	gulp.watch('app/**/*.css', ['css']);
	gulp.watch('app/**/*.js', ['js']);
	gulp.watch('app/**/*.js', ['libs-js']);
	//gulp.watch('app/**/*.css', ['libs-css']);
	gulp.watch('app/fonts/**/*.*', ['fonts']);
	gulp.watch('app/img/**/*.*', ['img']);
});

gulp.task('default', ['watch']);