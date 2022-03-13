<template>
    <b-container class="bv-example-row" fluid>
        <el-row :gutter="20">
            <el-col :span="24" align="left">
                <el-timeline>
                    <el-timeline-item :timestamp="$t('Degrees and certificates')" placement="top">
                        <template slot="dot">
                            <font-awesome-icon :icon="['fas', 'certificate']" size="lg" :style="{ color: '#ff0000' }" />
                        </template>
                        <b-card
                            :header-bg-variant="cardHeaderVariant"
                            header-text-variant="white"
                            :bg-variant="cardBodyVariant"
                            :text-variant="cardBodyTextVariant"
                            align="center">
                            <p class="pro-description">
                                {{ $t('After 4 years at the university, my overall score was 3.03/4.00') }}. 
                            </p>
                            <p class="pro-description">
                                {{ $t('Having a Good Bachelor\'s Degree was a success to me') }}. {{ $t('Because on my specialized subjects, the exam results were excellent') }}.
                            </p>
                            <p class="pro-description">
                                {{ $t('Beside, I could be proud of my 900/990 scores on the IIG TOEIC test at the time, enough to prove my listening and reading skills') }}.
                            </p>
                        </b-card>
                    </el-timeline-item>
                    <el-timeline-item :timestamp="$t('Skills and abilities')" placement="top">
                        <template slot="dot">
                            <font-awesome-icon :icon="['fas', 'star-half-alt']" size="lg" :style="{ color: '#ffc107' }" />
                        </template>
                        <b-card
                            :header-bg-variant="cardHeaderVariant"
                            header-text-variant="white"
                            :bg-variant="cardBodyVariant"
                            :text-variant="cardBodyTextVariant"
                            align="center">
                            <p class="pro-description">
                                {{ $t('I have a strong knowledge of PHP and JavaScript, as well as their popular frameworks Laravel and VueJS respectively') }}.
                            </p>
                            <p class="pro-description">
                                {{ $t('Even though I can take on the role of a fullstack developer, backend is my thing and I know I have much to learn in frontend development') }}.
                            </p>
                            <p class="pro-description">
                                {{ $t('Relational databases and SQL have always been my paradigm of choice when it comes to data storage and management') }}. {{ $t('I can use MySQL fluently') }}.
                            </p>
                            <p class="pro-description">
                                {{ $t('However, relational databases have their downsides and sometimes a NoSQL one can be the solution') }}. {{ $t('I have been learning MongoDB for a while') }}.
                            </p>
                            <p class="pro-description">
                                {{ $t('I have basic knowledge in Python and Java, just to name a few') }}.
                            </p>
                        </b-card>
                    </el-timeline-item>
                    <el-timeline-item :timestamp="$t('Mindset')" placement="top">
                        <template slot="dot">
                            <font-awesome-icon :icon="['fas', 'brain']" size="lg" :style="{ color: '#17a2b8' }" />
                        </template>
                        <b-card
                            :header-bg-variant="cardHeaderVariant"
                            header-text-variant="white"
                            :bg-variant="cardBodyVariant"
                            :text-variant="cardBodyTextVariant"
                            align="center">
                            <p class="pro-description">
                                {{ $t('Abstraction is the key') }}. {{ $t('I always try to figure out a common model whenever I have to deal with a few sets of entities and objects') }}. {{ $t('A suitable common model reduces the cost of solutions to the least, as well as making them scalable in shape and size') }}.
                            </p>
                            <p class="pro-description">
                                {{ $t('Therefore, a program being executable is not enough to me') }}. {{ $t('I often mind the level of abstraction at the early state of problem solving') }}.
                            </p>
                            <p class="pro-description">
                                {{ $t('The more I work with business logic, the more important abstraction becomes') }}. {{ $t('However, I also realize that sometimes the business logic strictly obeys what the human mind needs and abstraction becomes challenging or impossible') }}. {{ $t('In such cases, the easier are the better') }}.
                            </p>
                        </b-card>
                    </el-timeline-item>
                    <el-timeline-item :timestamp="$t('Achievements and products')" placement="top">
                        <template slot="dot">
                            <font-awesome-icon :icon="['fas', 'trophy']" size="lg" :style="{ color: '#28a745' }" />
                        </template>
                        <b-card
                            :header-bg-variant="cardHeaderVariant"
                            header-text-variant="white"
                            :bg-variant="cardBodyVariant"
                            :text-variant="cardBodyTextVariant"
                            align="center">
                            <p class="pro-description">
                                <strong>1. {{ $t('Foreign Language E-Learning (FLEL)') }}:</strong>
                                <br>
                                <a :href="flelGithubLink" :class="[ colorSchemeLinkClass ]">
                                    <font-awesome-icon :icon="['fab', 'github']" /> {{ flelGithubLink }}
                                </a>
                                <br>
                                <i>{{ $t('Powered by') }} Laravel, JQuery, Bootstrap 4 {{ $t('and') }} Font Awesome Icons</i>
                                <br>
                                {{ $t('This was my graduate thesis') }}. {{ $t('The idea behind it was to manage every kind of lessons, courses and tests using only a few model') }}. {{ $t('The result was a system that can be used by any kind of teachers, students, schools and organizations') }}. {{ $t('At the time my teachers did not seemed to understand that idea') }}. {{ $t('The code in this project was naive and nasty, but I have kept everything that way to remind me of what bad programming would look like') }}.
                            </p>
                            <p class="pro-description">
                                <strong>2. {{ $t('nBox') }}:</strong>
                                <br>
                                <a :href="nboxLink" :class="[ colorSchemeLinkClass ]">
                                    <font-awesome-icon :icon="['fas', 'link']" /> {{ nboxLink }}
                                </a>
                                <br>
                                {{ $t('This is the first project I could be proud of') }}. {{ $t('I have been working on it with my team in Digital Platform Center, Viettel Networks since I joined the company') }}. {{ $t('This project is a low-code platform, allowing organizations to digitalize their procedures and processes') }}. {{ $t('Much more should be done to make it perfect but we have gained several recognitions and honors') }}. {{ $t('It is not just a software, it is a mission we assign to ourselves to lead the upcoming digitalization trend') }}.
                            </p>
                            <p class="pro-description">
                                <strong>3. {{ $t('This project') }}:</strong>
                                <br>
                                <a :href="myProfileGithubLink" :class="[ colorSchemeLinkClass ]">
                                    <font-awesome-icon :icon="['fab', 'github']" /> {{ myProfileGithubLink }}
                                </a>
                                <br>
                                <i>{{ $t('Powered by') }} VueJS, Bootstrap Vue 4, Element UI {{ $t('and') }} Font Awesome Icons</i>
                                <br>
                                {{ $t('This is the first frontend project I have ever built on my own from scratch') }}. {{ $t('A good way to brings my own skills to the test') }}.
                            </p>
                        </b-card>
                    </el-timeline-item>
                </el-timeline>
            </el-col>
        </el-row>
    </b-container>
</template>

<script>
export default {
    name: 'Professions',
    metaInfo() {
        return {
            title: this.$t('Professions'), 
        }
    },
    data() {
        return {
            tabIndex: 0,
            flelGithubLink: 'https://github.com/blackkat98/flel',
            nboxLink: 'http://nbox.viettel.vn/',
            myProfileGithubLink: 'https://github.com/blackkat98/my_profile',
        }
    },
    mounted() {
        this.changeTimelineItemTimestampStyle()
    },
    watch: {
        "$store.getters.colorSchemeName": function() {
            this.changeTimelineItemTimestampStyle()
        },
    },
    methods: {
        tabVariantClasses(index) {
            if (this.tabIndex === index) {
                return this.tabPillActiveVariantClasses
            } else {
                return this.tabPillInactiveVariantClasses
            }
        },
        changeTimelineItemTimestampStyle() {
            let timelineItemTimestamps = document.getElementsByClassName('el-timeline-item__timestamp')
            
            for (let i = 0; i < timelineItemTimestamps.length; i++) {
                switch (this.$store.getters.colorSchemeName) {
                    case 'light':
                        timelineItemTimestamps[i].style.color = '#737373'
                        break
                    case 'dark':
                        timelineItemTimestamps[i].style.color = '#ffffff'
                        break
                    default:
                        timelineItemTimestamps[i].style.color = '#737373'
                        break
                }
            }
        },
    }
}
</script>

<style lang="scss" scope>
.bv-example-row {
    margin-top: 1rem;
}

.pro-description {
    text-align: justify;
    font-size: 14px;
}

.el-timeline {
    // padding: 5px 50px 0 50px;

    .el-timeline-item {
        .el-timeline-item__wrapper {
            .el-timeline-item__timestamp {
                font-size: 16px;
            }
        }

        .el-timeline-item__tail {
            display: none;
        }
    }
}

@media screen and (max-width: 450px) {
    .el-timeline {
        padding: 5px 5px 0 5px;
    }
}

@media screen and (min-width: 451px) and (max-width: 650px) {
    .el-timeline {
        padding: 5px 35px 0 35px;
    }
}

@media screen and (min-width: 651px) and (max-width: 850px) {
    .el-timeline {
        padding: 5px 100px 0 100px;
    }
}

@media screen and (min-width: 851px) {
    .el-timeline {
        padding: 5px 165px 0 165px;
    }
}
</style>
