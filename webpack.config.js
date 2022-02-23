/**
 * 打包packages目录下的js文件
 */
const glob = require('glob')
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')

const list = {}

async function makeList(dirPath,list){
    const files = glob.sync(`${dirPath}/**/index.js`)
    for(let file of files){
        let name = file.split(/[/.]/)[2]
        list[name] = './' + file
    }
}

makeList('packages/lib',list)

module.exports = {
    entry: list,
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'dist/lib'),
        library: 'vui',
        libraryTarget: 'umd'
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            }
        ]
    }
}