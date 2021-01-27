const gulp = require("gulp");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const minifyCss = require("gulp-minify-css");

let devPath = "./src/";
let pusblishPath = "D:\\phpStudy\\WWW\\2011\\jingdong";

// 复制html文件
function copyHtml(){
    console.log("copyHtml");
    gulp.src(devPath+"*.html")
    .pipe(gulp.dest(pusblishPath));
}

// 复制图片文件
function copyImg(){
    gulp.src(devPath+"img/*.{jpg,png}")
    .pipe(gulp.dest(pusblishPath+"\\img"));    
}

// 处理sass（把sass编译成css）
function doSass(){
    gulp.src(devPath+"scss/*.scss")
    .pipe(sass())
    .pipe(minifyCss())
    .pipe(gulp.dest(pusblishPath+"\\css"));
}

// 处理js（压缩）
function doJS(){
    gulp.src(devPath+"js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest(pusblishPath+"\\js"));
}

gulp.task("watchall",async ()=>{
    gulp.watch(devPath+"*.html",async ()=>{copyHtml()});
    gulp.watch(devPath+"img/*.{jpg,png}",async ()=>{copyImg()});
    gulp.watch(devPath+"scss/*.scss",async ()=>{doSass()});
    gulp.watch(devPath+"js/*.js",async ()=>{doJS()});
});

