module.exports = {

    docs: [
        'wms', 'functional',
        {
            type: 'category',
            label: 'Руководство Пользователя',
            link: {type: 'doc', id: 'manual/manual'},
            items: [
                {
                    type: 'category',
                    label: 'Интерфейсы',
                    link: {type: 'doc', id: 'manual/interface'},
                    items: [
                        'manual/interface_forms',
                        'manual/interface_set',
                        'manual/interface_view',
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: 'Руководство по работе с ТСД',
            link: {type: 'doc', id: 'tsd/tsd'},
            items: [
                'tsd/logon',
            ],
        },
        {
            type: 'category',
            label: 'Руководство Администратора',
            link: {type: 'doc', id: 'admin/admin'},
            items: [
                'admin/architecture_wms',
            ],
        },


    ]
}

