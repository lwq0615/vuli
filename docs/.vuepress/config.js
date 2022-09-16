module.exports = {
    title: 'Vuli',
    description: '基于vue的组件库',
    base: '/vuli/',
    head: [
        [
            'link', 
            { rel: 'icon', href: '/logo.png' }
        ]
    ],
    themeConfig: {
        sidebar: [
            {
                title: '快速开始',
                collapsable: false,
                path: '/'
            },
            {
                title: 'Directive指令',
                collapsable: false,
                path: '/componentDocs/directive'
            },
            {
                title: 'Crud组件',
                collapsable: false,
                path: '/componentDocs/crud'
            },
            {
                title: 'View',
                collapsable: false,
                children: [
                    '/componentDocs/layout',
                    '/componentDocs/button',
                    '/componentDocs/tabs',
                    '/componentDocs/tag',
                    '/componentDocs/tree',
                    '/componentDocs/scroll',
                    '/componentDocs/rotate-card'
                ]
            },
            {
                title: 'Form',
                collapsable: false,
                children: [
                    '/componentDocs/input',
                    '/componentDocs/select',
                    '/componentDocs/cascader',
                    '/componentDocs/radio',
                    '/componentDocs/checkbox',
                    '/componentDocs/color',
                    '/componentDocs/sider',
                    '/componentDocs/switch',
                    '/componentDocs/upload'
                ]
            },
            {
                title: 'Data',
                collapsable: false,
                children: [
                    '/componentDocs/table',
                    '/componentDocs/progress',
                    '/componentDocs/slide',
                    '/componentDocs/image',
                    '/componentDocs/image-light',
                    '/componentDocs/pagination'
                ]
            },
            {
                title: 'Message',
                collapsable: false,
                children: [
                    '/componentDocs/message',
                    '/componentDocs/alert',
                    '/componentDocs/badge',
                    '/componentDocs/tooltip'
                ]
            },
            {
                title: 'Other',
                collapsable: false,
                children: [
                    '/componentDocs/transition',
                    '/componentDocs/loading',
                    '/componentDocs/dialog',
                    '/componentDocs/calculator'
                ]
            }
        ],
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Github', link: 'https://github.com/lwq0615/vuli' }
        ]
    }
}
