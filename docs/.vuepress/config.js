module.exports = {
    base: '/vui/',
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
                title: 'View',
                collapsable: false,
                children: [
                    '/componentDocs/layout',
                    '/componentDocs/button',
                    '/componentDocs/tabs',
                    '/componentDocs/tag',
                    '/componentDocs/scroll',
                    '/componentDocs/rotate-card'
                ]
            },
            {
                title: 'Form',
                collapsable: false,
                children: [
                    '/componentDocs/select',
                    '/componentDocs/radio',
                    '/componentDocs/checkbox',
                    '/componentDocs/color',
                    '/componentDocs/sider',
                    '/componentDocs/input',
                    '/componentDocs/switch'
                ]
            },
            {
                title: 'Data',
                collapsable: false,
                children: [
                    '/componentDocs/progress',
                    '/componentDocs/slide',
                    '/componentDocs/image',
                    '/componentDocs/image-light',
                    '/componentDocs/pagination',
                    '/componentDocs/upload'
                ]
            },
            {
                title: 'Message',
                collapsable: false,
                children: [
                    '/componentDocs/message',
                    '/componentDocs/alert',
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
        ]
    }
}
