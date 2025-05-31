// i18n.js
window.i18nPlugin = {
    install(app, options) {
        // Метод перевода
        app.config.globalProperties.$translate = (key) => {
            return key.split('.').reduce((o, i) => o?.[i], options) ?? '[перевод не найден]'
        }
        
        // Для inject
        app.provide('i18n', options)
    }
}
