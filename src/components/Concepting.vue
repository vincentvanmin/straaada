<template>
    <section id="concepting" name="concepting">
        <div class="titlebox">
            <p class="big-number">01</p>
            <div class="title">
                <h3>Concepting</h3>
                <p class="main-description">Take your time to think about the basics! Which content is really necessary? Are you able to reach out to your target audience?</p>
            </div>
            <img src="../assets/img/Dots.svg" alt="..." class="dots">
        </div>
        <div class="option">
            <div class="subtitle">
                <h4>Go old school</h4>
            </div>
            <div class="concept">
                <div class="left">
                    <div data-aos="fade-right" class="wireframingvideo">
                        <iframe width="560" height="349" src="https://www.youtube.com/embed/PmmQjLqJQlY" frameborder="0" allowfullscreen title="HowToWireframe"></iframe>
                    </div>
                </div>
                <div class="right">
                    <div class="counter">
                        <img class="wireframing-1" src="../assets/img/Wireframing-1.svg" alt="Step 1">
                        <img class="wireframing-2" src="../assets/img/Wireframing-2.svg" alt="Step 2">
                        <img class="wireframing-3" src="../assets/img/Wireframing-3.svg" alt="Step 3">
                        <div class="line"></div>
                    </div>
                    <div class="steps">
                        <div id="step1" class="step">
                            <p class="what">Take paper / whiteboard</p>
                            <p class="how">Drawing by hand feels really natural, make sure to give it a try!</p>
                        </div>
                        <div id="step2" class="step">
                            <p class="what">Draw your website</p>
                            <p class="how">How do you think your site should look like? Lets start sketching!</p>
                        </div>
                        <div id="step3" class="step">
                            <p class="what">Start explaining (Extra - UX)</p>
                            <p class="how">Describe why you put the content on a specific place on your site.</p>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
        <div class="option">
            <div class="subtitle">
                <h4>Go digital</h4>
            </div>
            <div class="concept">
                <div class="left">
                    <div data-aos="fade-right" class="wireframingvideo">
                        <iframe width="560" height="349" src="https://www.youtube.com/embed/zd65qDvLZF0" frameborder="0" allowfullscreen title="HowToUseFreehand"></iframe>
                    </div>
                    <a href="#" target="_blank" class="visitbuttonmobile">
                        <p>Visit website</p>
                        <div class="arrow"></div>
                    </a>
                </div>
                <div class="right">
                    <p class="name">Invision Freehand</p>
                    <p class="description">A wonderful web-based application to help you bringing your idea to life! Collaborate with your collegues or friends and present your work easy.</p>
                    <div class="icons">
                        <div class="icon">
                            <img src="../assets/img/Freehand-1.svg" alt="Draw by hand">
                            <div class="point">
                                <p>Draw by hand</p>
                            </div>
                        </div>
                        <div class="icon">
                            <img src="../assets/img/Freehand-2.svg" alt="Add text">
                            <div class="point">
                                <p>Add text</p>
                            </div>
                        </div>
                        <div class="icon">
                            <img src="../assets/img/Freehand-3.svg" alt="Create wireframes">
                            <div class="point">
                                <p>Create wireframes</p>
                            </div>
                        </div>
                        <div class="icon">
                            <img src="../assets/img/Freehand-4.svg" alt="Prototype">
                            <div class="point">
                                <p>Prototype</p>
                            </div>
                        </div>
                    </div>
                    <a href="https://www.invisionapp.com/feature/freehand" target="_blank" class="visitbutton" rel="noreferrer noopener">
                        <p>Visit website</p>
                        <div class="arrow"></div>
                    </a>
                </div>
            </div>
        </div>
        <div class="more-tools">
            <div class="subtitle">
                <h4>Other tools?</h4>
                <p class="description">Below, you can find 3 more tools that can do the job easily, but I still recommend you to use Freehand</p>
            </div>
            <div class="balls">
                <div data-aos="fade-up" class="ball" v-bind:key="tool.id" v-for="tool in tools">
                    <div class="content">
                        <h5>{{tool.name}}</h5>
                        <p class="what">{{tool.description}}</p>
                        <div class="icons">
                            <img v-bind:src="tool.priceimg" v-bind:alt="tool.price">
                            <img v-bind:src="tool.levelimg" v-bind:alt="tool.level">
                            <img v-bind:src="tool.ratingimg" v-bind:alt="tool.rating">
                        </div>
                        <a v-bind:href="tool.url" target="_blank" class="visit-website-button" rel="noreferrer noopener">Visit website</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Concepting',

    components: {
        
    },

    data() {
        return {
            tools: [
                {
                    id: 1,
                    name: "Balsamiq",
                    description: "Wireframing tool",
                    price: "$89.00",
                    priceimg: require('../assets/img/Paid.svg'),
                    level: "Easy",
                    levelimg: require('../assets/img/Easy.svg'),
                    rating: 4,
                    ratingimg: require('../assets/img/Rating-4.svg'),
                    url: "https://balsamiq.com/wireframes/"
                },
                {
                    id: 2,
                    name: "Mockflow",
                    description: "Wireframing & design tool",
                    price: "Free",
                    priceimg: require('../assets/img/Free.svg'),
                    level: "Medium",
                    levelimg: require('../assets/img/Medium.svg'),
                    rating: 3,
                    ratingimg: require('../assets/img/Rating-3.svg'),
                    url: "https://www.mockflow.com/"
                },
                {
                    id: 3,
                    name: "Marvel",
                    description: "All-in-one solution",
                    price: "Free",
                    priceimg: require('../assets/img/Free.svg'),
                    level: "Hard",
                    levelimg: require('../assets/img/Hard.svg'),
                    rating: 4,
                    ratingimg: require('../assets/img/Rating-4.svg'),
                    url: "https://marvelapp.com/"
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'Open Sans';
  font-display: auto;
  src: url(../assets/fonts/OpenSans-Bold.ttf) format('truetype');
  font-weight: bolder;
}

#concepting {
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
            width: 61%;
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

    .option {
        width: 75%;
        margin: 0 auto;
        padding: 60px 0 20px 0;

        .subtitle {
            box-shadow: 1px 1px 8px rgba(77, 13, 85, 0.25);
            padding: 10px 0;

            h4 {
                font-family: 'Nunito';
                font-weight: normal;
                font-size: 1.5em;
                line-height: 30px;
                color: $text-color;
                text-align: center;
                margin-bottom: 0;
            }
        }

        .concept {
            padding-top: 60px;
            display: flex;
            justify-content: space-between;

            .left {
                flex-direction: row;
                width: 50%;
                align-self: center;

                .wireframingvideo {
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

            .right {
                flex-direction: row;
                width: 50%;
                padding-left: 50px;
                display: flex;
                justify-content: flex-end;
                flex-wrap: wrap;

                .counter {
                    flex-direction: row;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    max-width: 15%;
                    height: 100%;
                    padding: 5px 0;
                    position: relative;

                    img {
                        width: 100%;
                        z-index: 1;
                    }

                    .line {
                        position: absolute;
                        height: calc(100% - 10px);
                        width: calc(50% + 2px);
                        border-right: solid 4px $action-color;
                        z-index: 0;
                    }
                }

                .steps {
                    flex-direction: column;
                    width: 85%;
                    padding: 5px 0 5px 10%;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    
                    .step {
                        flex-direction: column;
                        width: 100%;
                        
                        .what {
                            font-family: 'Open Sans';
                            font-weight: bold;
                            font-size: 1.1em;
                            line-height: 30px;
                            color: $text-color;
                            margin-bottom: 2%;
                        }
                        .how {
                            font-family: 'Open Sans';
                            font-weight: normal;
                            font-size: .9em;
                            line-height: 20px;
                            color: $text-color;
                            text-align: justify;
                        }
                    }

                    #step3 .how {
                        margin-bottom: 0;
                    }
                }

                .name {
                    font-family: 'Open Sans';
                    font-weight: bold;
                    font-size: 1.5em;
                    line-height: 35px;
                    color: $text-color;
                    width: 100%;
                }

                .description {
                    font-family: 'Open Sans';
                    font-weight: normal;
                    font-size: .9em;
                    line-height: 20px;
                    color: $text-color;
                    padding-top: 15px;
                    width: 100%;
                    text-align: justify;
                }

                .icons {
                    padding: 30px 0 20px 0;
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;

                    .icon {
                        flex-direction: row;
                        width: 25%;
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        position: relative;

                        img {
                            flex-direction: column;
                            width: 40%;
                            height: 55%;
                            display: inline-block;
                            vertical-align: middle;
                            text-align: center;
                            padding-bottom: 15px;
                        }

                        .point {
                            flex-direction: column;
                            width: 100%;
                            height: 40px;
                            position: relative;

                            p {
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                                margin: 0 auto;
                                text-align: center;
                                font-family: 'Open Sans';
                                font-weight: normal;
                                font-size: .9em;
                                color: $text-color;
                                line-height: 20px;
                            }
                        }
                    }
                }

                .visitbutton {
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
            }
        }
    }
    .more-tools {
        padding: 80px 0 30px 0;
        width: 75%;
        margin: 0 auto;

        .subtitle {
            padding-bottom: 60px;

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
                width: 50%;
                margin: 0 auto;
                padding-top: 20px;
            }
        }

        .balls {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            width: 100%;

            .ball {
                flex-direction: row;
                width: 28%;
                background-color: $light-background;
                border-radius: 50%;
                box-shadow: 0px 0px 5px rgba(77, 13, 85, 0.20);
                position: relative;

                &:after {
                    content: "";
                    display: block;
                    padding-bottom: 100%;
                }

                .content {
                    position: absolute;
                    width: 100%;
                    height: 100%;

                    h5 {
                        font-family: 'Nunito';
                        font-weight: bold;
                        font-size: 1.5em;
                        line-height: 30px;
                        color: $text-color;
                        text-align: center;
                        padding-top: 10%;
                    }

                    .what {
                        font-family: 'Open Sans';
                        font-weight: normal;
                        font-size: .9em;
                        line-height: 20px;
                        padding-top: 2.5%;
                        text-align: center;
                    }

                    .icons {
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: nowrap;
                        width: 100%;
                        padding: 10% 10% 12% 10%;

                        img {
                            flex-direction: row;
                            width: 30%;
                            max-height: 40px;
                        }
                    }

                    .visit-website-button {
                        display: block;
                        margin: 0 auto;
                        width: 60%;
                        height: 40px;
                        background-color: $action-color;
                        border: solid 3px $action-color;
                        border-radius: 20px;
                        text-decoration: none;
                        font-family: 'Open Sans';
                        font-weight: normal;
                        font-size: 1.1em;
                        line-height: 20px;
                        padding: 7px 0;
                        color: #ffffff;
                        text-align: center;

                        &:hover {
                            background-color: $light-background;
                            color: $action-color;
                            transition: all .5s;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 1300px) {
        .more-tools .balls .ball .content {
            .what {padding-top: 2%;}
            .icons {padding: 8% 10% 8% 10%;}
        }
    }

    @media (max-width: 1200px) {
        .titlebox .title {
            padding-left: 10px;
        }
        .more-tools .balls .ball {
            width: 30%;

            .content {
                .what {padding-top: 2%;}
                .icons {padding: 6% 10% 8% 10%;}
            }
        }

        .option {
            .subtitle {
                border-top: solid 3px $action-color;
                border-bottom: solid 3px $action-color;
            }

            .concept {
                .right {
                    .counter .line {
                        border-right: solid 3px $action-color;
                    }
                    
                    .visitbutton {
                        display: none;
                    }
                }

                .left .visitbuttonmobile {
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
            }
        }
    }

    @media (max-width: 1100px) {
        .titlebox {
            .big-number {
                width: 30%;
            }
            
            .title {
                width: calc(70% + 20px);
                padding-left: 20px;
                padding-right: 0;

                .main-description {
                    text-align: justify;
                }
            }

            .dots {
                display: none;
            }
        }

        .option .concept .right .steps .step {
            .what {
                margin-bottom: 0;
            }
            .how {
                margin-bottom: 2%;
            }
        }

        .more-tools .balls .ball .content {
            h5 {
                padding-top: 8%;
            }
            .what {
                padding-top: 2%;
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

        .option {
            width: 80%;
            .concept {
                flex-wrap: wrap;

                .left {
                    width: 100%;

                    .visitbuttonmobile {
                        display: none;
                    }
                }

                .right {
                    width: 100%;
                    padding: 50px 0 0 0;
                    justify-content: space-between;
                    min-height: 280px;

                    .counter {
                        img {
                            width: 80%;
                        }

                        .line {
                            width: calc(40% + 2px);
                        }
                    }

                    .steps {
                        padding-left: 20px;
                    }

                    .description {
                        padding-bottom: 20px;
                    }

                    .icons {
                        padding-bottom: 40px;
                    }

                    .visitbutton {
                        display: flex;
                    }
                }
            }
        }

        .more-tools {
            width: 80%;

            .subtitle .description {
                width: 70%;
            }

            .balls {
                flex-wrap: wrap;
                justify-content: space-between;

                .ball {
                    width: 45%;

                    .content {
                        h5 {
                            padding-top: 12%;
                        }

                        .icons {
                            padding: 10% 10% 12% 10%;

                            @media (max-width: 750px) {
                                padding: 6% 10% 8% 10%;
                            }
                        }
                    }

                    &:last-child {
                        margin: 0 auto;
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
                width: 20%;
            }

            .title {
                width: 80%;
                
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

        .more-tools {
            display: none;
        }
    }

    @media (max-width: 480px) {
        .titlebox {
            .big-number {
                width: 30%;
                font-size: 15vw;
            }

            .title {
                width: 70%;

                h3 {
                    font-size: 2em;
                }
            }
        }

        .option .concept {
            .right {
                .counter {
                    max-width: 20%;
                }

                .steps {
                    width: 80%;
                }

                .icons .icon {
                    width: 50%;
                    padding-bottom: 15px;

                    img {
                        width: 35%;
                    }
                }

                .visitbutton {
                    margin: 0 auto;
                }
            }
        }
    }

    @media (max-width: 350px) {
        .titlebox .title {
            padding-left: 0;
        }

        .option .concept .right {
            .counter {
                display: none;
            }

            .steps {
                width: 100%;
                padding-left: 0;
            }
        }
    }
}
</style>
