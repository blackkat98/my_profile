import Vue from 'vue'
import VueI18n from 'vue-i18n'

import vi from './lang/vi.json'

Vue.use(VueI18n)

export default new VueI18n({
    locale: localStorage.getItem('lang') || 'en',
    messages: {
        vi: vi,
    },
})
