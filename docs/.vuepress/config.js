module.exports = {
    base: '/luck-ui/',
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
                    '/componentDocs/slide',
                    '/componentDocs/image',
                    '/componentDocs/image-light',
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
                    '/componentDocs/calculator'
                ]
            }
        ]
    }
}
