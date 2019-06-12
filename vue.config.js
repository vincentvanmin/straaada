const path = require('path') 
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/styles/_variables.scss";`
            }
        }
    },
    configureWebpack: {
        plugins: [
            new PrerenderSPAPlugin({
                staticDir: path.join(__dirname, 'dist'),
                // Required - Routes to render.
                routes: [ '/' ],
            })
        ]
    }
};