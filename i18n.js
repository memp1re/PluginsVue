window.i18nPlugin = {
    install(app, options) {
        // Сохраняем текущие настройки перевода
        let currentOptions = options;
        
        // Метод перевода
        const translate = (key) => {
            return key.split('.').reduce((o, i) => o?.[i], currentOptions) ?? '[перевод не найден]';
        };
        
        // Глобальный метод
        app.config.globalProperties.$translate = translate;
        
        // Для inject
        app.provide('i18n', { 
            options: currentOptions,
            updateOptions: (newOptions) => {
                currentOptions = newOptions;
            }
        });
    }
};
