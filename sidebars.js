module.exports = {

    docs: [
        'wms', 'functional',
        {
            type: 'category', label: 'Руководство Пользователя', link: {type: 'doc', id: 'manual/manual'},
            items: [
                {
                    type: 'category', label: 'Интерфейс', link: {type: 'doc', id: 'manual/interface'},
                    items: [
                        'manual/forms', 'manual/settings', 'manual/mode',
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
            type: 'category', label: 'Руководство Администратора', link: {type: 'doc', id: 'admin/admin'},
            items: [
                'admin/architecture',
                {
                    type: 'category', label: 'Администрирование системы WMS', link: {type: 'doc',id: 'admin/administration/administration'},
                    items: [
                        {
                            type: 'category', label: 'Приложение', link: {type: 'doc', id: 'admin/administration/application/application'},
                            items: [
                                'admin/administration/application/settings','admin/administration/application/standard',
                            ],
                        },
                        {
                            type: 'category', label: 'Система', link: {type: 'doc', id: 'admin/administration/system/system'},
                            items: [
                                'admin/administration/system/settings',
                                {
                                    type: 'category', label: 'Производительность', link: {type: 'doc', id: 'admin/administration/system/performance/performance'},
                                    items: [
                                        'admin/administration/system/performance/monitor',
                                    ],
                                },
                                'admin/administration/system/interpreter','admin/administration/system/service',
                                {
                                    type: 'category', label: 'Уведомления', link: {type: 'doc', id: 'admin/administration/system/notification/notification'},
                                    items: [
                                        'admin/administration/system/notification/mail',
                                    ],
                                },
                                {
                                    type: 'category', label: 'Планировщик', link: {type: 'doc', id: 'admin/administration/system/scheduler/scheduler'},
                                    items: [
                                        'admin/administration/system/scheduler/restore','admin/administration/system/scheduler/task',
                                        'admin/administration/system/scheduler/backup',
                                    ],
                                },
                                {
                                    type: 'category', label: 'Доступ', link: {type: 'doc', id: 'admin/administration/system/access/access'},
                                    items: [
                                        'admin/administration/system/access/computers','admin/administration/system/access/politics',
                                        'admin/administration/system/access/users',
                                    ],
                                },
                                {
                                    type: 'category', label: 'Журналы', link: {type: 'doc', id: 'admin/administration/system/magazines/magazines'},
                                    items: [
                                        'admin/administration/system/magazines/launch','admin/administration/system/magazines/change',
                                        'admin/administration/system/magazines/client','admin/administration/system/magazines/error',
                                        'admin/administration/system/magazines/connection','admin/administration/system/magazines/history',
                                        'admin/administration/system/magazines/user',
                                    ],
                                },
                                'admin/administration/system/meta',
                            ]
                        },
                    ],
                },
                {
                    type: 'category', label: 'Общее описание интерфейса клиента', link: {type: 'doc',id: 'admin/common/common'},
                    items: [
                        'admin/common/structure','admin/common/settings','admin/common/mode',
                    ],
                },
                {
                    type: 'category', label: 'Управление мастер данными', link: {type: 'doc',id: 'admin/control/control'},
                    items: [
                        {
                            type: 'category', label: 'Справочник товаров', link: {type: 'doc',id: 'admin/control/goods/goods'},
                            items: [
                                'admin/control/goods/goods_category','admin/control/goods/goods_card',
                            ],
                        },
                        'admin/control/dir_counter_agent','admin/control/dir_employee','admin/control/dir_tare',
                        {
                            type: 'category', label: 'Документы', link: {type: 'doc',id: 'admin/control/documents/documents'},
                            items: [
                                {
                                    type: 'category', label: 'Документ отгрузки', link: {type: 'doc',id: 'admin/control/documents/doc_shipment'},
                                    items: [
                                        'admin/control/documents/doc_selection',
                                    ],
                                },
                                'admin/control/documents/doc_receipt',
                            ],
                        },
                        'admin/control/dir_unit',
                    ],
                },
                {
                    type: 'category', label: 'Топология', link: {type: 'doc',id: 'admin/topology/topology'},
                    items: [
                        'admin/topology/stock','admin/topology/segment','admin/topology/structure','admin/topology/zone',
                    ],
                },
                {
                    type: 'category', label: 'Настройка логики операций системы WMS', link: {type: 'doc',id: 'admin/logics/logics'},
                    items: [
                        'admin/logics/settings','admin/logics/selection','admin/logics/placement',
                    ],
                },
                {
                    type: 'category', label: 'Печать', link: {type: 'doc',id: 'admin/print/print'},
                    items: [
                        'admin/print/future_sheets','admin/print/label_tare',
                    ],
                },
                'admin/task',
            ],
        },
        { // !!! потом все удалить
            type: 'category', label: 'XYZ', link: {type: 'doc',id: 'xyz/xyz'},
            items: [
                'xyz/rule','xyz/note','xyz/warning',
            ],
        },


    ]
}

