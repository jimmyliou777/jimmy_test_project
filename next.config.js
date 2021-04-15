const withPlugins = require('next-compose-plugins');
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
});
const withSass = require('@zeit/next-sass');
const sassConfig = {
    // 开启css模块化
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        // scoped class 格式
        localIdentName: '[local]__[hash:base64:5]',
    },
    webpack: (config) => {
        // 全局变量和mixin
        config.module.rules.push({
            enforce: 'pre',
            test: /.scss$/,
            loader: 'sass-resources-loader',
            options: {
                resources: ['./src/styles/variables.scss'],
            },
        });

        return config;
    },
};

const mdxConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

module.exports = withPlugins([
    [withMDX, mdxConfig],
    [withSass, sassConfig],
]);
