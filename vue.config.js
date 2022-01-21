module.exports = {
    pages: {
        index: {
            // 修改入口文件
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    lintOnSave: false
}