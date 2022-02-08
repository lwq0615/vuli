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
                    '/componentDocs/button',
                    '/componentDocs/tabs',
                    '/componentDocs/rotate-card',
                    '/componentDocs/slide'
                ]
            },
            {
                title: 'Form',
                collapsable: false,
                children: [
                    '/componentDocs/select',
                    '/componentDocs/radio',
                    '/componentDocs/checkbox',
                    '/componentDocs/switch',
                    '/componentDocs/input'
                ]
            },
            {
                title: 'Data',
                collapsable: false,
                children: [
                    '/componentDocs/progress'
                ]
            },
            {
                title: 'Message',
                collapsable: false,
                children: [
                    '/componentDocs/message',
                    '/componentDocs/alert',
                ]
            }
        ]
    }
}
