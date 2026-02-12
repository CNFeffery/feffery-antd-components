import zhCN from 'antd/lib/locale/zh_CN';
import enUS from 'antd/lib/locale/en_US';
import deDE from 'antd/lib/locale/de_DE';
import ruRU from 'antd/lib/locale/ru_RU';
import frFR from 'antd/lib/locale/fr_FR';

const str2Locale = new Map([
    ['zh-cn', zhCN],
    ['en-us', enUS],
    ['de-de', deDE],
    ['ru-ru', ruRU],
    ['fr-fr', frFR],
]);

const locale2text = {
    AntdSpoiler: {
        'zh-cn': {
            hideLabel: '收起',
            showLabel: '查看更多',
        },
        'en-us': {
            hideLabel: 'Hide',
            showLabel: 'Show more',
        },
        'de-de': {
            hideLabel: 'Verbergen',
            showLabel: 'Mehr anzeigen',
        },
        'ru-ru': {
            hideLabel: 'Скрыть',
            showLabel: 'Показать больше',
        },
        'fr-fr': {
            hideLabel: 'Cacher',
            showLabel: 'Afficher plus',
        },
    },
    AntdPictureUpload: {
        'zh-cn': {
            confirmBeforeDeleteTitle: '确认删除',
            confirmBeforeDeleteOkText: '确认',
            confirmBeforeDeleteCancelText: '取消',
            imgCropModalOKText: '确认',
            imgCropModalCancelText: '取消',
        },
        'en-us': {
            confirmBeforeDeleteTitle: 'Confirm Delete',
            confirmBeforeDeleteOkText: 'Ok',
            confirmBeforeDeleteCancelText: 'Cancel',
            imgCropModalOKText: 'Ok',
            imgCropModalCancelText: 'Cancel',
        },
        'de-de': {
            confirmBeforeDeleteTitle: 'Löschen bestätigen',
            confirmBeforeDeleteOkText: 'Ok',
            confirmBeforeDeleteCancelText: 'Abbrechen',
            imgCropModalOKText: 'Ok',
            imgCropModalCancelText: 'Abbrechen',
        },
        'ru-ru': {
            confirmBeforeDeleteTitle: 'Подтвердите удаление',
            confirmBeforeDeleteOkText: 'Ок',
            confirmBeforeDeleteCancelText: 'Отмена',
            imgCropModalOKText: 'Ок',
            imgCropModalCancelText: 'Отмена',
        },
        'fr-fr': {
            confirmBeforeDeleteTitle: 'Confirmer la suppression',
            confirmBeforeDeleteOkText: 'OK',
            confirmBeforeDeleteCancelText: 'Annuler',
            imgCropModalOKText: 'OK',
            imgCropModalCancelText: 'Annuler',
        },
    },
    AntdPagination: {
        'zh-cn': {
            showTotalPrefix: '共 ',
            showTotalSuffix: ' 条记录',
        },
        'en-us': {
            showTotalPrefix: 'Total ',
            showTotalSuffix: ' items',
        },
        'de-de': {
            showTotalPrefix: 'Gesamt ',
            showTotalSuffix: ' items',
        },
        'ru-ru': {
            showTotalPrefix: 'Всего ',
            showTotalSuffix: ' элементов',
        },
        'fr-fr': {
            showTotalPrefix: 'Total  ',
            showTotalSuffix: ' articles',
        },
    },
    AntdTable: {
        'zh-cn': {
            showTotalPrefix: '共 ',
            showTotalSuffix: ' 条记录',
            filterKeywordPlaceholder: '搜索',
            filterKeywordSearchButtonText: '搜索',
            filterKeywordResetButtonText: '重置',
            columnEditableFormatConstraintMessage:
                '编辑失败，输入的“[VALUE]”不符合对应字段的格式要求。',
        },
        'en-us': {
            showTotalPrefix: 'Total ',
            showTotalSuffix: ' items',
            filterKeywordPlaceholder: 'Search',
            filterKeywordSearchButtonText: 'Search',
            filterKeywordResetButtonText: 'Reset',
            columnEditableFormatConstraintMessage:
                'Edit failed, The input "[VALUE]" does not meet the format requirements for the corresponding field.',
        },
        'de-de': {
            showTotalPrefix: 'Gesamt ',
            showTotalSuffix: ' items',
            filterKeywordPlaceholder: 'Suche',
            filterKeywordSearchButtonText: 'Suchen',
            filterKeywordResetButtonText: 'Zurücksetzen',
            columnEditableFormatConstraintMessage:
                'Bearbeiten fehlgeschlagen, Die Eingabe "[VALUE]" entspricht nicht den Anforderungen des entsprechenden Feldes.',
        },
        'ru-ru': {
            showTotalPrefix: 'Всего ',
            showTotalSuffix: ' элементов',
            filterKeywordPlaceholder: 'Поиск',
            filterKeywordSearchButtonText: 'Поиск',
            filterKeywordResetButtonText: 'Сбросить',
            columnEditableFormatConstraintMessage:
                'Редактирование не удалось, введенное значение "[VALUE]" не соответствует требованиям поля.',
        },
        'fr-fr': {
            showTotalPrefix: 'Total ',
            showTotalSuffix: ' articles',
            filterKeywordPlaceholder: 'Rechercher',
            filterKeywordSearchButtonText: 'Rechercher',
            filterKeywordResetButtonText: 'Réinitialiser',
            columnEditableFormatConstraintMessage:
                'Échec de la modification. La valeur saisie "[VALUE]" ne respecte pas les exigences de format du champ correspondant.',
        },
    },
    AntdTransfer: {
        'zh-cn': {
            titles: ['待选区', '选定区'],
        },
        'en-us': {
            titles: ['Source', 'Target'],
        },
        'de-de': {
            titles: ['Quelle', 'Ziel'],
        },
        'ru-ru': {
            titles: ['Источник', 'Цель'],
        },
        'fr-fr': {
            titles: ['Source', 'Cible'],
        },
    },
    Upload: {
        'zh-cn': {
            uploadSuccess: '上传成功！',
            uploadFailed: '上传失败！',
            sizeError: ['文件大小超出', 'MB限制！'],
            typeError: ['上传失败，', '文件格式不符合要求！'],
            buttonContent: '点击上传文件',
        },
        'en-us': {
            uploadSuccess: 'upload success!',
            uploadFailed: 'upload failed!',
            sizeError: ['File size exceeds the ', 'MB limit!'],
            typeError: [
                'Uploading failed, The format of ',
                ' does not meet requirements!',
            ],
            buttonContent: 'Click to upload file',
        },
        'de-de': {
            uploadSuccess: 'Hochladen erfolgreich!',
            uploadFailed: 'Hochladen fehlgeschlagen!',
            sizeError: ['Dateigröße überschreitet das Limit von ', 'MB!'],
            typeError: [
                'Hochladen fehlgeschlagen. Das Format von ',
                ' entspricht nicht den Anforderungen!',
            ],
            buttonContent: 'Klicken, um eine Datei hochzuladen',
        },
        'ru-ru': {
            uploadSuccess: 'Загрузка успешна!',
            uploadFailed: 'Ошибка загрузки!',
            sizeError: ['Размер файла превышает ', 'MB ограничение!'],
            typeError: [
                'Ошибка загрузки, формат ',
                ' не соответствует требованиям!',
            ],
            buttonContent: 'Нажмите для загрузки файла',
        },
        'fr-fr': {
            uploadSuccess: 'téléversement réussi !',
            uploadFailed: 'échec du téléversement !',
            sizeError: ['La taille du fichier dépasse la limite de ', 'Mo !'],
            typeError: [
                'Échec du téléversement, le format de ',
                ' ne respecte pas les exigences !',
            ],
            buttonContent: 'Cliquez pour téléverser un fichier',
        },
    },
    AntdComment: {
        'zh-cn': {
            likeTooltipTitle: '支持',
            dislikeTooltipTitle: '反对',
            replayTitle: '添加回复',
            deleteConfirmTitle: '确认删除',
            deleteConfirmOkText: '确认',
            deleteConfirmCancelText: '取消',
            deleteTitle: '删除',
        },
        'en-us': {
            likeTooltipTitle: 'like',
            dislikeTooltipTitle: 'dislike',
            replayTitle: 'Add a reply',
            deleteConfirmTitle: 'Confirm deletion',
            deleteConfirmOkText: 'Yes',
            deleteConfirmCancelText: 'No',
            deleteTitle: 'Delete',
        },
        'de-de': {
            likeTooltipTitle: 'Gefällt mir',
            dislikeTooltipTitle: 'Gefällt mir nicht',
            replayTitle: 'Antwort hinzufügen',
            deleteConfirmTitle: 'Löschen bestätigen',
            deleteConfirmOkText: 'Ja',
            deleteConfirmCancelText: 'Nein',
            deleteTitle: 'Löschen',
        },
        'ru-ru': {
            likeTooltipTitle: 'Нравится',
            dislikeTooltipTitle: 'Не нравится',
            replayTitle: 'Добавить ответ',
            deleteConfirmTitle: 'Подтвердите удаление',
            deleteConfirmOkText: 'Да',
            deleteConfirmCancelText: 'Нет',
            deleteTitle: 'Удалить',
        },
        'fr-fr': {
            likeTooltipTitle: 'j’aime',
            dislikeTooltipTitle: 'je n’aime pas',
            replayTitle: 'Ajouter une réponse',
            deleteConfirmTitle: 'Confirmer la suppression',
            deleteConfirmOkText: 'Oui',
            deleteConfirmCancelText: 'Non',
            deleteTitle: 'Supprimer',
        },
    },
};

export { str2Locale, locale2text };
