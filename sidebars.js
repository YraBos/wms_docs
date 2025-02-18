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
                {
                    type: 'category', label: 'Справочники', link: {type: 'doc', id: 'manual/dirs/dirs'},
                    items: [
                        'manual/dirs/numerators',
                        {
                            type: 'category', label: 'Товары', link: {type: 'doc', id: 'manual/dirs/goods/goods'},
                            items: [
                                'manual/dirs/goods/categories','manual/dirs/goods/items','manual/dirs/goods/parties','manual/dirs/goods/labels',
                            ],
                        },

                        {
                            type: 'category', label: 'Тара', link: {type: 'doc', id: 'manual/dirs/tare/tare'},
                            items: [
                                'manual/dirs/tare/type','manual/dirs/tare/list',
                            ],
                        },
                        'manual/dirs/staff','manual/dirs/barcodes','manual/dirs/stock','manual/dirs/wms-erp',
                        'manual/dirs/partners','manual/dirs/units','manual/dirs/status','manual/dirs/address',
                        {
                            type: 'category', label: 'Транспорт', link: {type: 'doc', id: 'manual/dirs/transport/transport'},
                            items: [
                                'manual/dirs/transport/address','manual/dirs/transport/drivers','manual/dirs/transport/cars','manual/dirs/transport/routes',
                            ],
                        },
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
                                'admin/control/goods/category','admin/control/goods/card',
                            ],
                        },
                        'admin/control/agent','admin/control/employee','admin/control/tare',
                        {
                            type: 'category', label: 'Документы', link: {type: 'doc',id: 'admin/control/documents/documents'},
                            items: [
                                {
                                    type: 'category', label: 'Документ отгрузки', link: {type: 'doc',id: 'admin/control/documents/shipment'},
                                    items: [
                                        'admin/control/documents/selection',
                                    ],
                                },
                                'admin/control/documents/receipt',
                            ],
                        },
                        'admin/control/unit',
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
                    items: [ // Настройки,            Приемка,               Размещение,              Подбор,                  Отгрузка               Оборудование
                        'admin/logics/settings','admin/logics/receipt','admin/logics/placement','admin/logics/selection','admin/logics/shipment','admin/logics/equipment',
                        {
                            type: 'category', label: 'Система (настройки логики)', link: {type: 'doc',id: 'admin/logics/system'},
                            items: [ 'admin/logics/numerators', ],
                        },
                    ],
                },
                {
                    type: 'category', label: 'Печать', link: {type: 'doc',id: 'admin/print/print'},
                    items: [
                        'admin/print/sheets','admin/print/tare',
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

