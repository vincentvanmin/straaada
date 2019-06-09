<template>
    <section id="inspiration" name="inspiration">
        <div class="titlebox">
            <img src="../assets/img/Dots.svg" alt="..." class="dots">
            <div class="title">
                <h3>Inspiration</h3>
                <p class="main-description">Based on the concept you just made, you are now ready to get some great ideas for your final design. Professional designers are helping you for free!</p>
            </div>
            <p class="big-number">02</p>
        </div>
        <div class="tablebox">
            <table>
                <tr class="tableheader">
                    <th>TOOL</th>
                    <th>Pricing</th>
                    <th>Difficulty</th>
                    <th>Rating</th>
                </tr>
                <tr class="tabledata" v-bind:key="tool.id" v-for="tool in tools">
                    <td class="tool">
                        <img v-bind:src="tool.logo" v-bind:alt="tool.name" class="logo">
                        <div class="namebox">
                            <h5 class="name">{{ tool.name }}</h5>
                            <p class="description">{{ tool.description }}</p>
                        </div>
                    </td>
                    <td class="pricing">
                        <p class="price">{{ tool.price }}</p>
                        <p class="extra">{{ tool.extra }}</p>
                    </td>
                    <td class="difficulty">
                        <p class="level">{{ tool.level }}</p>
                        <p class="learningcurve">{{ tool.learningcurve }}</p>
                    </td>
                    <td class="rating">
                        <p class="explenation">{{ tool.explenation }}</p>
                        <img v-bind:src="tool.ratingimg" alt="This is my personal rating for this tool" class="number">
                    </td>
                    <td class="open">
                        <img @click="toggle(tool.id)" :class="{ opened: opened.includes(tool.id) }" src="../assets/img/Chevron-Right.svg" alt="More info" class="chevron">
                    </td>
                    <td class="more" v-if="opened.includes(tool.id)">
                        <p class="info">{{ tool.info }}</p>
                        <a v-bind:href="tool.url" target="_blank" class="visitbutton">
                            <p>Visit website</p>
                            <div class="arrow"></div>
                        </a>
                    </td>
                </tr>
            </table>
        </div>
    </section>
</template>

<script>
export default {
    name: 'inspiration',

    components: {
        
    },

    data() {
        return {
            opened: [],
            tools: [
                {
                    id: 1,
                    logo: require('../assets/img/Dribbble.svg'),
                    name: "Dribbble",
                    description: "Designers community",
                    price: "Free",
                    extra: "Pro version available",
                    level: "Easy",
                    learningcurve: "Very low learning curve",
                    explenation: "For me, Dribbble offers you the best examples of all inspirational tools",
                    rating: 5,
                    ratingimg: require('../assets/img/Table-Rating-5.svg'),
                    info: "",
                    url: "https://dribbble.com/"
                },
                {
                    id: 2,
                    logo: require('../assets/img/Lapa-Ninja.svg'),
                    name: "Lapa Ninja",
                    description: "Landing page gallery",
                    price: "Free",
                    extra: "No charges",
                    level: "Easy",
                    learningcurve: "Low learning curve",
                    explenation: "Exploring all different subjects of landing pages makes this a powerful tool",
                    rating: 5,
                    ratingimg: require('../assets/img/Table-Rating-5.svg'),
                    info: "Lapa Ninja is a gallery featuring more than 1900 of the best landing page examples from all over the web. You can search for your own subject, or pick one of the many inspiration filter options in the navigation. Next to the gallery, Lapa Ninja also gives you a lot of courses available to be a better designer, make sure to check them out if you are interested!",
                    url: "https://www.lapa.ninja/"
                },
                {
                    id: 3,
                    logo: require('../assets/img/Behance.svg'),
                    name: "Behance",
                    description: "Discover graphical content",
                    price: "Free",
                    extra: "Premium via Adobe",
                    level: "Hard",
                    learningcurve: "Medium learning curve",
                    explenation: "I like the fact that you can also find graphical content designs agains UI Designs",
                    rating: 4,
                    ratingimg: require('../assets/img/Table-Rating-4.svg'),
                    info: "",
                    url: "https://www.behance.net/"
                },
                {
                    id: 4,
                    logo: require('../assets/img/UI-Movement.svg'),
                    name: "UI Movement",
                    description: "Designers community",
                    price: "Free",
                    extra: "Sponsorship possible",
                    level: "Easy",
                    learningcurve: "Low learning curve",
                    explenation: "All inspiration is brought to you by video content, a great positive!",
                    rating: 4,
                    ratingimg: require('../assets/img/Table-Rating-4.svg'),
                    info: "",
                    url: "https://uimovement.com/"
                },
                {
                    id: 5,
                    logo: require('../assets/img/Awwwards.svg'),
                    name: "Awwwards",
                    description: "Best site prize winners",
                    price: "Free",
                    extra: "Premium via Adobe",
                    level: "Medium",
                    learningcurve: "Medium learning curve",
                    explenation: "A good chance to outstand other designers if you are confident about your concept",
                    rating: 3,
                    ratingimg: require('../assets/img/Table-Rating-3.svg'),
                    info: "",
                    url: "https://www.awwwards.com/"
                }
            ]
        }
    },

    methods: {
        toggle(id) {
            const index = this.opened.indexOf(id);
            if (index > -1) {
                this.opened.splice(index, 1)
            } else {
                this.opened.push(id)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'Open Sans';
  src: url(../assets/fonts/OpenSans-Bold.ttf) format('truetype');
  font-weight: bolder;
}

#inspiration {
    background-color: $white-background;
    padding: 120px 0;

    .titlebox {
        width: 75%;
        margin: 0 auto;
        display: flex;
        justify-content: flex-end;
        flex-wrap: nowrap;
        position: relative;

        .big-number {
            flex-direction: row;
            width: 25%;
            font-family: 'Open Sans';
            font-weight: bolder;
            font-size: 200px;
            line-height: 200px;
            color: $light-grey;
            text-align: right;
        }

        .title {
            flex-direction: row;
            width: 60%;
            padding-right: 40px;
            padding-left: 110px;

            h3 {
                font-family: 'Nunito';
                font-weight: bold;
                font-size: 40px;
                line-height: 40px;
                color: $text-color;
                padding: 30px 0 35px 0;
                text-align: right;
            }

            .main-description {
                font-family: 'Open Sans';
                font-weight: normal;
                font-size: 1.1em;
                line-height: 24px;
                color: $text-color;
                text-align: right;
            }
        }

        .dots {
            position: absolute;
            width: 250px;
            left: 0;
            top: 30px;
        }
    }

    .tablebox {
        padding: 60px 0 30px 0;
        width: 75%;
        margin: 0 auto;

        table {
            border-spacing: 0;
            border-collapse: collapse;
            width: 100%;

            .tableheader {
                display: flex;
                justify-content: flex-start;
                padding: 15px 0;
                background-color: $light-grey;
                border-radius: 10px;

                th {
                    text-align: left;
                    color: $dark-grey;
                    font-family: 'Nunito';
                    font-weight: bold;
                    font-size: 1.25em;

                    &:first-child {
                        width: 29%;
                        padding-left: 20px;
                        color: $text-color;
                    }

                    &:nth-child(2), &:nth-child(3) {
                        width: 18%;
                    }

                    &:nth-child(4) {
                        width: 35%;
                    }
                }
            }

            .tabledata {
                border-bottom: solid 2px #F5F5F5;
                width: 100%;
                padding: 10px 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                margin: 0;
                position: relative;

                .tool {
                    width: 29%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    flex-wrap: nowrap;
                    padding-right: 1%;

                    .logo {
                        flex-direction: row;
                        width: 30%;
                    }

                    .namebox {
                        flex-direction: row;
                        width: 70%;
                        padding-left: 20px;
                        display: flex;
                        justify-content: space-around;
                        flex-wrap: wrap;

                        .name {
                            flex-direction: column;
                            width: 100%;
                            font-family: 'Nunito';
                            font-weight: bold;
                            font-size: 1.25em;
                            line-height: 30px;
                            color: $text-color;
                            margin: 0;
                        }

                        .description {
                            flex-direction: column;
                            width: 100%;
                            font-family: 'Open Sans';
                            font-weight: normal;
                            font-size: .9em;
                            line-height: 20px;
                            color: $dark-grey;
                        }
                    }
                }

                .pricing, .difficulty {
                    width: 18%;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    flex-wrap: wrap;
                    padding-right: 1%;

                    .price, .level {
                        flex-direction: column;
                        width: 100%;
                        font-family: 'Open Sans';
                        font-weight: normal;
                        font-size: 1.1em;
                        line-height: 30px;
                        color: $text-color;
                    }

                    .extra, .learningcurve {
                        flex-direction: column;
                        width: 100%;
                        font-family: 'Open Sans';
                        font-weight: normal;
                        font-size: .9em;
                        line-height: 20px;
                        color: $dark-grey;
                    }
                }

                .rating {
                    width: 30%;
                    display: flex;
                    justify-content: space-around;
                    align-items: bottom;
                    flex-wrap: wrap;
                    
                    .explenation {
                        font-family: 'Open Sans';
                        font-weight: normal;
                        font-size: .9em;
                        line-height: 20px;
                        color: $text-color;

                    }

                    .number {
                        position: absolute;
                        bottom: 0;
                        left: 65%;
                        width: 13%;
                    }
                }

                .open {
                    width: 5%;
                    padding-right: 10px;
                    display: flex;
                    justify-content: flex-end;

                    .chevron {
                        cursor: pointer;
                        transform: rotate(0deg);
                        transition: all .3s;

                        &:hover {
                            transform: scale(1.1);
                        }
                    }
                }

                .opened {
                    transform: rotate(90deg) !important;
                    transition: all .3s;
                }

                .more {
                    width: 100%;
                    padding: 10px 10px 0 10px;
                    display: flex;
                    justify-content: flex-end;
                    flex-wrap: wrap;
                    transition: all .5s;

                    .info {
                        flex-direction: row;
                        font-family: 'Open Sans';
                        font-weight: normal;
                        font-size: .9em;
                        line-height: 22px;
                        color: $text-color;
                        text-align: justify;
                        padding-bottom: 20px;
                    }

                    .visitbutton {
                        flex-direction: row;
                        width: 250px;
                        height: 40px;
                        display: flex;
                        flex-wrap: nowrap;
                        justify-content: center;
                        background-color: $action-color;
                        border: solid 3px $action-color;
                        border-radius: 20px;
                        text-decoration: none;
                        margin-bottom: 20px;

                        p {
                            flex-direction: row;
                            font-family: 'Open Sans';
                            font-weight: normal;
                            font-size: 20px;
                            line-height: 36px;
                            color: #ffffff;
                            padding: 0 20px 0 0;
                        }

                        .arrow {
                            flex-direction: row;
                            width: 25px;
                            margin: 7px 0;
                            height: 100%;
                            background-image: url(../assets/img/Button-Arrow.svg);
                            background-repeat: no-repeat;
                            background-size: contain;
                        }

                        &:hover {
                            background-color: $light-background;
                            transition: all .5s;

                            p {
                                color: $action-color;
                                transition: all .5s;
                            }

                            .arrow {
                                background-image: url(../assets/img/Button-Arrow-Active.svg);
                                transition: all .5s;
                                animation: hop 1s ease-out infinite;
                            }

                            @keyframes hop {
                                0% { transform: translateX(0px) }
                                40% { transform: translateX(5px) }
                                100% { transform: translateX(0px) }
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 1300px) {
        .titlebox {
            .title {
                width: 57%;
                padding-right: 30px;

                h3 {
                    padding-bottom: 15px;
                } 
            }
        }
    }

    @media (max-width: 1200px) {
        .titlebox {
            .title { 
                width: 55%;
                padding-right: 0; 
            }
            .big-number {
                width: 27%;
            }
        }
    }

    @media (max-width: 1100px) {
        .titlebox {
            .big-number {
                width: 30%;
            }
            
            .title {
                padding-right: 40px;
                width: 70%;
            }

            .dots {
                display: none;
            }
        }
    }
}
</style>
