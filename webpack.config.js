module.exports = {
    entry: './src/esm/index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    mode: "development",
    optimization: {
        concatenateModules: false
    }
};