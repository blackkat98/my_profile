import colorSchemes from '@/utilities/color_schemes'

export default {
    data() {
        return {
            colorSchemes: colorSchemes,
        }
    },
    computed: {
        colorSchemeIconName() {
            return this.colorSchemes[this.$store.getters.colorSchemeName].iconName
        },
        colorSchemeIconColor() {
            return this.colorSchemes[this.$store.getters.colorSchemeName].iconColor
        },
        navbarVariant() {
            switch (this.$store.getters.colorSchemeName) {
                case 'light':
                    return 'primary'
                case 'dark':
                    return 'dark'
                default:
                    return 'primary'
            }
        },
        cardHeaderVariant() {
            switch (this.$store.getters.colorSchemeName) {
                case 'light':
                    return 'primary'
                case 'dark':
                    return 'dark'
                default:
                    return 'primary'
            }
        },
        cardBodyVariant() {
            switch (this.$store.getters.colorSchemeName) {
                case 'light':
                    return 'light'
                case 'dark':
                    return 'secondary'
                default:
                    return 'light'
            }
        },
        cardBodyTextVariant() {
            switch (this.$store.getters.colorSchemeName) {
                case 'light':
                    return 'dark'
                case 'dark':
                    return 'light'
                default:
                    return 'dark'
            }
        },
        cardBorderVariant() {
            switch (this.$store.getters.colorSchemeName) {
                case 'light':
                    return 'primary'
                case 'dark':
                    return 'light'
                default:
                    return 'primary'
            }
        },
        tabPillActiveVariantClasses() {
            switch (this.$store.getters.colorSchemeName) {
                case 'light':
                    return ['bg-primary', 'text-light']
                case 'dark':
                    return ['bg-dark', 'text-light']
                default:
                    return ['bg-primary', 'text-light']
            }
        },
        tabPillInactiveVariantClasses() {
            switch (this.$store.getters.colorSchemeName) {
                case 'light':
                    return ['bg-light', 'text-primary']
                case 'dark':
                    return ['bg-light', 'text-secondary']
                default:
                    return ['bg-light', 'text-primary']
            }
        },
        colorSchemeLinkClass() {
            switch (this.$store.getters.colorSchemeName) {
                case 'light':
                    return 'text-primary'
                case 'dark':
                    return 'text-warning'
                default:
                    return 'bg-light'
            }
        },
    },
    methods: {
        changeToNextColorScheme() {
            const currentColorSchemeName = this.$store.getters.colorSchemeName
            const keys = Object.keys(this.colorSchemes)
            let currentIndex = keys.indexOf(currentColorSchemeName)
            let nextIndex = (currentIndex + 1) % keys.length
            this.$store.commit('setColorSchemeName', keys[nextIndex])
        },
    },
}
