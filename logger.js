export default {
    install(app) {
        app.config.globalProperties.$log = (msg) => {
            console.log(`[LOG]: ${msg}`)
        }
    }
}