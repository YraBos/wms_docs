/* Все странички именуются, как:
        1. Sid пунктов навигатора, чтобы не было проблем с сопоставлением пунктов меню с наименованием ID разделов,
           за исключением отдельных пунктов меню, не имеющих отношения к навигатору
        2. ID пунктов записывается строчными буквами, так как это является общим правилом для WEB
           Распространенным соглашением для именования HTML-файлов и папок является использование строчных букв и дефисов
           для разделения слов вместо пробелов, подчеркиваний или camel case . Это поможет вам избежать проблем с чувствительностью
           к регистру, поскольку некоторые веб-серверы и браузеры могут обрабатывать заглавные и строчные буквы по-разному.
*/

module.exports = {

    docs: [
        'wms', 'functional',
        {
            type: 'category', label: 'Руководство Пользователя', link: {type: 'doc', id: 'manual/manual'},
            items: [
                {
                    type: 'category', label: 'Интерфейс', link: {type: 'doc', id: 'manual/manualinterface/manualinterface'},
                    items: [
                        'manual/manualinterface/interface','manual/manualinterface/forms', 'manual/manualinterface/settings', 'manual/manualinterface/mode',
                    ],
                },
                {
                    type: 'category', label: 'Справочники', link: {type: 'doc', id: 'manual/masterdata/masterdata'},
                    items: [
                        'manual/masterdata/defaultnumerators',
                        {
                            type: 'category', label: 'Товары', link: {type: 'doc', id: 'manual/masterdata/goods/goods'},
                            items: [
                                'manual/masterdata/goods/categories','manual/masterdata/goods/items',
                                'manual/masterdata/goods/dashboardlots','manual/masterdata/goods/marks',
                            ],
                        },

                        {
                            type: 'category', label: 'Тара', link: {type: 'doc', id: 'manual/masterdata/containers/containers'},
                            items: [
                                'manual/masterdata/containers/containertypes','manual/masterdata/containers/formcontainers',
                            ],
                        },
                        'manual/masterdata/referenceemployees','manual/masterdata/barcodes','manual/masterdata/stocks','manual/masterdata/mapingerpstockwms',
                        'manual/masterdata/legalentites','manual/masterdata/uoms','manual/masterdata/changestatusnotes','manual/masterdata/dashboardrecipients',
                        {
                            type: 'category', label: 'Транспорт', link: {type: 'doc', id: 'manual/masterdata/masterdatatransport/masterdatatransport'},
                            items: [
                                'manual/masterdata/masterdatatransport/masterdataaddresses','manual/masterdata/masterdatatransport/masterdatadrivers',
                                'manual/masterdata/masterdatatransport/masterdatatrucks','manual/masterdata/masterdatatransport/masterdataroutes',
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
                                'admin/administration/application/options','admin/administration/application/integrationdata',
                                'admin/administration/application/migrationdata','admin/administration/application/defaultdata',
                            ],
                        },
                        {
                            type: 'category', label: 'Система', link: {type: 'doc', id: 'admin/administration/system/system'},
                            items: [
                                'admin/administration/system/settings',
                                {
                                    type: 'category', label: 'Производительность', link: {type: 'doc', id: 'admin/administration/system/performance/performance'},
                                    items: [
                                        'admin/administration/system/performance/processmonitor',
                                    ],
                                },
                                'admin/administration/system/interpreter','admin/administration/system/maintenance',
                                {
                                    type: 'category', label: 'Уведомления', link: {type: 'doc', id: 'admin/administration/system/notification/notification'},
                                    items: [
                                        'admin/administration/system/notification/mail',
                                    ],
                                },
                                {
                                    type: 'category', label: 'Планировщик', link: {type: 'doc', id: 'admin/administration/system/scheduler/scheduler'},
                                    items: [
                                        'admin/administration/system/scheduler/scheduledtask','admin/administration/system/scheduler/backup',
                                        'admin/administration/system/scheduler/customrestore',
                                    ],
                                },
                                {
                                    type: 'category', label: 'Доступ', link: {type: 'doc', id: 'admin/administration/system/security/security'},
                                    items: [
                                        'admin/administration/system/security/customusers','admin/administration/system/security/computers',
                                        'admin/administration/system/security/securitypolicy',

                                    ],
                                },
                                {
                                    type: 'category', label: 'Журналы', link: {type: 'doc', id: 'admin/administration/system/logs/logs'},
                                    items: [
                                        'admin/administration/system/logs/historyactions','admin/administration/system/logs/exceptions',
                                        'admin/administration/system/logs/connections','admin/administration/system/logs/launches',
                                        'admin/administration/system/logs/changes','admin/administration/system/logs/pings',
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

