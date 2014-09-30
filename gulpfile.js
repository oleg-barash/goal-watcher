/**
 * Created by ovb5 on 30.09.2014.
 */
var lr = require('tiny-lr')
    gulp = require('gulp'),
    jade = require('gulp-jade'),
    server = lr();

    gulp.task('jade', function() {
        gulp.src(['./src/templates/*.jade'])
            .pipe(jade({ pretty: true }))
            .on('error', console.log) // Если есть ошибки, выводим и продолжаем
            .pipe(gulp.dest('./dist/templates')) // Записываем собранные файлы
    });

    // Собираем JS
    gulp.task('js', function() {
        gulp.src(['./src/javascript/**/*.js'])
            .pipe(gulp.dest('./dist/javascript'))
    });

    gulp.task('build', function() {
        gulp.run('jade');
        gulp.run('js');
    });

    gulp.task('watch', function(){
        gulp.run('jade');
        gulp.run('js');
        server.listen(35729, function(err) {
            if (err) return console.log(err);

            gulp.watch('src/templates/**/*.jade', function() {
                gulp.run('jade');
            });

            gulp.watch('src/javascript/**/*', function() {
                gulp.run('js');
            });
        });
    })