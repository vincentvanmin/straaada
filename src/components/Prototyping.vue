<template>
    <section id="prototyping" name="prototyping">
        <div class="titlebox">
            <p class="big-number">03</p>
            <div class="title">
                <h3>Prototyping</h3>
                <p class="main-description">You are completely ready to start with a final (Hi-Fi) user interface! Use all the inspiration you got to design a perfect website. You rock!</p>
            </div>
            <img src="../assets/img/Dots.svg" alt="..." class="dots">
        </div>
        <div class="process">
            <div class="balls">
                <div v-bind:id="ball.name" class="ball" v-bind:key="ball.id" v-for="ball in balls">
                    <div class="content">
                        <h4>{{ball.name}}</h4>
                        <div class="resources">
                            <div class="resource" v-bind:key="resource.id" v-for="resource in ball.resources">
                                <h5><a v-bind:href="resource.url" target="_blank">{{resource.name}}</a></h5>
                                <div class="properties">
                                    <img v-bind:src="resource.priceimg" v-bind:alt="resource.price" class="pricing">
                                    <img v-bind:src="resource.ratingimg" alt="My personal rating" class="rating">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="design">
            <div class="subtitle">
                <h4>Bring your idea to life</h4>
                <p class="description">It’s time to use your concept, inspiration and resources to build a stunning design! Choose your tool wisely, because it’s important you use the tool that fits you the most. Let’s go!</p>
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
                            <div class="videobox">
                                <div class="video">
                                    <iframe width="560" height="349" v-bind:src="tool.video" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div class="text">
                                <p class="info">{{ tool.info }}</p>
                                <a v-bind:href="tool.url" target="_blank" class="visitbutton">
                                    <p>Visit website</p>
                                    <div class="arrow"></div>
                                </a>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'prototyping',

    components: {
        
    },

    data() {
        return {
            balls: [
                {
                    id: 1,
                    name: "Photos",
                    resources: [
                        {
                            id: 1,
                            name: "Unsplash",
                            price: "Free",
                            priceimg: require('../assets/img/Free.svg'),
                            rating: 5,
                            ratingimg: require('../assets/img/Rating-5.svg'),
                            url: "https://unsplash.com/"
                        },
                        {
                            id: 2,
                            name: "Pexels",
                            price: "Free",
                            priceimg: require('../assets/img/Free.svg'),
                            rating: 5,
                            ratingimg: require('../assets/img/Rating-5.svg'),
                            url: "https://www.pexels.com/"
                        },
                        {
                            id: 3,
                            name: "Burst",
                            price: "Free",
                            priceimg: require('../assets/img/Free.svg'),
                            rating: 4,
                            ratingimg: require('../assets/img/Rating-4.svg'),
                            url: "https://burst.shopify.com/"
                        },
                        {
                            id: 4,
                            name: "Stockio",
                            price: "Free",
                            priceimg: require('../assets/img/Free.svg'),
                            rating: 4,
                            ratingimg: require('../assets/img/Rating-4.svg'),
                            url: "https://www.stockio.com/"
                        },
                        {
                            id: 5,
                            name: "Shutterstock",
                            price: "Paid",
                            priceimg: require('../assets/img/Paid.svg'),
                            rating: 4,
                            ratingimg: require('../assets/img/Rating-4.svg'),
                            url: "https://www.shutterstock.com/"
                        },
                        {
                            id: 6,
                            name: "iStockPhoto",
                            price: "Paid",
                            priceimg: require('../assets/img/Paid.svg'),
                            rating: 3,
                            ratingimg: require('../assets/img/Rating-3.svg'),
                            url: "https://www.istockphoto.com/"
                        },
                    ]
                },
                {
                    id: 2,
                    name: "Icons",
                    resources: [
                        {
                            id: 1,
                            name: "Flaticon",
                            price: "Free",
                            priceimg: require('../assets/img/Free.svg'),
                            rating: 5,
                            ratingimg: require('../assets/img/Rating-5.svg'),
                            url: "https://www.flaticon.com/"
                        },
                        {
                            id: 2,
                            name: "TheNounProject",
                            price: "Free",
                            priceimg: require('../assets/img/Free.svg'),
                            rating: 5,
                            ratingimg: require('../assets/img/Rating-5.svg'),
                            url: "https://thenounproject.com/"
                        },
                        {
                            id: 3,
                            name: "FontAwesome",
                            price: "Free",
                            priceimg: require('../assets/img/Free.svg'),
                            rating: 5,
                            ratingimg: require('../assets/img/Rating-5.svg'),
                            url: "https://fontawesome.com/"
                        },
                        {
                            id: 4,
                            name: "Remix Icon",
                            price: "Free",
                            priceimg: require('../assets/img/Free.svg'),
                            rating: 4,
                            ratingimg: require('../assets/img/Rating-4.svg'),
                            url: "https://remixicon.com/"
                        },
                        {
                            id: 5,
                            name: "Iconsmind",
                            price: "Paid",
                            priceimg: require('../assets/img/Paid.svg'),
                            rating: 4,
                            ratingimg: require('../assets/img/Rating-4.svg'),
                            url: "https://iconsmind.com/"
                        },
                        {
                            id: 6,
                            name: "Iconfinder",
                            price: "Paid",
                            priceimg: require('../assets/img/Paid.svg'),
                            rating: 3,
                            ratingimg: require('../assets/img/Rating-3.svg'),
                            url: "https://www.iconfinder.com/"
                        },
                    ]
                },
                {
                    id: 3,
                    name: "Illustrations",
                    resources: [
                        {
                            id: 1,
                            name: "iStock Illustrations",
                            price: "Paid",
                            priceimg: require('../assets/img/Paid.svg'),
                            rating: 5,
                            ratingimg: require('../assets/img/Rating-5.svg'),
                            url: "https://www.istockphoto.com/stockillustraties"
                        },
                        {
                            id: 2,
                            name: "Humaaans",
                            price: "Free",
                            priceimg: require('../assets/img/Free.svg'),
                            rating: 4,
                            ratingimg: require('../assets/img/Rating-4.svg'),
                            url: "https://www.humaaans.com/"
                        },
                        {
                            id: 3,
                            name: "PNG Tree",
                            price: "Free",
                            priceimg: require('../assets/img/Free.svg'),
                            rating: 4,
                            ratingimg: require('../assets/img/Rating-4.svg'),
                            url: "https://pngtree.com/"
                        },
                        {
                            id: 4,
                            name: "Drawkit",
                            price: "Free",
                            priceimg: require('../assets/img/Free.svg'),
                            rating: 4,
                            ratingimg: require('../assets/img/Rating-4.svg'),
                            url: "https://www.drawkit.io/"
                        },
                        {
                            id: 5,
                            name: "Manypixels",
                            price: "Paid",
                            priceimg: require('../assets/img/Paid.svg'),
                            rating: 3,
                            ratingimg: require('../assets/img/Rating-3.svg'),
                            url: "https://manypixels.co/"
                        },
                    ]
                },
                {
                    id: 4,
                    name: "Videos",
                    resources: [
                        {
                            id: 1,
                            name: "Mixkit",
                            price: "Free",
                            priceimg: require('../assets/img/Free.svg'),
                            rating: 5,
                            ratingimg: require('../assets/img/Rating-5.svg'),
                            url: "https://mixkit.co/"
                        },
                        {
                            id: 2,
                            name: "Pexels Videos",
                            price: "Free",
                            priceimg: require('../assets/img/Free.svg'),
                            rating: 5,
                            ratingimg: require('../assets/img/Rating-5.svg'),
                            url: "https://www.pexels.com/videos/"
                        },
                        {
                            id: 3,
                            name: "Videezy",
                            price: "Free",
                            priceimg: require('../assets/img/Free.svg'),
                            rating: 4,
                            ratingimg: require('../assets/img/Rating-4.svg'),
                            url: "https://www.videezy.com/"
                        },
                        {
                            id: 4,
                            name: "Coverr",
                            price: "Free",
                            priceimg: require('../assets/img/Free.svg'),
                            rating: 4,
                            ratingimg: require('../assets/img/Rating-4.svg'),
                            url: "https://coverr.co/"
                        },
                        {
                            id: 5,
                            name: "Storyblocks",
                            price: "Paid",
                            priceimg: require('../assets/img/Paid.svg'),
                            rating: 3,
                            ratingimg: require('../assets/img/Rating-3.svg'),
                            url: "https://www.storyblocks.com/"
                        },
                    ]
                },
                {
                    id: 5,
                    name: "Fonts",
                    resources: [
                        {
                            id: 1,
                            name: "Google Fonts",
                            price: "Free",
                            priceimg: require('../assets/img/Free.svg'),
                            rating: 5,
                            ratingimg: require('../assets/img/Rating-5.svg'),
                            url: "https://fonts.google.com/"
                        },
                        {
                            id: 2,
                            name: "Font Squirrel",
                            price: "Free",
                            priceimg: require('../assets/img/Free.svg'),
                            rating: 3,
                            ratingimg: require('../assets/img/Rating-3.svg'),
                            url: "https://www.fontsquirrel.com/"
                        },
                        {
                            id: 3,
                            name: "Dafont",
                            price: "Free",
                            priceimg: require('../assets/img/Free.svg'),
                            rating: 3,
                            ratingimg: require('../assets/img/Rating-3.svg'),
                            url: "https://www.dafont.com/"
                        },
                        {
                            id: 4,
                            name: "Adobe Fonts",
                            price: "Paid",
                            priceimg: require('../assets/img/Paid.svg'),
                            rating: 4,
                            ratingimg: require('../assets/img/Rating-5.svg'),
                            url: "https://fonts.adobe.com/"
                        },
                    ]
                }
            ],
            opened: [],
            tools: [
                {
                    id: 1,
                    logo: require('../assets/img/Sketch.svg'),
                    name: "Sketch (MacOS)",
                    description: "Product & UI design tool",
                    price: "$99,00 /y",
                    extra: "Free trial available",
                    level: "Medium",
                    learningcurve: "Medium learning curve",
                    explenation: "For me, Sketch offers you the best features of all design tools",
                    rating: 5,
                    ratingimg: require('../assets/img/Table-Rating-5.svg'),
                    video: "https://www.youtube.com/embed/w5-cQ6mGAYQ",
                    info: "",
                    url: "https://www.sketch.com/"
                },
                {
                    id: 2,
                    logo: require('../assets/img/XD.svg'),
                    name: "Adobe XD",
                    description: "All-in-one design tool",
                    price: "Free",
                    extra: "No charges",
                    level: "Easy",
                    learningcurve: "Low learning curve",
                    explenation: "Adobe created a wonderful tool, best alternative from Sketch if you’re not on Mac",
                    rating: 5,
                    ratingimg: require('../assets/img/Table-Rating-5.svg'),
                    video: "https://www.youtube.com/embed/w5-cQ6mGAYQ",
                    info: "",
                    url: "https://www.adobe.com/products/xd.html"
                },
                {
                    id: 3,
                    logo: require('../assets/img/Invision.svg'),
                    name: "Invision Studio",
                    description: "Product design platform",
                    price: "Free",
                    extra: "Enterprise v. available",
                    level: "Hard",
                    learningcurve: "High learning curve",
                    explenation: "Great tool with a lot of features (animations incl.), you will have to get used to it",
                    rating: 4,
                    ratingimg: require('../assets/img/Table-Rating-4.svg'),
                    video: "https://www.youtube.com/embed/w5-cQ6mGAYQ",
                    info: "Invision built an amazing platform, inspired by world’s best design teams. It’s an all-in-one application available for Mac and Windows. Turn your ideas into powerful, responsive and animated designs with the vecor-based capabilities. Collaborate with your team to finish the design and start building a prototype. I really recommend you to take a look!",
                    url: "https://www.invisionapp.com/studio"
                },
                {
                    id: 4,
                    logo: require('../assets/img/Figma.svg'),
                    name: "Figma",
                    description: "In-browser design app",
                    price: "$12.00 /m",
                    extra: "Free trial available",
                    level: "Easy",
                    learningcurve: "Low learning curve",
                    explenation: "Working with Figma is really enjoyable, but it leaves some features behind",
                    rating: 4,
                    ratingimg: require('../assets/img/Table-Rating-4.svg'),
                    video: "https://www.youtube.com/embed/w5-cQ6mGAYQ",
                    info: "",
                    url: "https://www.figma.com/"
                },
                {
                    id: 5,
                    logo: require('../assets/img/ProtoIO.svg'),
                    name: "ProtoIO",
                    description: "In-browser design app",
                    price: "$29.00 /m",
                    extra: "Free trial available",
                    level: "Easy",
                    learningcurve: "Low learning curve",
                    explenation: "Great tool to create fast and easy working prototypes",
                    rating: 4,
                    ratingimg: require('../assets/img/Table-Rating-4.svg'),
                    video: "https://www.youtube.com/embed/w5-cQ6mGAYQ",
                    info: "",
                    url: "https://proto.io/"
                },
                {
                    id: 6,
                    logo: require('../assets/img/Framer.svg'),
                    name: "Framer",
                    description: "Interactive design tool",
                    price: "$12.00 /m",
                    extra: "Free trial available",
                    level: "Medium",
                    learningcurve: "Medium learning curve",
                    explenation: "Framer is getting better and better, really worth a try!",
                    rating: 4,
                    ratingimg: require('../assets/img/Table-Rating-4.svg'),
                    video: "https://www.youtube.com/embed/w5-cQ6mGAYQ",
                    info: "",
                    url: "https://www.framer.com/"
                },
                {
                    id: 7,
                    logo: require('../assets/img/Marvel.svg'),
                    name: "Marvel App",
                    description: "All-in-one design tool",
                    price: "Free",
                    extra: "Paid versions available",
                    level: "Easy",
                    learningcurve: "Very low learning curve",
                    explenation: "Marvel offers a great and easy to use tool, but for me personally it’s too basic",
                    rating: 3,
                    ratingimg: require('../assets/img/Table-Rating-3.svg'),
                    video: "https://www.youtube.com/embed/w5-cQ6mGAYQ",
                    info: "",
                    url: "https://marvelapp.com/"
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

#prototyping {
    background-color: $white-background;
    padding: 120px 0;

    .titlebox {
        width: 75%;
        margin: 0 auto;
        display: flex;
        justify-content: flex-start;
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
            text-align: left;
        }

        .title {
            flex-direction: row;
            width: 60%;
            padding-right: 150px;

            h3 {
                font-family: 'Nunito';
                font-weight: bold;
                font-size: 40px;
                line-height: 40px;
                color: $text-color;
                padding: 30px 0 35px 0;
            }

            .main-description {
                font-family: 'Open Sans';
                font-weight: normal;
                font-size: 1.1em;
                line-height: 24px;
                color: $text-color;
            }
        }

        .dots {
            position: absolute;
            width: 250px;
            right: 0;
            top: 30px;
        }
    }

    .process {
        margin-top: 60px;
        width: 100%;
        min-height: 100%;
        background-image: url(../assets/img/Prototyping-Process.svg);
        background-repeat: no-repeat;
        background-size: cover;

        .balls {
            width: 75%;
            margin: 0 auto;
            position: relative;
            padding: 23% 0 14% 0;

            .ball {
                position: absolute;
                width: 36%;
                background-color: $white-background;
                border-radius: 50%;
                box-shadow: 0px 0px 5px rgba(77, 13, 85, 0.20);

                &:after {
                    content: "";
                    display: block;
                    padding-bottom: 100%;
                }

                .content {
                    position: absolute;
                    width: 100%;
                    height: 100%;

                    h4 {
                        font-family: 'Nunito';
                        font-weight: bold;
                        font-size: 1.5em;
                        line-height: 30px;
                        color: $text-color;
                        text-align: center;
                        padding-top: 10%;
                    }

                    .resources {
                        padding: 0 20% 10% 20%;
                        height: 75%;
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: wrap;

                        .resource {
                            flex-direction: row;
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            flex-wrap: nowrap;

                            h5 {
                                flex-direction: row;
                                width: 75%;

                                a {
                                    font-family: 'Open Sans';
                                    font-weight: normal;
                                    font-size: 1.1em;
                                    line-height: 24px;
                                    color: $text-color;
                                    text-decoration: none;

                                    &:hover {
                                        cursor: pointer;
                                        text-decoration: underline;
                                    }
                                }
                            }
                            .properties {
                                flex-direction: row;
                                width: 25%;
                                display: flex;
                                justify-content: flex-end;
                                flex-wrap: nowrap;

                                .pricing {
                                    flex-direction: row;
                                    width: 45%;
                                    padding-top: 2px;
                                    margin-right: 10%;
                                    max-height: 30px;
                                }
                                .rating {
                                    flex-direction: row;
                                    width: 45%;
                                    max-height: 30px;
                                }
                            }
                        }
                    }
                }
            }

            #Photos {
                position: relative !important;
            }

            #Icons {
                right: 0;
                top: 25%;
            }

            #Illustrations {
                left: 28%;
                top: 43%;
            }

            #Videos {
                position: relative !important;
                margin-top: 43%;
            }

            #Fonts {
                bottom: 7%;
                right: 12%;
            }
        }
    }

    .design {
        padding: 80px 0 30px 0;
        width: 75%;
        margin: 0 auto;

        .subtitle {
            h4 {
                font-family: 'Nunito';
                font-weight: bold;
                font-size: 1.5em;
                line-height: 30px;
                color: $text-color;
                text-align: center;
            }

            .description {
                font-family: 'Open Sans';
                font-weight: normal;
                font-size: .9em;
                line-height: 20px;
                color: $text-color;
                text-align: center;
                width: 75%;
                margin: 0 auto;
                padding-top: 20px;
            }
        }
    
        .tablebox {
            padding: 60px 0 30px 0;

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
                        padding: 10px;
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: nowrap;
                        transition: all .5s;

                        .videobox {
                            flex-direction: row;
                            width: 50%;

                            .video {
                                position: relative;
                                padding-bottom: 56.25%; /* 16:9 */
                                padding-top: 25px;

                                iframe {
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                        }

                        .text {
                            flex-direction: row;
                            width: 50%;
                            display: flex;
                            justify-content: flex-end;
                            flex-wrap: wrap;

                            .info {
                                flex-direction: row;
                                width: 85%;
                                font-family: 'Open Sans';
                                font-weight: normal;
                                font-size: .9em;
                                line-height: 22px;
                                color: $text-color;
                                text-align: justify;
                                padding-bottom: 20px;
                            }

                            .visitbutton {
                                align-self: flex-end;
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
        }
    }
}
</style>
