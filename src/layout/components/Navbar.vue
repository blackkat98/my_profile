<template>
    <div>
        <b-navbar class="p-2" toggleable="sm" type="dark" :variant="navbarVariant">
            <b-navbar-brand href="#" v-b-tooltip.hover="$t('I drew this logo using Paint in 2017') + ', ' + $t('by the way this redirects you to the home page')">
                <img class="nav-logo" src="@/assets/logos/logo.png" @click="goToRoute('Home')" />
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="m-auto">
                    <b-nav-item href="#" @click="goToRoute('AboutMe')">{{ $t('About me') }}</b-nav-item>
                    <b-nav-item href="#" @click="goToRoute('Professions')">{{ $t('Professions') }}</b-nav-item>
                    <b-nav-item href="#" @click="goToRoute('Contacts')">{{ $t('Contacts') }}</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav>
                    <!-- <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form> -->

                    <b-nav-item-dropdown no-caret right v-b-tooltip.hover="$t('Language')">
                        <template #button-content>
                            <font-awesome-icon :icon="['fas', 'globe']" />
                        </template>
                        <b-dropdown-item href="#" :active="isCurrentActiveLanguage('en')" @click="changeLanguage('en')">
                            <img class="country-flag-logo" src="@/assets/images/britain_flag.png" /> <small>EN</small>
                        </b-dropdown-item>
                        <b-dropdown-item href="#" :active="isCurrentActiveLanguage('vi')" @click="changeLanguage('vi')">
                            <img class="country-flag-logo" src="@/assets/images/vietnam_flag.png" /> <small>VI</small>
                        </b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item href="#" v-b-tooltip.hover="$t('Color scheme')" @click="changeToNextColorScheme()">
                        <font-awesome-icon :icon="['fas', colorSchemeIconName]" :style="{ 'color': colorSchemeIconColor }" />
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {

        }
    },
    computed: {
        
    },
    methods: {
        goToRoute(name) {
            // or $router.currentRoute.name
            if (name == this.$route.name) return false

            this.$router.push({
                name: name
            })
        },
        changeLanguage(lang) {
            this.$i18n.locale = lang
            this.$store.commit('setLanguage', lang)
        },
        isCurrentActiveLanguage(lang) {
            return this.$i18n.locale === lang
        },
    },
}
</script>

<style scoped>
.nav-logo {
    width: 32px;
    height: 32px;
}

.country-flag-logo {
    width: 1.2em;
    height: 1em;
}
</style>
