module.exports = {

    docs: [
        'wms', 'functional',
        {
            type: 'category', label: 'Руководство Пользователя', link: {type: 'doc', id: 'manual/manual'},
            items: [
                {
                    type: 'category', label: 'Интерфейс', link: {type: 'doc', id: 'manual/interface'},
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
            type: 'category', label: 'Руководство Администратора', link: {type: 'doc', id: 'admin/admin'},
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
                                        'admin/administration/scheduler/restore','admin/administration/scheduler/task',
                                        'admin/administration/scheduler/backup',
                                    ],
                                },
                                {
                                    type: 'category', label: 'Доступ', link: {type: 'doc', id: 'admin/administration/access/access'},
                                    items: [
                                        'admin/administration/access/computers','admin/administration/access/politics',
                                        'admin/administration/access/users',
                                    ],
                                },
                                {
                                    type: 'category', label: 'Журналы', link: {type: 'doc', id: 'admin/administration/magazines/magazines'},
                                    items: [
                                        'admin/administration/magazines/launch_log','admin/administration/magazines/change_log',
                                        'admin/administration/magazines/client_application_log','admin/administration/magazines/error_log',
                                        'admin/administration/magazines/connection_log','admin/administration/magazines/history_log',
                                        'admin/administration/magazines/user_log',
                                    ],
                                },
                                'admin/administration/sys_meta',
                            ]
                        },
                    ],
                },
                {
                    type: 'category', label: 'Общее описание интерфейса клиента', link: {type: 'doc',id: 'admin/common/common'},
                    items: [
                        'admin/common/form_structure','admin/common/user_settings','admin/common/mode_view',
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
                    type: 'category', label: 'Топология', link: {type: 'doc',id: 'admin/топология/топология'},
                    items: [
                        'admin/топология/склады','admin/топология/stock_segment','admin/топология/stock_structure','admin/топология/logic_zone',
                    ],
                },
                {
                    type: 'category', label: 'Настройка логики операций системы WMS', link: {type: 'doc',id: 'admin/set_logics/set_logics'},
                    items: [
                        'admin/set_logics/main_settings','admin/set_logics/selection','admin/set_logics/placement',
                    ],
                },
                {
                    type: 'category', label: 'Печать', link: {type: 'doc',id: 'admin/print/print'},
                    items: [
                        'admin/print/future_sheets','admin/print/label_tare',
                    ],
                },
                'admin/control_task',
            ],
        },
        'note','warning',

    ]
}

