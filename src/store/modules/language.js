const state = {
    lang: localStorage.getItem('lang') || 'en',
}

const mutations = {
    setLanguage(state, lang) {
        state.lang = lang
        localStorage.setItem('lang', lang)
    },
}

const actions = {

}

export default {
    state,
    mutations,
    actions,
}
