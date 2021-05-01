module.exports = {
	lintOnSave: false, // 关闭eslint检查
	productionSourceMap: false,
	devServer: {
		// 跨域请求：PROXY代理
		// 仅仅针对于数据请求(静态资源是不处理的)
		proxy: {
			'/': {
				target: 'https://news-at.zhihu.com',
				changeOrigin: true, // 是否允许携带资源凭证
			}
		}
	}
};
