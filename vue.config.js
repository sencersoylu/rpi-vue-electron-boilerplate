module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                linux: {
                    target: [{
                        target: 'AppImage',
                        arch: ['armv7l']
                    }]
                }
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ?
        '' : ''
}