<template>
    <b-container class="bv-example-row" fluid>
        <el-row :gutter="20">
            <el-col :xl="6" :lg="6" :md="6" :sm="9" :xs="24" class="row-vertical-gap">
                <b-card
                    :header-bg-variant="cardHeaderVariant"
                    header-text-variant="white"
                    :bg-variant="cardBodyVariant"
                    :text-variant="cardBodyTextVariant"
                    align="center">
                    <template slot="header">
                        {{ $t('Who am I') }}?
                    </template>
                    <el-row :getter="20">
                        <el-col :xl="24" :lg="24" :md="24" :sm="24" :xs="9" align="center">
                            <img class="bio-avatar" src="@/assets/images/me.png" />
                            <h6>{{ fullName }}</h6>
                        </el-col>
                        <el-col :xl="24" :lg="24" :md="24" :sm="24" :xs="15">
                            <p class="bio-description">
                                <font-awesome-icon :icon="['fas', 'baby']" class="bio-icon" :style="{ 'color': '#ecbcb4' }" />
                                {{ $t('Born on') }} {{ dateOfBirth }} {{ $t(monthOfBirth) }}, {{ yearOfBirth }} {{ $t('in') }} {{ placeOfBirth }}, {{ $t('where I currently live') }}
                            </p>
                            <p class="bio-description">
                                <font-awesome-icon :icon="['fas', 'user-tag']" class="bio-icon" :style="{ 'color': '#00b33c' }" />
                                {{ $t('Not a cool kid in town') }}
                            </p>
                            <p class="bio-description">
                                <font-awesome-icon :icon="['fas', 'fingerprint']" class="bio-icon" :style="{ 'color': '#0044cc' }" />
                                {{ $t('Introvert') }}
                            </p>
                            <p class="bio-description">
                                <font-awesome-icon :icon="['fas', 'lightbulb']" class="bio-icon" :style="{ 'color': '#ffa366' }" />
                                {{ $t('Curious about the world and strange things') }}
                            </p>
                        </el-col>
                    </el-row>
                </b-card>
            </el-col>
            <el-col :xl="18" :lg="18" :md="18" :sm="15" :xs="24">
                <b-card
                    :header-bg-variant="cardHeaderVariant"
                    header-text-variant="white"
                    :bg-variant="cardBodyVariant"
                    :text-variant="cardBodyTextVariant"
                    align="center">
                    <template slot="header">
                        {{ $t('Something more') }}
                    </template>
                    <b-tabs v-model="somethingMoreTabIndex" card pills>
                        <b-tab :title="$t('Why Black Kat') + '?'" :title-link-class="somethingMoreTabPillVariantClasses(0)">
                            <el-row>
                                <el-col :span="8" align="left">
                                    {{ $t('I love cats') }}
                                </el-col>
                                <el-col :span="8" align="center">
                                    {{ $t('I love black') }}
                                </el-col>
                                <el-col :span="8" align="right">
                                    {{ $t('I got inspiration from the Cheshire Cat') }}
                                </el-col>
                            </el-row>
                            <el-row :gutter="50">
                                <el-col :span="8" align="center">
                                    <img class="bio-image" src="@/assets/images/cat.png" />
                                </el-col>
                                <el-col :span="8" align="center">
                                    <img class="bio-image" src="@/assets/images/solid_black.png" />
                                </el-col>
                                <el-col :span="8" align="center">
                                    <img class="bio-image" src="@/assets/images/cheshire_cat.png" />
                                </el-col>
                            </el-row>
                            <br>
                            <el-row>
                                <el-col :span="24" align="center">
                                    <h5>{{ $t('And so we have the logo you see at the top left corner') }}</h5>
                                </el-col>
                            </el-row>
                        </b-tab>
                        <b-tab :title="$t('Education')" :title-link-class="somethingMoreTabPillVariantClasses(1)">
                            <p class="bio-description">
                                <font-awesome-icon :icon="['fas', 'square-root-variable']" class="bio-icon" :style="{ 'color': '#00b33c' }" />
                                {{ $t('During the early years I was fond of mathematics and physics') }}.
                            </p>
                            <p class="bio-description">
                                <font-awesome-icon :icon="['fas', 'align-center']" class="bio-icon" :style="{ 'color': '#aa80ff' }" />
                                {{ $t('As I grew older, I found the beauty of poems and the process of making them') }}.
                            </p>
                            <p class="bio-description">
                                <font-awesome-icon :icon="['fas', 'blog']" class="bio-icon" :style="{ 'color': '#ffa366' }" />
                                {{ $t('At some point, while using the internet, the idea of getting a job in web development came to me, though not so clear') }}.
                            </p>
                            <p class="bio-description">
                                <font-awesome-icon :icon="['fas', 'c']" class="bio-icon" :style="{ 'color': '#a020f0' }" />
                                {{ $t('Like all other programming student, my first programming language I was taught at the university was C') }},
                            </p>
                            <p class="bio-description">
                                <font-awesome-icon :icon="['fab', 'html5']" class="bio-icon" :style="{ 'color': '#f16529' }" />
                                <font-awesome-icon :icon="['fab', 'css3']" class="bio-icon" :style="{ 'color': '#264de4' }" />
                                <font-awesome-icon :icon="['fab', 'js-square']" class="bio-icon" :style="{ 'color': '#000000' }" /> <!-- #f0db4f -->
                                {{ $t('even though I had taught myself HTML, CSS and JS at high school') }}.
                            </p>
                            <p class="bio-description">
                                <font-awesome-icon :icon="['fab', 'java']" class="bio-icon" :style="{ 'color': '#f89820' }" />
                                {{ $t('C and C++ were hard, and their memory management methods could easily make anyone shoots himself in the foot') }}, {{ $t('therefore I tried Java next') }}.
                            </p>
                            <p class="bio-description">
                                <font-awesome-icon :icon="['fab', 'php']" class="bio-icon" :style="{ 'color': '#474a8a' }" />
                                <font-awesome-icon :icon="['fab', 'laravel']" class="bio-icon" :style="{ 'color': '#fb503b' }" />
                                {{ $t('During the third year, I was thrown into PHP') }}. {{ $t('Without even reading the document first, I started coding Laravel with 3 others') }}.
                                <br>
                                {{ $t('At that point I still liked Java') }}. {{ $t('But gradually, I fell in love with PHP and for the first time determined that I was into web development') }}.
                            </p>
                            <p class="bio-description">
                                <font-awesome-icon :icon="['fas', 'star']" class="bio-icon" :style="{ 'color': '#ffcc00' }" />
                                {{ $t('A lot of things happened ever since') }}.
                                <br>
                                {{ $t('I gained for myself some knowledge in JS (mostly JQuery) after internship and probation at a few companies') }}.
                                <br>
                                {{ $t('I failed some interviews') }}.
                                <br>
                                {{ $t('Thankfully I never quit') }}.
                                <br>
                                {{ $t('Now (in 2022, the moment I am writing this), as a fulltime web developer, I can be confident in my coding skills') }}.
                            </p>
                            <p class="bio-description">
                                <font-awesome-icon :icon="['fab', 'laravel']" class="bio-icon" :style="{ 'color': '#fb503b' }" />
                                <font-awesome-icon :icon="['fab', 'vuejs']" class="bio-icon" :style="{ 'color': '#42b883' }" />
                                {{ $t('My current stack is Laravel for backend and VueJS for frontend development, with MySQL for storage and Redis for caching') }}.
                            </p>
                            <p class="bio-description">
                                <font-awesome-icon :icon="['fab', 'node-js']" class="bio-icon" :style="{ 'color': '#3c873a', 'background-color': '#ffffff' }" />
                                <font-awesome-icon :icon="['fab', 'android']" class="bio-icon" :style="{ 'color': '#3ddc84' }" />
                                <font-awesome-icon :icon="['fab', 'python']" class="bio-icon" :style="{ 'color': '#4584b6' }" />
                                {{ $t('Besides, I can create simple web applications using ExpressJS, as well as simple mobile device application on Android using Java') }}.
                                <br>
                                {{ $t('Sometimes I play with Python') }}.
                            </p>
                        </b-tab>
                        <b-tab :title="$t('Interests')" :title-link-class="somethingMoreTabPillVariantClasses(2)">
                            <p class="bio-description">
                                <font-awesome-icon :icon="['fas', 'walking']" class="bio-icon" :style="{ 'color': '#3beaf3' }" />
                                <font-awesome-icon :icon="['fas', 'motorcycle']" class="bio-icon" :style="{ 'color': '#c4150c' }" />
                                <!-- <font-awesome-icon :icon="['fas', 'running']" class="bio-icon" />
                                <font-awesome-icon :icon="['fas', 'street-view']" class="bio-icon" /> -->
                                <strong>{{ $t('Going around') }}</strong>
                                <br>
                                {{ $t('I love seeing houses, lampposts, trees and people passing by as I walk, or ride my motor bicycle, along the streets') }}.
                                <br>
                                {{ $t('For no reason, or maybe, sometimes, to refresh my mind') }}.
                            </p>
                            <p class="bio-description">
                                <font-awesome-icon :icon="['fas', 'music']" class="bio-icon" :style="{ 'color': '#0275d8' }" />
                                <font-awesome-icon :icon="['fas', 'compact-disc']" class="bio-icon" :style="{ 'color': '#000000' }" />
                                <!-- <font-awesome-icon :icon="['fas', 'icons']" class="bio-icon" />
                                <font-awesome-icon :icon="['fas', 'play-circle']" class="bio-icon" /> -->
                                <strong>{{ $t('Music') }}</strong>
                                <br>
                                {{ $t('Yeah, a lot of music') }}.
                                <br>
                                {{ $t('To start a day, to chill out in the middle of the day, or to end it with some rhythms') }}.
                            </p>
                            <p class="bio-description">
                                <font-awesome-icon :icon="['fas', 'book-open']" class="bio-icon" :style="{ 'color': '#5bc0de' }" />
                                <font-awesome-icon :icon="['fas', 'theater-masks']" class="bio-icon" :style="{ 'color': '#292b2c' }" />
                                <!-- <font-awesome-icon :icon="['fas', 'book']" class="bio-icon" />
                                <font-awesome-icon :icon="['fas', 'align-center']" class="bio-icon" /> -->
                                <strong>{{ $t('Literature and poetry') }}</strong>
                                <br>
                                {{ $t('People say they can bring anyone to worlds he has never imagined') }}.
                                <br>
                                {{ $t('To me, every rhyme I read or compose brings me to my own self') }}.
                            </p>
                            <p class="bio-description">
                                <font-awesome-icon :icon="['fas', 'calculator']" class="bio-icon" :style="{ 'color': '#595959' }" />
                                <font-awesome-icon :icon="['fas', 'wave-square']" class="bio-icon" :style="{ 'color': '#b3b300' }" />
                                <!-- <font-awesome-icon :icon="['fas', 'divide']" class="bio-icon" />
                                <font-awesome-icon :icon="['fas', 'infinity']" class="bio-icon" /> -->
                                <strong>{{ $t('Science') }}</strong>
                                <br>
                                {{ $t('I am curious about how the world works') }}.
                                <br>
                                {{ $t('Fascinating facts and theories have amazed me ever since I was a little kid') }}.
                            </p>
                            <p class="bio-description">
                                <font-awesome-icon :icon="['fab', 'steam']" class="bio-icon" :style="{ 'color': '#171a21' }" />
                                <font-awesome-icon :icon="['fas', 'headset']" class="bio-icon" :style="{ 'color': '#738adb' }" />
                                <!-- <font-awesome-icon :icon="['fas', 'mouse']" class="bio-icon" />
                                <font-awesome-icon :icon="['fas', 'keyboard']" class="bio-icon" /> -->
                                <strong>{{ $t('Video games') }}</strong>
                                <br>
                                {{ $t('First-person shooter games are my favorite') }}.
                                <br>
                                {{ $t('The only kind I want to play whenever I touch my computer') }}.
                            </p>
                            <p class="bio-description">
                                <font-awesome-icon :icon="['fas', 'desktop']" class="bio-icon" :style="{ 'color': '#aaa9ad' }" />
                                <font-awesome-icon :icon="['fas', 'laptop-code']" class="bio-icon" :style="{ 'color': '#008000' }" />
                                <!-- <font-awesome-icon :icon="['fas', 'window-maximize']" class="bio-icon" />
                                <font-awesome-icon :icon="['fas', 'save']" class="bio-icon" /> -->
                                <strong>{{ $t('Computer stuffs') }}</strong>
                                <br>
                                {{ $t('Adobe After Effects, Powerpoint Animations, Aegisub, etc') }}.
                                <br>
                                {{ $t('It is hard to say that I am a Pro but I know a little about each') }}.
                            </p>
                            <p class="bio-description">
                                <font-awesome-icon :icon="['fab', 'youtube']" class="bio-icon" :style="{ 'color': '#ff0000' }" />
                                <font-awesome-icon :icon="['fab', 'twitch']" class="bio-icon" :style="{ 'color': '#6441a4' }" />
                                <!-- <font-awesome-icon :icon="['fab', 'facebook']" class="bio-icon" />
                                <font-awesome-icon :icon="['fab', 'tiktok']" class="bio-icon" /> -->
                                <strong>{{ $t('Video sharing and streaming services') }}</strong>
                                <br>
                                {{ $t('Mostly Youtube, actually') }}.
                                <br>
                                {{ $t('Who does not watch those things these days') }}?
                            </p>
                            <p class="bio-description">
                                <font-awesome-icon :icon="['fas', 'chess']" class="bio-icon" :style="{ 'color': '#000000' }" />
                                <font-awesome-icon :icon="['fas', 'dice-d6']" class="bio-icon" :style="{ 'color': '#993300' }" />
                                <!-- <font-awesome-icon :icon="['fas', 'puzzle-piece']" class="bio-icon" />
                                <font-awesome-icon :icon="['fas', 'dice-d20']" class="bio-icon" /> -->
                                <strong>{{ $t('Board games') }}</strong>
                                <br>
                                {{ $t('I used to play a lot of board games with my friends') }}.
                                <br>
                                {{ $t('Now I only play Chess and Chinese Chess') }}.
                            </p>
                        </b-tab>
                        <b-tab :title="$t('Points of view')" :title-link-class="somethingMoreTabPillVariantClasses(3)">
                            <p class="bio-description">
                                <font-awesome-icon :icon="['far', 'eye']" class="bio-icon" :style="{ 'color': '#000000' }" />
                                {{ $t('This world is cruel and unfair') }}. {{ $t('Enough for some people to feel life is meaningless after all') }}. {{ $t('That is why we have to seek our own world in it') }}. {{ $t('Trying to make every moment of ours memorable') }}.
                            </p>
                            <p class="bio-description">
                                <font-awesome-icon :icon="['fas', 'comments']" class="bio-icon" :style="{ 'color': '#5bc0de' }" />
                                {{ $t('Words are powerful') }}. {{ $t('A nice word can make someone smile') }}. {{ $t('A misused one can ruin their day') }}. {{ $t('So choose wisely') }}.
                            </p>
                            <p class="bio-description">
                                <font-awesome-icon :icon="['fas', 'heart']" class="bio-icon" :style="{ 'color': '#ff0000' }" />
                                {{ $t('To love is to give') }}.
                            </p>
                            <p class="bio-description">
                                <font-awesome-icon :icon="['fas', 'bullseye']" class="bio-icon" :style="{ 'color': '#0033cc' }" />
                                {{ $t('I like being settled and at peace') }}. {{ $t('I try to make every day better, or at least feel better') }}.
                            </p>
                            <p class="bio-description">
                                <font-awesome-icon :icon="['fas', 'hourglass']" class="bio-icon" :style="{ 'color': '#39e600' }" />
                                {{ $t('I always try to be on time, or at least in time') }}.
                            </p>
                            <p class="bio-description">
                                <font-awesome-icon :icon="['fas', 'person-digging']" class="bio-icon" :style="{ 'color': '#ff9900' }" />
                                {{ $t('Commitments are paramount') }}. {{ $t('Work should be done, better late than never') }}.
                            </p>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </el-col>
        </el-row>
    </b-container>
</template>

<script>
export default {
    name: 'Bio',
    metaInfo() {
        return {
            title: this.$t('About me'),
        }
    },
    data() {
        return {
            fullName: 'Tống Hoàng Nam',
            dateOfBirth: '20',
            monthOfBirth: 'June',
            yearOfBirth: '1998',
            placeOfBirth: 'Hà Nội, Việt Nam',
            somethingMoreTabIndex: 0,
        }
    },
    methods: {
        somethingMoreTabPillVariantClasses(index) {
            if (this.somethingMoreTabIndex === index) {
                return this.tabPillActiveVariantClasses
            } else {
                return this.tabPillInactiveVariantClasses
            }
        },
    },
}
</script>

<style lang="scss" scope>
.bv-example-row {
    margin-top: 1rem;
}

.bio-avatar {
    width: 80%;
    height: 80%;
    border-radius: 50%;
    margin: 0 0 1rem 0;
}

.bio-description {
    text-align: justify;
    font-size: 14px;
}

.bio-icon {
    font-size: 20px;
    margin: 0 7px 0 0;
}

.bio-image {
    width: 96%;
    height: auto;
    border-radius: 5px;
}
</style>
