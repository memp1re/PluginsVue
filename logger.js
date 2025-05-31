window.loggerPlugin = {
    install(app) {
        app.config.globalProperties.$log = (msg) => {
            console.log(`[LOG]: ${msg}`);
        };
    }
};
