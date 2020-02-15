/**
 * (自定义JS)
 * @author 马世豪
 * @date 2020/2/14 23:10.
 */
module.exports = {
    base: '/elements-of-ai-zh',
    title: 'AI 基础入门教程',
    description: 'AI 基础入门教程',
    // 默认主题设置
    theme: '@vuepress/vue',
    themeConfig: {
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
                    '/'
                ]
            },
            {
                title: '现实世界的AI',   // 必要的
                path: '/real-world-ai/',      // 可选的, 应该是一个绝对路径
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    '/'
                ]
            }
        ],

        repo: 'https://github.com/msh01/elements-of-ai-zh.git',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',
        // 以下为可选的编辑链接选项
        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '在线修订此页面',
        lastUpdated: '修订于', // string | boolean
    },
    // 插件设置
    plugins: [
        '@limdongjin/vuepress-plugin-sidebar-on-off',
        '@vuepress/back-to-top',
        [
            '@vuepress/container',
            {
                type: 'slot'
            }
        ]
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