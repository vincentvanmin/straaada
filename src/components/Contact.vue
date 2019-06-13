<template>
    <section id="contact">
        <div class="subtitle">
            <h4>Well done!</h4>
            <p class="description">I’m sure you created an amazing design, now it’s time to build it for real. Get yourself into a CMS or into coding so everyone can enjoy your beatiful work. Do you have any question or proposal for this website?</p>
            <a data-aos="fade-up" href="#form" class="contactbutton">Get in touch</a>
        </div>

        <div id="form" class="formbox">
            <mdb-container style="padding: 0; width: 100%;">
                <mdb-row style="padding: 0; margin: 0;">
                    <mdb-col style="padding: 0; margin: 0;">
                        <form @submit.prevent="handleSubmit" name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" class="w-100">
                            <p class="hidden" style="display: none;">
                                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                            </p>
                            <div class="formfields">
                                <mdb-input v-model="form.name" name="name" label="Name" group type="text" validate error="wrong" success="right" class="inputname" required />
                                <mdb-input v-model="form.email" name="email" label="Email" group type="email" validate error="wrong" success="right" class="inputemail" required />
                                <div class="collapsed">
                                    <mdb-input v-model="form.url" name="url" label="URL (optional)" group type="url" validate error="wrong" success="right" class="inputurl" />
                                    <select v-model="form.reason" name="reason" class="browser-default custom-select inputreason" required>
                                        <option class="select-placeholder" value="" disabled selected>What's the reason for contacting me?</option>
                                        <option value="Feedback">Aks for feedback</option>
                                        <option value="Suggestion">Suggestion for Straaada</option>
                                        <option value="Question">Other question</option>
                                    </select>
                                </div>
                                <div class="inputrating">
                                    <p style="width: 100%;">How would you rate Straaada?</p>
                                    <div class="ratingoption">
                                        <mdb-input type="radio" id="wow" name="rating" radioValue="Wow" value="Wow" v-model="form.rating" class="radiobutton" required /><label for="wow">Wow! Supercool :)</label>
                                    </div>
                                    <div class="ratingoption">
                                        <mdb-input type="radio" id="okay" name="rating" radioValue="Okay" value="Okay" v-model="form.rating" class="radiobutton" /><label for="okay">Okay. It's okay.</label>
                                    </div>
                                    <div class="ratingoption">
                                        <mdb-input type="radio" id="hmm" name="rating" radioValue="Hmm" value="Hmm" v-model="form.rating" class="radiobutton" /><label for="hmm">Hmm. Needs some work.</label>
                                    </div>
                                </div>
                                <mdb-textarea v-model="form.message" name="message" :rows="2" label="Message" class="inputmessage" required="required" />
                            </div>
                            <div class="buttonbox">
                                <button data-aos="fade-up" type="submit" class="submitbutton">
                                    <p>Send</p>
                                    <div class="plane"></div>
                                </button>
                            </div>
                            <div id="spinner" class="spinner">
                                <div class="bounce1"></div>
                                <div class="bounce2"></div>
                                <div class="bounce3"></div>
                            </div>
                        </form>
                    </mdb-col>
                </mdb-row>
            </mdb-container>
        </div>
    </section>
</template>

<script>
import { mdbInput, mdbContainer, mdbRow, mdbCol, mdbTextarea } from 'mdbvue';

export default {
    name: 'contact',

    data: () => ({
        form: {
            name: '',
            email: '',
            url: '',
            reason: '',
            rating: '',
            message: ''
        }
    }),

    components: {
      mdbInput, mdbContainer, mdbRow, mdbCol, mdbTextarea
    },

    methods: {
        // encode to prevent error on special characters
        encode(data) {
            return Object.keys(data)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
            .join('&')
        },

        handleSubmit() {
            document.getElementById('spinner').style.opacity="1";
            fetch('/', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: this.encode({
                    'form-name': 'contact',
                    ...this.form
                })
            })
            .then(() => console.log('successfully sent'))
            .catch(e => console.error(e))
            window.location.reload()
        }
    },
}
</script>

<style lang="scss" scoped>
#contact {
    background-color: $white-background;
    padding: 150px 0;

    .subtitle {
        padding-bottom: 50px;
        width: 75%;
        margin: 0 auto;

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
            padding: 20px 0 30px 0;
        }

        .contactbutton {
            display: block;
            margin: 0 auto;
            width: 250px;
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

    .formbox {
        width: 75%;
        margin: 0 auto;
        padding-top: 100px;

        .formfields {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            input[name=name]:focus:not([readonly]), textarea.md-textarea:focus:not([readonly]) {
                box-shadow: 0 1px 0 0 $action-color;
                border-bottom: 1px solid $action-color;
            }
            
            .inputname, .inputemail {
                flex-direction: row;
                width: 47.5%;
            }

            .collapsed {
                width: 70%;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;

                .inputurl {
                    width: 100%;
                }

                .inputreason {
                    width: 100%;
                    border: none;
                    border-bottom: 1px solid #ced4da;
                    border-radius: 0;
                    margin: 1.5rem 0;
                    color: #495057;
                    padding-left: 0;
                

                    .select-placeholder {
                        color: #ced4da;
                    }

                    &:focus {
                        outline: none;
                    }
                }
            }

            .inputrating {
                width: 25%;
                margin-top: 1rem;

                p {
                    font-family: 'Open Sans';
                    font-weight: normal;
                    font-size: 1.1em;
                    line-height: 25px;
                    margin-bottom: 0;
                }

                .ratingoption {
                    display: flex;
                    justify-content: flex-start;
                    flex-wrap: nowrap;
                    align-items: center;
                    height: 40px;

                    .radiobutton {
                        flex-direction: row;
                        height: 40px;

                        input[type=radio] {
                            height: 40px;
                        }
                    }

                    label {
                        flex-direction: row;
                        align-self: center;
                        vertical-align: middle;
                        height: 40px;
                        margin: 0;
                        padding: 14px 0 0 10px;
                        font-family: 'Open Sans';
                        font-weight: normal;
                        font-size: .9em;
                        line-height: 20px;
                    }
                }
            }

            .inputmessage {
                width: 100%;
            }
        }

        .buttonbox {
            display: flex;
            justify-content: center;
            padding-top: 30px;

            .submitbutton {
                width: 250px;
                height: 40px;
                display: flex;
                flex-wrap: nowrap;
                justify-content: center;
                background-color: $action-color;
                border: solid 3px $action-color;
                border-radius: 20px;
                text-decoration: none;
                outline: none;

                p {
                    flex-direction: row;
                    font-family: 'Open Sans';
                    font-weight: normal;
                    font-size: 20px;
                    line-height: 36px;
                    color: #ffffff;
                    padding: 0 20px 0 0;
                    margin: 0;
                }

                .plane {
                    flex-direction: row;
                    width: 25px;
                    height: 20px;
                    margin: 7px 0;
                    transform: rotate(0deg);
                    background-image: url(../assets/img/Plane.svg);
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

                    .plane {
                        background-image: url(../assets/img/Plane-Active.svg);
                        transform: rotate(60deg);
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

        #spinner {
            opacity: 0;
        }

        .spinner {
            margin: 20px auto 0 auto;
            width: 70px;
            text-align: center;

            > div {
                width: 18px;
                height: 18px;
                background-color: $action-color;

                border-radius: 100%;
                display: inline-block;
                -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
                animation: sk-bouncedelay 1.4s infinite ease-in-out both;
            }

            .bounce1 {
                -webkit-animation-delay: -0.32s;
                animation-delay: -0.32s;
            }
            .bounce2 {
                -webkit-animation-delay: -0.16s;
                animation-delay: -0.16s;
            }

            @-webkit-keyframes sk-bouncedelay {
                0%, 80%, 100% { -webkit-transform: scale(0) }
                40% { -webkit-transform: scale(1.0) }
            }
            @keyframes sk-bouncedelay {
                0%, 80%, 100% { 
                    -webkit-transform: scale(0);
                    transform: scale(0);
                } 40% { 
                    -webkit-transform: scale(1.0);
                    transform: scale(1.0);
                }
            }
        }
    }

    @media only screen and (max-width: 960px) {
        .subtitle {
            width: 80%;

            .description {
                width: 100%;
            }
        }

        .formbox {
            width: 80%;

            .container {
                margin: 0 auto;

                .row {
                    width: 100%;

                    .col form .formfields {
                        .inputname, .inputemail, .inputurl, .inputreason, .inputrating {
                            width: 100%;
                            margin: 1rem 0;
                        }

                        .collapsed {
                            width: 100%;
                        }

                        .inputrating {
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: space-between;

                            .ratingoption {
                                width: 30%;
                                height: auto;

                                label {
                                    height: auto;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 480px) {
        padding-bottom: 100px;

        .subtitle {
            width: 90%;
        }

        .formbox {
            width: 90%;
            padding-top: 50px;

            .container .row .col form .formfields .inputrating {
                .ratingoption {
                    width: 100%;
                }
            }
        } 
    }

    @media only screen and (min-width: 1650px) {
        .subtitle, .formbox {
            width: 70%;
        }
    }
}
</style>
