<template>
    <b-container class="bv-example-row" fluid>
        <el-row>
            <el-col :span="24" align="center">
                <img class="home-logo" src="@/assets/logos/logo_transparent.png" />
            </el-col>
            <el-col :span="24" align="center">
                <div class="home-letter">
                    <h2>
                        {{ $t('Hi there') }},
                    </h2>
                    <p>
                        {{ $t('Black Kat here') }}.
                    </p>
                    <p>
                        {{ $t('I am a web developer') }}. {{ $t('This project tells you a little about me') }}. {{ $t('I hope you like this, and like me as well') }}.
                    </p>
                </div>
            </el-col>
        </el-row>
    </b-container>
</template>

<script>
export default {
    name: 'Home',
    metaInfo() {
        return {
            title: this.$t('Welcome to Black Kat resumé page'),
        }
    },
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss" scoped>
.home-logo {
    animation-name: spin;
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

.home-letter {
    p {
        text-align: justify;
        font-size: 18px;
    }
}

@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}

@media screen and (max-width: 450px) {
    .home-logo {
        width: 90%;
    }
    .home-letter {
        width: 90%;
    }
}

@media screen and (min-width: 451px) and (max-width: 650px) {
    .home-logo {
        width: 70%;
    }
    .home-letter {
        width: 80%;
    }
}

@media screen and (min-width: 651px) and (max-width: 850px) {
    .home-logo {
        width: 50%;
    }
    .home-letter {
        width: 70%;
    }
}

@media screen and (min-width: 851px) {
    .home-logo {
        width: 30%;
    }
    .home-letter {
        width: 50%;
    }
}
</style>
