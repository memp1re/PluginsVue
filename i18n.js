window.i18nPlugin = {
    install(app, options) {
        // Реактивное хранилище переводов
        const state = Vue.reactive({ current: options });
        
        // Метод перевода
        app.config.globalProperties.$translate = (key) => {
            return key.split('.').reduce((o, i) => o?.[i], state.current) ?? '[Missing translation]';
        };
        
        // Метод обновления переводов
        app.config.globalProperties.$updateTranslations = (newOptions) => {
            state.current = newOptions;
        };
        
        // Для inject
        app.provide('i18n', Vue.readonly(state));
    }
};
