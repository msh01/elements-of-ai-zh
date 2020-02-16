/**
 * (自定义JS)
 * @author 马世豪
 * @date 2020/2/14 23:10.
 */
module.exports = {
    base: '/elements-of-ai-zh/',
    title: 'AI 基础入门教程',
    description: 'AI 基础入门教程',
    head:
        [
            ['link', {rel: 'icon', href: '/logo/small.png'}],
            ['script', {}, `
            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?9dcf4bca9cc47caeef4caf5d5f982e86";
                var s = document.getElementsByTagName("script")[0]; 
                s.parentNode.insertBefore(hm, s);
            })();
            `]
        ],
    themeConfig: {
        logo: '/logo/small.png',
        nav: [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'github',
                link: '/guide/'
            }
        ],
        sidebar: [
            {
                title: '什么是AI',   // 必要的
                path: '/what-is-ai/',      // 可选的, 应该是一个绝对路径
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 2,    // 可选的, 默认值是 1
                children: [
                    "/what-is-ai/1", "/what-is-ai/2"
                ]
            },
            {
                title: '现实世界的AI',   // 必要的
                path: '/real-world-ai/',      // 可选的, 应该是一个绝对路径
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/real-world-ai/3', '/real-world-ai/4'
                ]
            },
            {
                title: '捐赠',
                // path: '/donation/',
                collapsable: false,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/what-is-ai/juanzeng'
                ]
            }
        ],
        '/donation/': [
            '/donation/',
        ],
        '/version/': [
            'V2.4',
        ],
        repo: 'https://github.com/msh01/elements-of-ai-zh.git',
        repoLabel: '查看源码',
        // // 假如你的文档仓库和项目本身不在一个仓库：
        // // docsRepo: 'vuejs/vuepress',
        // // 假如文档不是放在仓库的根目录下：
        // docsDir: 'docs',
        // // 假如文档放在一个特定的分支下：
        // docsBranch: 'master',
        // // 默认是 false, 设置为 true 来启用
        // editLinks: true,
        // // 默认为 "Edit this page"
        editLinkText: '在线修订此页面',
        lastUpdated: '修订于'// string | boolean
    },
    // 插件设置
    plugins: [
        [
            'vuepress-plugin-comment',
            {
                choosen: 'valine',
                // options选项中的所有参数，会传给Valine的配置
                options: {
                    el: '#valine-vuepress-comment',
                    appId: 'slnTcOTAPQVydGNesVApRUcg-gzGzoHsz',
                    appKey: 'Aeusc62FpStk4K4yVAiFonnU'
                }
            }
        ],
        '@limdongjin/vuepress-plugin-sidebar-on-off',
        '@vuepress/back-to-top'
    ],
    markdown: {
        extendMarkdown: md => {
            md.set({
                html: true
            })
            md.use(require('markdown-it-katex'))
        }
    },
    head: [
        // ...
        ['link', {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css'
        }],
        ['link', {
            rel: "stylesheet",
            href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"
        }]
    ]
}