const state = {
    name: localStorage.getItem('color_scheme') || 'light',
}

const mutations = {
    setColorSchemeName(state, name) {
        state.name = name
        localStorage.setItem('color_scheme', name)
    },
}

const actions = {

}

export default {
    state,
    mutations,
    actions,
}
