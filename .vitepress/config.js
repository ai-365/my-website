export default {
    // 应用级配置选项
    lang: 'zh-CN',
    title: '我的个人博客网站',
    description: '个人博客网站',
    base: '/blog/', //这个选项很重要，部署时为仓库名称
    ignoreDeadLinks: true, // 忽略无法访问的链接
    map: true, // 允许普通的script脚本执行
    // 配置底层vite选项
    vite: {
        server: {
            // 下面这两个选项开启Network局域网访问
            host: '0.0.0.0', // 监听所有地址
            allowedHosts: true,

        }
    },
    head: [['link', { rel: 'stylesheet', href: '/to-top-style.css' }]],
}