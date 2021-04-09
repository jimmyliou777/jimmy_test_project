const withPlugins = require('next-compose-plugins');
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
});
const mdxConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

module.exports = withPlugins([[withMDX, mdxConfig]]);
