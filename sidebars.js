module.exports = {

    docs: [
        'wms', 'functional', 'note',
        {
            type: 'category', label: 'Руководство Пользователя', link: {type: 'doc', id: 'manual/manual'},
            items: [
                {
                    type: 'category', label: 'Интерфейсы', link: {type: 'doc', id: 'manual/interface'},
                    items: [
                        'manual/interface_forms', 'manual/interface_set', 'manual/interface_view',
                    ],
                },
            ],
        },
        {
            type: 'category', label: 'Руководство по работе с ТСД', link: {type: 'doc', id: 'tsd/tsd'},
            items: [
                'tsd/logon',
            ],
        },
        {
            type: 'category', label: 'Руководство Администратора', link: {type: 'doc', id: 'admin/manual'},
            items: [
                'admin/architecture',
                {
                    type: 'category', label: 'Администрирование системы WMS', link: {type: 'doc',id: 'admin/administration/administration'},
                    items: [
                        {
                            type: 'category', label: 'Приложение', link: {type: 'doc', id: 'admin/administration/app'},
                            items: [
                                'admin/administration/app_settings','admin/administration/app_standard',
                            ],
                        },
                        {
                            type: 'category', label: 'Система', link: {type: 'doc', id: 'admin/administration/sys'},
                            items: [
                                'admin/administration/sys_settings',
                                {
                                    type: 'category', label: 'Производительность', link: {type: 'doc', id: 'admin/administration/performance/performance'},
                                    items: [
                                        'admin/administration/performance/monitor',
                                    ],
                                },
                                'admin/administration/sys_interpreter','admin/administration/sys_service',
                                {
                                    type: 'category', label: 'Уведомления', link: {type: 'doc', id: 'admin/administration/notification/notification'},
                                    items: [
                                        'admin/administration/notification/mail',
                                    ],
                                },
                                {
                                    type: 'category', label: 'Планировщик', link: {type: 'doc', id: 'admin/administration/scheduler/scheduler'},
                                    items: [
                                        'admin/administration/scheduler/restore.md','admin/administration/scheduler/task.md',
                                        'admin/administration/scheduler/backup.md',
                                    ],
                                },
                            ]
                        },
                    ],
                },
                {
                    type: 'category', label: 'Общее описание интерфейса клиента', link: {type: 'doc',id: 'admin/common/common'},
                    items: [
                        'admin/common/settings',
                    ],
                },
            ],
        },


    ]
}

