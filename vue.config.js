
let glob = require('glob');
//配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
    let entries = {}, tmp, htmls = {};
    // 读取src/pages/**/底下所有的html文件
    glob.sync(globPath+'html').forEach(function(entry) {
        tmp = entry.split('/').splice(-3);
        htmls[tmp[1]] = entry
    })
    // 读取src/pages/**/底下所有的js文件
    glob.sync(globPath+'ts').forEach(function(entry) {
        tmp = entry.split('/').splice(-3);
        entries[tmp[1]] = {
            entry,
            //  当前目录没有有html则以共用的public/index.html作为模板
            template: htmls[tmp[1]] ? htmls[tmp[1]] : 'index.html', 
            //  以文件夹名称.html作为访问地址
            filename:tmp[1] + '.html'
        };
    });
    return entries;
};
let htmls = getEntry('src/PageEntry/**/*.');
console.log(htmls)
module.exports = {
    pages:htmls,
    publicPath: './',           //  解决打包之后静态文件路径404的问题
    outputDir: 'dist',        //  打包后的文件夹名称，默认dist
    devServer: {
        open: true,             //  npm run serve 自动打开浏览器
        index: 'entrance.html'    //  默认启动页面
    },
    productionSourceMap: false,
    runtimeCompiler: true,
};