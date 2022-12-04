module.exports = {
    pages: {
        index: {
            // 修改入口文件
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    //关闭eslint代码检查
    lintOnSave: false,
    devServer: {
        port: 3000
    }
}