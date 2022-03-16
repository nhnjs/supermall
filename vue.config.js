module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/router',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    }
}