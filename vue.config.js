module.exports={
    configureWebpack:{
        resolve:{
            // extensions:[]去除文件后缀
            alias:{//配置路径
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',
            }
        }
    }
}