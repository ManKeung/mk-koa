const sidebars = {
    '指栏': [
        'intro',
        {
            type: 'autogenerated',
            dirName: 'guide'
        }
    ],
    '配置参考': [
        'config',
        {
            type: 'doc',
            id: 'config/lint'
        },
        {
            type: 'doc',
            id: 'config/scripts'
        },
    ],
    '基础功能': [
        'function',
        {
            type: 'doc',
            id: 'function/file'
        },
        {
            type: 'doc',
            id: 'function/middleware'
        },
        {
            type: 'doc',
            id: 'function/jwt'
        },
        {
            type: 'doc',
            id: 'function/upload'
        },
    ]
    // 'API': [
    //     'api',
    //     {
    //         type: 'category',
    //         label: '网络',
    //         items: [
    //             {
    //                 type: 'autogenerated',
    //                 dirName: 'api/nextwork'
    //             }
    //         ]
    //     },
    //     {
    //         type: 'category',
    //         label: '工具',
    //         items: [
    //             {
    //                 type: 'autogenerated',
    //                 dirName: 'api/tools'
    //             }
    //         ]
    //     }
    // ]
}

module.exports = sidebars
