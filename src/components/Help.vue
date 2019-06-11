<template>
    <section id="help" name="help">
        <div class="subtitle">
            <h4>Need help?</h4>
            <p class="description">If you have some trouble finding the rhythm in this step, make sure to check out this video so you can seehow a designer goes to work with Invision Freehand. Get some free hints!</p>
        </div>
        <div class="videobox">
            <div id="helpvideo">
                <iframe width="560" height="349" src="https://www.youtube.com/embed/lKPgRK0llO8" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
        <div class="buttons">
            <a id="watch-helpvideo-button" @click="showHelpVideo">Watch video</a>
            <a id="continue-to-inspiration-button" href="#inspiration">Continue</a>
        </div>
    </section>
</template>

<script>
export default {
    name: 'help',

    methods: {
        showHelpVideo: function() {
            document.getElementById('helpvideo').style.padding = "0 0 56.25% 0";
            document.getElementById('watch-helpvideo-button').style.display = "none";
        },

        // hideHelpVideo: function() {
        //     document.getElementById('helpvideo').style.padding = "0";
        //     document.getElementById('watch-helpvideo-button').style.display = "block";
        // }
    }
}
</script>

<style lang="scss" scoped>
#help {
    padding: 100px 0;
    // background-color: $light-background;

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
            width: 70%;
            margin: 0 auto;
            font-family: 'Open Sans';
            font-weight: normal;
            font-size: .9em;
            line-height: 20px;
            color: $text-color;
            text-align: center;
        }
    }

    .videobox {
        width: 75%;
        margin: 0 auto;

        #helpvideo {    
            position: relative;
            padding-bottom: 0; /* 16:9 */
            padding-top: 0;
            margin-top: 40px;
            height: 0;
            transition: all .8s;

            iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;

                box-shadow: 1px 2px 8px rgba(77, 13, 85, 0.20);
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

        #watch-helpvideo-button {
            background-color: $action-color;
            color: #ffffff;
            cursor: pointer;

            &:hover {
                background-color: $light-background;
                color: $action-color;
                transition: all .5s;
            }
        }

        #continue-to-inspiration-button {
            background-color: #ffffff;
            color: $action-color;

            &:hover {
                background-color: $action-color;
                color: #ffffff;
                transition: all .5s;
            }
        }
    }

    @media (max-width: 960px) {
        .videobox {
            width: 80%;
        }
    }

    @media (max-width: 480px) {
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
