<template>
    <section id="more" name="more">
        <div class="subtitle">
            <h4>More inspiration?</h4>
            <p class="description">Muzli will give you inspiration through your daily routines. Everytime you open a new tab, you will get inspired with the most fresh, slik and modern designs from the best designers from all over the world.</p>
        </div>
        <div class="extratool">
            <div id="muzli">
                <div id="muzliball" class="ball">
                    <div class="content">
                        <h5>Muzli</h5>
                        <p class="what">Design inspiration, news and trends, curated exactly to your tastes. Say hello to Muzli!</p>
                        <div class="logo">
                            <img src="../assets/img/Muzli.svg" alt="Muzli">
                        </div>
                    </div>
                </div>
                <div class="explenation">
                    <p>Discover the best web design inspiration, best websites, best logos, web trends, best mobiles sites and applications, minimalist websites, brutalist websites, innovative illustrations, design features, unique websites, photography projects, and visual art, as well as opinions and articles from design experts across the web and around the world.</p>
                    <a href="https://muz.li/" target="_blank" class="visitbutton">
                        <p>Visit website</p>
                        <div class="arrow"></div>
                    </a>
                </div>
            </div>
        </div>
        <div class="buttons">
            <a id="viewbutton" @click="showContent">View more</a>
            <a id="continuebutton" href="#prototyping">Continue</a>
        </div>
    </section>
</template>

<script>
export default {
    name: 'more',

    methods: {
        showContent: function() {
            document.getElementById('muzli').style.height = "auto";
            document.getElementById('muzliball').style.transform = "scale(1)";
            document.getElementById('viewbutton').style.display = "none";
        }
    }
}
</script>

<style lang="scss" scoped>
#more {
    // background-color: $light-background;
    padding: 100px 0;
    
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
            padding-top: 30px;
            width: 60%;
            margin: 0 auto;
            font-family: 'Open Sans';
            font-weight: normal;
            font-size: .9em;
            line-height: 20px;
            color: $text-color;
            text-align: center;
        }
    }

    .extratool {
        width: 75%;
        margin: 0 auto;

        #muzli {
            display: flex;
            justify-content: space-between;
            flex-wrap: nowrap;
            padding-top: 60px;
            height: 0;
            overflow: hidden;
            transition: all 1s;

            #muzliball {
                transform: scale(0);
                transition: all .5s;
                transition-delay: .1s;
            }

            .ball {
                flex-direction: row;
                width: 30%;
                background-color: $white-background;
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
                    overflow: hidden;

                    h5 {
                        font-family: 'Nunito';
                        font-weight: bold;
                        font-size: 1.5em;
                        line-height: 30px;
                        color: $text-color;
                        text-align: center;
                        padding-top: 10%;
                        margin: 0;
                    }

                    .what {
                        font-family: 'Open Sans';
                        font-weight: normal;
                        font-size: .9em;
                        line-height: 20px;
                        padding-top: 5%;
                        text-align: center;
                        width: 70%;
                        margin: 0 auto;
                    }

                    .logo {
                        margin: 10% auto 0 auto;
                        width: 30%;
                        bottom: 8%;
                        left: 50%;
                        transform: translateX(-50%);
                        position: absolute;

                        img {
                            width: 100%;
                        }
                    }
                }
            }

            .explenation {
                flex-direction: row;
                width: 70%;
                padding-left: 20%;
                display: flex;
                justify-content: flex-end;
                flex-wrap: wrap;
                align-items: center;

                > p {
                    text-align: justify;
                    text-align-last: right;
                    width: 100%;
                    font-family: 'Open Sans';
                    font-weight: normal;
                    font-size: 1.1em;
                    line-height: 24px;
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

    .buttons {
        padding-top: 40px;
        display: flex;
        justify-content: center;
        flex-wrap: nowrap;

        a {
            flex-direction: row;
            display: block;
            width: 18%;
            min-width: 180px;
            height: 40px;
            margin: 0 15px;
            text-decoration: none;
            font-family: 'Open Sans';
            font-weight: normal;
            font-size: 20px;
            line-height: 20px;
            text-align: center;
            padding: 7px 0;
            border: solid 3px $action-color;
            border-radius: 20px;
        }

        #viewbutton {
            background-color: $action-color;
            color: #ffffff;
            cursor: pointer;

            &:hover {
                background-color: $light-background;
                color: $action-color;
                transition: all .5s;
            }
        }

        #continuebutton {
            background-color: #ffffff;
            color: $action-color;

            &:hover {
                background-color: $action-color;
                color: #ffffff;
                transition: all .5s;
            }
        }
    }

    @media (max-width: 1200px) {
        .extratool #muzli {
            .ball {
                width: 35%;
            }

            .explenation {
                padding-left: 15%;
            }
        } 
    }

    @media (max-width: 1100px) {
        .extratool #muzli {
            .explenation {
                padding-left: 10%;
            }
        } 
    }

    @media (max-width: 960px) {
        .subtitle .description {
            width: 70%;
        }

        .extratool {
            width: 80%;
            justify-content: space-between;

            #muzli {
                flex-wrap: wrap;

                .ball {
                    width: 40%;
                    margin: 0 auto;
                }

                .explenation {
                    padding-top: 50px;
                    padding-left: 0;
                    width: 100%;
                    justify-content: flex-start;

                    p {
                        text-align-last: left;
                    }

                    .visitbutton {
                        margin-top: 20px;
                    }
                }
            }
        }
    }

    @media (max-width: 750px) {
        .extratool #muzli .ball {
            width: 50%;
        }
    }

    @media (max-width: 640px) {
        .extratool #muzli {
            .ball {
                width: 65%;
            }

            .explenation {
                display: none;
            }
        }
    }

    @media (max-width: 480px) {
        .extratool #muzli .ball {
            width: 85%;
        }

        .buttons {
            flex-wrap: wrap;

            a {
                width: 60%;
                margin: 0 auto;

                &:first-child {
                    margin-bottom: 20px;
                }
            }
        }
    }
}
</style>
