import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
    icons: {
        iconfont: 'mdi'
    },
    theme: {
        themes: {
            light: {
                accent: '#375f7d',
                secondary: '#e3ecf6',
                tertiary: '#f0f8fa',
                outbound: '#cce09b'
            }
        }
    }
})
