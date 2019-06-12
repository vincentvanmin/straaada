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
                <div data-aos="fade-up" data-aos-delay="100" v-bind:id="ball.name" class="ball" v-bind:key="ball.id" v-for="ball in balls">
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
                    <tr data-aos="fade-right" class="tabledata" v-bind:key="tool.id" v-for="tool in tools">
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
                            <img v-bind:src="tool.ratingimg" alt="This is my personal rating for this tool" v-bind:id="'rating-' + tool.id" class="number">
                        </td>
                        <td class="mobiledata">
                            <img v-bind:src="tool.priceimgMobile" v-bind:alt="tool.price" class="mobileprice">
                            <img v-bind:src="tool.levelimgMobile" v-bind:alt="tool.level" class="mobilelevel">
                            <img v-bind:src="tool.ratingimgMobile" alt="This is my personal rating for this tool" class="mobilerating">
                        </td>
                        <td class="open">
                            <img @click="toggle(tool.id)" :class="{ opened: opened.includes(tool.id) }" src="../assets/img/Chevron-Right.svg" alt="More info" class="chevron">
                        </td>
                        <td class="more" v-if="opened.includes(tool.id)">
                            <div class="videobox">
                                <div class="video">
                                    <iframe width="560" height="349" v-bind:src="tool.video" frameborder="0" allowfullscreen></iframe>
                                </div>
                                <a v-bind:href="tool.url" target="_blank" class="visitbuttonmobile">
                                    <p>Visit website</p>
                                    <div class="arrow"></div>
                                </a>
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
                            name: "The Noun Project",
                            price: "Free",
                            priceimg: require('../assets/img/Free.svg'),
                            rating: 5,
                            ratingimg: require('../assets/img/Rating-5.svg'),
                            url: "https://thenounproject.com/"
                        },
                        {
                            id: 3,
                            name: "Font Awesome",
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
                            url: "https://www.istockphoto.com/stock-illustrations"
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
                    priceimgMobile: require('../assets/img/Paid.svg'),
                    extra: "Free trial available",
                    level: "Medium",
                    levelimgMobile: require('../assets/img/Medium.svg'),
                    learningcurve: "Medium learning curve",
                    explenation: "For me, Sketch offers you the best features of all design tools",
                    rating: 5,
                    ratingimg: require('../assets/img/Table-Rating-5.svg'),
                    ratingimgMobile: require('../assets/img/Rating-5.svg'),
                    video: "https://www.youtube.com/embed/qywB0JHQeC4",
                    info: "Sketch for Mac is my favourite design software of all time! You can do web, product or software design all in one app. Sketch is easy to use and contains a lot of customizations because it's open source. Download plugins or check their well-explained learning documentation on the website. Watch this tutorial to get into the first steps!",
                    url: "https://www.sketch.com/"
                },
                {
                    id: 2,
                    logo: require('../assets/img/XD.svg'),
                    name: "Adobe XD",
                    description: "All-in-one design tool",
                    price: "Free",
                    priceimgMobile: require('../assets/img/Free.svg'),
                    extra: "No charges",
                    level: "Easy",
                    levelimgMobile: require('../assets/img/Easy.svg'),
                    learningcurve: "Low learning curve",
                    explenation: "Adobe created a wonderful tool, best alternative from Sketch if you’re not on Mac",
                    rating: 5,
                    ratingimg: require('../assets/img/Table-Rating-5.svg'),
                    ratingimgMobile: require('../assets/img/Rating-5.svg'),
                    video: "https://www.youtube.com/embed/JttI6YpmPGI",
                    info: "If you are not using a Mac (screw you), Adobe built a fantastic (free!) tool for you. Adobe XD (Experience Design) is a lightweight, easy to use design software to create your amazing interface design. With monthly updates, you're getting the newest functionalities all for free. Check it out now, watch the video for your first lesson.",
                    url: "https://www.adobe.com/products/xd.html"
                },
                {
                    id: 3,
                    logo: require('../assets/img/Invision.svg'),
                    name: "Invision Studio",
                    description: "Product design platform",
                    price: "Free",
                    priceimgMobile: require('../assets/img/Free.svg'),
                    extra: "Enterprise v. available",
                    level: "Hard",
                    levelimgMobile: require('../assets/img/Hard.svg'),
                    learningcurve: "High learning curve",
                    explenation: "Great tool with a lot of features (animations incl.), you will have to get used to it",
                    rating: 4,
                    ratingimg: require('../assets/img/Table-Rating-4.svg'),
                    ratingimgMobile: require('../assets/img/Rating-4.svg'),
                    video: "https://www.youtube.com/embed/v10t2azNaFs",
                    info: "Invision built an amazing platform, inspired by world’s best design teams. It’s an all-in-one application available for Mac and Windows. Turn your ideas into powerful, responsive and animated designs with the vecor-based capabilities. Collaborate with your team to finish the design and start building a prototype. I really recommend you to take a look!",
                    url: "https://www.invisionapp.com/studio"
                },
                {
                    id: 4,
                    logo: require('../assets/img/Figma.svg'),
                    name: "Figma",
                    description: "In-browser design app",
                    price: "Free",
                    priceimgMobile: require('../assets/img/Free.svg'),
                    extra: "Premium v. available",
                    level: "Easy",
                    levelimgMobile: require('../assets/img/Easy.svg'),
                    learningcurve: "Low learning curve",
                    explenation: "Working with Figma is really enjoyable, but it leaves some features behind",
                    rating: 4,
                    ratingimg: require('../assets/img/Table-Rating-4.svg'),
                    ratingimgMobile: require('../assets/img/Rating-4.svg'),
                    video: "https://www.youtube.com/embed/jk1T0CdLxwU",
                    info: "Did I just say 'In-browser design app'? Yes I did! Figma is a easy to use design application (/website) that runs all in your browser window. Also, it's completely free for individuals. Get yourself up and running in no-time and create beautiful wireframes, interfaces and prototypes! Watch the video where Jesse will take you through the first steps.",
                    url: "https://www.figma.com/"
                },
                {
                    id: 5,
                    logo: require('../assets/img/ProtoIO.svg'),
                    name: "ProtoIO",
                    description: "Interface design app",
                    price: "$29.00 /m",
                    priceimgMobile: require('../assets/img/Paid.svg'),
                    extra: "Free trial available",
                    level: "Easy",
                    levelimgMobile: require('../assets/img/Easy.svg'),
                    learningcurve: "Low learning curve",
                    explenation: "Great tool to create fast and easy working prototypes",
                    rating: 4,
                    ratingimg: require('../assets/img/Table-Rating-4.svg'),
                    ratingimgMobile: require('../assets/img/Rating-4.svg'),
                    video: "https://www.youtube.com/embed/9dtWRECqJmk",
                    info: "Proto IO isn't well known as a design application, but against creating great prototypes, you can acually create great designs aswell! Proto IO provides a 3 video tutorial to get you started with their software, I can recommend you watching it!",
                    url: "https://proto.io/"
                },
                {
                    id: 6,
                    logo: require('../assets/img/Framer.svg'),
                    name: "Framer",
                    description: "Interactive design tool",
                    price: "$12.00 /m",
                    priceimgMobile: require('../assets/img/Paid.svg'),
                    extra: "Free trial available",
                    level: "Medium",
                    levelimgMobile: require('../assets/img/Medium.svg'),
                    learningcurve: "Medium learning curve",
                    explenation: "Framer is getting better and better, really worth a try!",
                    rating: 4,
                    ratingimg: require('../assets/img/Table-Rating-4.svg'),
                    ratingimgMobile: require('../assets/img/Rating-4.svg'),
                    video: "https://www.youtube.com/embed/zAV6RIHswto",
                    info: "Framer? What's that? Framer isn't like every other design software. If you're a developer, Framer might be your tool of choice. Prototyping in Framer is taken to the next level, because you can use actual React JS components to build amazing animations and deliver an extraordinary experience. Watch Athanasia's video tutorials to get started!",
                    url: "https://www.framer.com/"
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
        background-size: 100vw;

        .balls {
            width: 75%;
            margin: 0 auto;
            position: relative;
            padding: 23% 0 14% 0;

            .ball {
                position: absolute;
                width: 40%;
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
                                margin: 0;
                                padding-right: 3%;

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
                top: 22%;
            }

            #Illustrations {
                left: 24%;
                top: 42%;
            }

            #Videos {
                position: relative !important;
                margin-top: 40%;
            }

            #Fonts {
                bottom: 8%;
                right: 7%;
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
                            left: 64.5%;
                            width: 13%;
                        }
                    }

                    .mobiledata {
                        display: none;
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

                                iframe {
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 100%;

                                    box-shadow: 1px 2px 8px rgba(77, 13, 85, 0.20);
                                }
                            }

                            .visitbuttonmobile {
                                display: none;
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
                                font-size: 1.1em;
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

    @media (max-width: 1300px) {
        .titlebox {
            .title {
                width: 62%;
                padding-left: 20px; 
            }
        }
    }

    @media (max-width: 1200px) {
        .titlebox {
            .title { 
                width: 60%;
                padding-left: 10px;

                h3 {
                    padding-bottom: 15px;
                }
            }
            .big-number {
                width: 30%;
            }
        }

        .process .balls {
            padding-top: 20%;

            .ball {
                width: 44%;

                .content .resources .resource h5 {
                    a {
                        font-size: 1em;
                    }
                }
            }

            #Icons {
                top: 20%;
            }

            #Illustrations {
                 left: 22%;
                 top: 39.5%;
            }

            #Videos {
                margin-top: 38%;
            }
        } 
    }

    @media (max-width: 1100px) {
        .titlebox {
            .big-number {
                width: 30%;
            }
            
            .title {
                width: calc(70% + 40px);
                padding-left: 40px;
                padding-right: 0;

                .main-description {
                    text-align: justify;
                }
            }

            .dots {
                display: none;
            }
        }

        .design .tablebox table .tabledata .more {
            .videobox .visitbuttonmobile {
                margin-top: 20px;
                width: 250px;
                height: 40px;
                display: flex;
                flex-wrap: nowrap;
                justify-content: center;
                align-self: flex-end;
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

            .text .visitbutton {
                display: none;
            }
        }
    }

    @media (max-width: 960px) {
        .titlebox {
            width: 80%;

            .big-number {
                width: 35%;

                @media (max-width: 800px) {
                    width: 40%;
                }
            }
        }

        .process {
            background-image: url(../assets/img/Prototyping-Process-Mobile.svg);

            .balls {
                width: 80%;

                .ball {
                    width: 48%;

                    .content {
                        h4 {
                            padding-top: 8%;
                            margin-bottom: 0;
                        }

                        .resources {
                            padding: 0 17% 10% 17%;

                            .resource {
                                h5 {
                                    width: 87%;

                                    a {
                                        font-size: .9em;
                                    }
                                } 

                                .properties {
                                    width: 13%;

                                    .pricing {
                                        width: 100%;
                                    }

                                    .rating {
                                        display: none;
                                    }
                                } 
                            }
                        }
                    }
                }

                #Photos, #Icons {
                    .content .resources .resource {
                        &:nth-child(3) {
                            display: none;
                        }

                        @media (max-width: 800px) {
                            &:nth-child(4) {
                                display: none;
                            }
                        }
                    }
                }

                #Icons {
                    top: 18%;
                }

                #Illustrations {
                    left: 19%;
                    top: 39.5%;

                    @media (max-width: 800px) {
                        .content .resources .resource {
                            &:nth-child(3) {
                                display: none;
                            }
                        }
                    }
                }

                #Videos {
                    margin-top: 50%;

                    @media (max-width: 800px) {
                        .content .resources .resource {
                            &:nth-child(3) {
                                display: none;
                            }
                        }
                    }
                }

                #Fonts {
                    right: 0;
                    bottom: 6%;
                }
            }
        } 

        .design {
            width: 80%;

            .tablebox {
                table {
                    .tableheader {
                        padding: 10px 0;
                        
                        th:first-child {
                            width: 40%;
                        }

                        th:nth-child(2), th:nth-child(3) {
                            width: 27.5%;
                        }

                        th:last-child {
                            display: none;
                        }
                    }

                    .tabledata {
                        .tool {
                            width: 40%;
                        }
                        .pricing, .difficulty {
                            width: 27.5%;
                        }
                        .rating {
                            display: none;
                        }

                        @media (max-width: 800px) {
                            .more {
                                flex-wrap: wrap;

                                .videobox {
                                    width: 100%;

                                    .visitbuttonmobile {
                                        display: none;
                                    }
                                }

                                .text {
                                    width: 100%;
                                    padding-top: 50px;
                                    padding-left: 0;
                                    justify-content: flex-start;

                                    .info {
                                        width: 100%;
                                    }

                                    .visitbutton {
                                        display: flex;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 640px) {
        .titlebox {
            position: relative;
            padding-bottom: 20%;

            .big-number {
                font-size: 80px;
                line-height: 80px;
                width: 25%;
            }

            .title {
                width: 75%;
                
                h3 {
                    margin: 0;
                }

                .main-description {
                    position: absolute;
                    left: 0;
                    top: 55%;
                    width: 100%;
                }
            }
        }

        .process {
            display: none;
        }

        .design {
            padding: 0;

            .subtitle {
                display: none;
            }

            .tablebox table .tabledata .tool {
                .logo {
                    display: none;
                }

                .namebox {
                    width: 100%;
                    padding-left: 10px;
                }
            }
        }
    }

    @media (max-width: 480px) {
        .titlebox {
            padding-bottom: 40%;

            .big-number {
                width: 30%;
                font-size: 15vw;
                line-height: unset;
            }

            .title {
                width: 70%;

                h3 {
                    font-size: 2em;
                }

                .main-description {
                    top: 45%;
                }
            }
        }

        .design .tablebox table {
            .tableheader {
                th:first-child {
                    width: 100%;
                }

                th:nth-child(2), th:nth-child(3) {
                    display: none;
                }
            }

            .tabledata {
                .tool {
                    width: 60%;
                }
                .pricing, .difficulty {
                    display: none;
                }

                .mobiledata {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: nowrap;
                    width: 30%;
                    padding-right: 3%;

                    img {
                        width: 25%;
                        max-height: 40px;
                    }

                    .mobilelevel {
                        padding: 0 4%;
                    }
                }

                .open {
                    width: 10%;
                }
            }
        } 
    }

    @media (max-width: 350px) {
        .titlebox .title {
            padding-left: 0;
        }
    }
}
</style>
