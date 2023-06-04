module.exports = {
    entry: './src/cjs/index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    mode: "development",
    optimization: {
        concatenateModules: false
    }
};