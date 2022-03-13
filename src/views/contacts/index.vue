<template>
    <b-container class="bv-example-row" fluid>
        <el-row :gutter="20">
            <el-col :span="24" align="center">
                <b-card
                    class="contact-card"
                    :header-bg-variant="cardHeaderVariant"
                    header-text-variant="white"
                    :bg-variant="cardBodyVariant"
                    :text-variant="cardBodyTextVariant"
                    :border-variant="cardBorderVariant"
                    align="center">
                    <h1>
                        <font-awesome-icon :icon="['fab', 'facebook']" :style="{ 'color': '#66b3ff' }" />
                    </h1>
                    <h5>
                        <a :href="fbLink" :class="[ colorSchemeLinkClass ]">
                            <font-awesome-icon :icon="['fas', 'link']" /> {{ fbName }}
                        </a>
                    </h5>
                </b-card>
                <b-card
                    class="contact-card"
                    :header-bg-variant="cardHeaderVariant"
                    header-text-variant="white"
                    :bg-variant="cardBodyVariant"
                    :text-variant="cardBodyTextVariant"
                    :border-variant="cardBorderVariant"
                    align="center">
                    <h1>
                        <font-awesome-icon :icon="['fab', 'google']" :style="{ 'color': '#db4437' }" />
                    </h1>
                    <h5>
                        <a :href="gmailNewMailLink" :class="[ colorSchemeLinkClass ]">
                            <font-awesome-icon :icon="['fas', 'link']" /> {{ gmailEmailAddress }}
                        </a>
                    </h5>
                </b-card>
            </el-col>
        </el-row>
    </b-container>
</template>

<script>
export default {
    name: 'Contacts',
    metaInfo() {
        return {
            title: this.$t('Contacts'),
        }
    },
    data() {
        return {
            fbName: 'Tống Hoàng Nam',
            fbLink: 'https://www.facebook.com/tonghoang.nam.9',
            gmailEmailAddress: 'nam.th.200698@gmail.com',
            gmailNewMailLink: 'https://mail.google.com/mail/u/0/#inbox?compose=new',
        }
    },
}
</script>

<style lang="scss" scoped>
.contact-card {
    margin-top: 1.5rem;
}
@media screen and (max-width: 450px) {
    .contact-card {
        width: 100%;
    }
}

@media screen and (min-width: 451px) and (max-width: 650px) {
    .contact-card {
        width: 90%;
    }
}

@media screen and (min-width: 651px) and (max-width: 850px) {
    .contact-card {
        width: 70%;
    }
}

@media screen and (min-width: 851px) {
    .contact-card {
        width: 50%;
    }
}
</style>
