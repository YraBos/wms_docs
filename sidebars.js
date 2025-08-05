/* Все странички именуются, как:
        1. Sid пунктов навигатора, чтобы не было проблем с сопоставлением пунктов меню с наименованием ID разделов,
           за исключением отдельных пунктов меню, не имеющих отношения к навигатору
        2. ID пунктов записывается строчными буквами, так как это является общим правилом для WEB
           Распространенным соглашением для именования HTML-файлов и папок является использование строчных букв и дефисов
           для разделения слов вместо пробелов, подчеркиваний или camel case . Это поможет вам избежать проблем с чувствительностью
           к регистру, поскольку некоторые веб-серверы и браузеры могут обрабатывать заглавные и строчные буквы по-разному.
*/


module.exports = {
/*'masterdata/defaultnumerators','masterdata/attributes','masterdata/options',*/
    docs: [
        {
            type: 'category', label: 'Введение', link: {type: 'doc', id: 'intro/intro'},
            items: [
                'intro/terminology',
            ],
        },
        {
            type: 'category', label: 'Нормативно-справочная информация', link: {type: 'doc', id: 'masterdata/masterdata'},
            items: [
                // категории, товары, сотрудники, штрихкоды, контрагентов, единиц измерения
                'masterdata/categories','masterdata/items',
                {
                    type: 'category', label: 'Транспортные единицы', link: {type: 'doc', id: 'masterdata/transportunits/transportunits'},
                    items: [
                        'masterdata/transportunits/containertypes','masterdata/transportunits/formcontainers',
                        'masterdata/transportunits/printfuturecontainers',
                    ],
                },
                'masterdata/referenceemployees',
                'masterdata/barcodes', 'masterdata/legalentites','masterdata/uoms',
            ],
        },
        {
            type: 'category', label: 'Управление топологией', link: {type: 'doc', id: 'topology/topology'},
             items: [
                 'topology/stocks','topology/segments','topology/topologyeditor',
             ],
        },
        {
            type: 'category', label: 'Входящий поток', link: {type: 'doc', id: 'incoming/incoming'},
             items: [
                 'incoming/receipttype','incoming/receiptstrategy','incoming/receipt',
             ],
        },
        {
            type: 'category', label: 'Исходящий поток', link: {type: 'doc', id: 'outgoing/outgoing'},
             items: [
                 'outgoing/outgoing',
             ],
        },
        {
            type: 'category', label: 'Внутренние процессы склада', link: {type: 'doc', id: 'stock/stock'},
             items: [
                 'stock/stock',
             ],
        },
        {
            type: 'category', label: 'Дополнительный функционал', link: {type: 'doc', id: 'additional/additional'},
             items: [
                 'additional/additional','additional/pdtemulator',
             ],
        },
        {
            type: 'category', label: 'Подсистем печати', link: {type: 'doc', id: 'wmsprint/wmsprint'},
             items: [
                 'wmsprint/printdocs','wmsprint/printformats','wmsprint/printerwms','wmsprint/printtemplates',
             ],
        },
        {
            type: 'category', label: 'Настройки', link: {type: 'doc', id: 'wmssettings/wmssettings'},
             items: [
                 'wmssettings/options','wmssettings/defaultnumerators','wmssettings/attributes',
             ],
        },
        {
            type: 'category', label: 'Администрирование', link: {type: 'doc', id: 'administration/administration'},
             items: [
                 'administration/administration',
             ],
        },
        {
            type: 'category', label: 'Замечания', link: {type: 'doc', id: 'note/note'},
            items: [
                'note/task','note/rule','note/blanks'
            ],
        },
    ],
}