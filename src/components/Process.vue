<template>
    <section id="process">
        <div class="boxes">
            <div class="box">
                <div class="step">
                    <h3>Concepting</h3>
                    <p>Building your site on a great concept is really important, that’s why we will draw the structure of your website first! This step will assure a great user experience.</p>
                    <img data-aos="fade-up" data-aos-offset="-100" src="../assets/img/Process-Concepting-IMG.svg" alt="How to build your concept">
                </div>
                <a class="more" href="#concepting">
                    <img class="more-ball" src="../assets/img/More-Ball.svg" alt="Go to Concepting">
                    <img class="more-chevron" src="../assets/img/More-Chevron.svg" alt="Go to Concepting">

                    <img class="more-ball-active" src="../assets/img/More-Ball-Active.svg" alt="Go to Concepting">
                    <img class="more-chevron-active" src="../assets/img/More-Chevron-Active.svg" alt="Go to Concepting">
                </a> 
            </div>
            <div class="box">
                <div class="step">
                    <h3>Inspiration</h3>
                    <p>Please don’t think you are the best designer from your first project. Get help from experienced designers and build your idea on their base. Visit the greatest inspirational websites!</p>
                    <img data-aos="fade-down" data-aos-offset="-100" src="../assets/img/Process-Inspiration-IMG.svg" alt="How to get inspiration">
                </div>
                <a class="more" href="#inspiration">
                    <img class="more-ball" src="../assets/img/More-Ball.svg" alt="Go to Inspiration">
                    <img class="more-chevron" src="../assets/img/More-Chevron.svg" alt="Go to Inspiration">

                    <img class="more-ball-active" src="../assets/img/More-Ball-Active.svg" alt="Go to Inspiration">
                    <img class="more-chevron-active" src="../assets/img/More-Chevron-Active.svg" alt="Go to Inspiration">
                </a> 
            </div>
            <div class="box">
                <div class="step">
                    <h3>Prototyping</h3>
                    <p>Let’s start designing a Hi-Fi user interface. Based on the inspiration you got from the privious step, you will create a beautiful and clickable mockup to show your team!</p>
                    <img data-aos="fade-up" data-aos-offset="-100" src="../assets/img/Process-Prototyping-IMG.svg" alt="How to build your prototype">
                </div>
                <a class="more" href="#prototyping">
                    <img class="more-ball" src="../assets/img/More-Ball.svg" alt="Go to Prototyping">
                    <img class="more-chevron" src="../assets/img/More-Chevron.svg" alt="Go to Prototyping">

                    <img class="more-ball-active" src="../assets/img/More-Ball-Active.svg" alt="Go to Prototyping">
                    <img class="more-chevron-active" src="../assets/img/More-Chevron-Active.svg" alt="Go to Prototyping">
                </a> 
            </div>
            <div data-aos="fade-up" class="box mobilebox">
                <div class="step">
                    <h3>The process</h3>
                    <p>Note that this website is more visible and advanced when displayed on a bigger device. If you like what you are reading, make sure to open Straaada on your desktop or tablet! Enjoy the learning process.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Process'
}
</script>

<style lang="scss" scoped>
#process {
    background-image: url('../assets/img/Working.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .boxes {
        margin: 0 auto;
        padding-bottom: 150px;
        background: transparent;
        display: flex;
        justify-content: space-between;
        width: 75%;

        .mobilebox {
            display: none;
        }

        .box {
            margin-top: -50px;
            padding: 32px 0 0 0;
            width: 30%;
            background-color: $white-background;
            border-radius: 10px;
            box-shadow: 0px 0px 5px rgba(77, 13, 85, 0.20);
            position: relative;

            .step {
                h3 {
                    font-family: 'Nunito';
                    font-weight: bold;
                    font-size: 1.5em;
                    line-height: 30px;
                    text-align: center;
                    color: $text-color;
                }

                p {
                    padding: 10% 10% 85% 10%;
                    font-family: 'Open Sans';
                    font-weight: normal;
                    font-size: .9em;
                    line-height: 22px;
                    color: $text-color;
                    text-align: justify;
                }

                img {
                    position: absolute;
                    width: 100%;
                    border-bottom-left-radius: 10px;
                    border-bottom-right-radius: 10px;
                    left: 0;
                    bottom: 0;
                    z-index: 2;
                }
            }
            
            .more {
                position: absolute;
                bottom: -75px;
                width: 150px;
                height: 150px;
                transform: translateX(-50%);
                left: 50%;
                text-decoration: none;
                z-index: 1;
                border-radius: 50%;

                .more-ball, .more-ball-active {
                    width: 100%;
                    display: block;
                    margin: 0 auto;
                }

                .more-chevron, .more-chevron-active {
                    position: absolute;
                    transform: translate(-50%, -50%);
                    left: 50%;
                    top: 70%;
                    width: 40px;
                    
                }

                @keyframes hop-up-and-down {
                    0% { top: 70%; }   
                    40% { top: 73%; }
                    100% { top: 70%; } 
                }

                .more-ball, .more-chevron {
                    opacity: 1;
                }

                .more-ball-active, .more-chevron-active {
                    opacity: 0;
                }

                .more-ball-active {
                    margin-top: -150px;
                }

                .more-chevron-active {
                    animation: hop-up-and-down 1s ease-out infinite;
                }

                &:hover {
                    .more-ball, .more-chevron {
                        display: none;
                        transition: 1s;
                    }

                    .more-ball-active, .more-chevron-active {
                        opacity: 1;
                        transition: opacity 1s;
                    }

                    .more-ball-active {
                        margin-top: 0;
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 1200px) {
        .boxes .box .more {
            width: 120px;
            height: 120px;
            bottom: -60px;

            .more-chevron, .more-chevron-active {
                width: 35px;
            }
        }
    }

    @media only screen and (max-width: 960px) {
        .boxes {
            flex-wrap: wrap;
            width: 80%;

            .box {
                width: calc(100% - 60px);
                margin: 0 auto;

                &:first-child {
                    margin-top: -50px;
                }

                &:first-child, &:nth-child(2) {
                    margin-bottom: 50px;
                }

                .step {
                    p {
                        padding: 5% 10% 10% 10%;
                    }

                    img {
                        display: none;
                    }
                }

                .more {
                    left: calc(100% - 30px);
                    bottom: 38%;
                    transform: rotate(-90deg);
                    height: 60px;
                    width: 120px;
                    border-radius: 0;
                    overflow: hidden;

                    .more-ball, .more-ball-active {
                        width: 120px;
                        height: 120px;
                        margin-top: -60px;
                    }

                    .more-chevron, .more-chevron-active {
                        top: 50%;
                    }

                    &:hover {
                        @keyframes hop-up-and-down {
                            0% { top: 50%; }   
                            40% { top: 53%; }
                            100% { top: 50%; } 
                        }

                        .more-ball-active {
                            margin-top: -60px;
                        }
                    } 
                }
            }
        }
    }

    @media only screen and (max-width: 640px) {
        .boxes {
            width: 80%;
            padding-bottom: 100px;

            .box {
                display: none;
            }

            .mobilebox {
                margin: -50px 0 0 0;
                width: 100%;
                display: block;
            }
        }
    }

    @media only screen and (max-width: 480px) {
        .boxes {
            width: 90%;
        }
    }

    @media only screen and (min-width: 1650px) {
        .boxes {
            width: 70%;
        }
    }
}


</style>

