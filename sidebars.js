module.exports = {

    docs: [
        'wms', 'functional',
        {
            type: 'category',
            label: 'Руководство Пользователя',
            link: {type: 'doc', id: 'manual'},
            items: [
                'manual/interface',
            ],
        },
        {
            type: 'category',
            label: 'Руководство по работе с ТСД',
            link: {type: 'doc', id: 'tsd'},
            items: [
                'tsd/logon',
            ],
        },
        {
            type: 'category',
            label: 'Руководство Администратора',
            link: {type: 'doc', id: 'admin'},
            items: [
                'admin/architecture_wms',
            ],
        },


    ]
}

