<template>
  <div id="app">
    <header>
      <div id="navbar">
        <div class="navbar-logo">
          <a href="#app" class="icon"><img src="./assets/img/Straaada-Icon.svg" alt="Straaada"></a>
          <a href="#app" class="name">Straaada</a>
        </div>
        <scrollactive class="navbar-nav" active-class="-active">
          <ul class="nav">
            <li class="nav-item"><a class="scrollactive-item" href="#concepting">Concepting</a></li>
            <li class="nav-item"><a class="scrollactive-item" href="#inspiration">Inspiration</a></li>
            <li class="nav-item"><a class="scrollactive-item" href="#prototyping">Prototyping</a></li>
          </ul>
        </scrollactive>
      </div>
    </header>
    
    <main class="wrapper">
      <Home />
      <Process />
      <Concepting />
      <Help />
      <Inspiration />
      <More />
      <Prototyping />
      <Tutorial />
      <Contact />
    </main>

    <footer>
      <div class="copy">
        <p>&copy; Copyright 2019 - <a href="http://vincent.van.minnebruggen.mtantwerp.eu" target="_blank">Vincent Van Minnebruggen</a></p>
      </div>
      <div class="logo">
        <img src="./assets/img/Straaada-Icon.svg" alt="Straaada">
      </div>
    </footer>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Process from './components/Process.vue'
import Concepting from './components/Concepting.vue'
import Help from './components/Help.vue'
import Inspiration from './components/Inspiration.vue'
import More from './components/More.vue'
import Prototyping from './components/Prototyping.vue'
import Tutorial from './components/Tutorial.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'app',
  components: {
    Home,
    Process,
    Concepting,
    Help,
    Inspiration,
    More,
    Prototyping,
    Tutorial,
    Contact
  }
}

</script>

<style lang="scss">

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  p {
    margin: 0;
  }
}

//fonts
@font-face {
  font-family: 'Open Sans';
  src: url(./assets/fonts/OpenSans-Regular.ttf) format('truetype');
  font-weight: normal;
}

@font-face {
  font-family: 'Open Sans';
  src: url(./assets/fonts/OpenSans-Semibold.ttf) format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: 'Nunito';
  src: url(./assets/fonts/Nunito-Regular.ttf) format('truetype');
  font-weight: normal;
}

@font-face {
  font-family: 'Nunito';
  src: url(./assets/fonts/Nunito-SemiBold.ttf) format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: 'Nunito-SemiBold';
  src: url(./assets/fonts/Nunito-SemiBold.ttf) format('truetype');
}

@font-face {
    font-family: 'Nunito';
    src: url(./assets/fonts/Nunito-Light.ttf) format('truetype');
    font-weight: lighter;
}

html {
  scroll-behavior: smooth;
}

#app {
  font-family: 'Open Sans', sans-serif;
  color: $text-color;
  background-image: url('./assets/img/Mountain.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  background-attachment: fixed;
  z-index: -5;

  header {
    height: 80px; /* 60 + 20px */
    position: sticky;
    /* negative top allows for 20 pixels of movement before sticking */
    top: -20px;
    z-index: 99;
    /* fix weird flickering issue in chrome: https://stackoverflow.com/a/22224884/286685 */
    -webkit-backface-visibility: hidden;

    /* PSEUDO ELEMENTS to create drop-shadow */
    &:before,
    &:after {
      content: "";
      display: block;
      height: 20px;
      position: sticky;
    }

    /* SHADOW */
    &:before {
      top: 40px; /* shadow is at bottom of element, so at 40 + 20 = 60px */
      box-shadow: 0px 2px 8px rgba(77, 13, 85, 0.25);
    }

    /* COVER */
    &:after {
      /* linear gradient from background color to transparent acts as
        a transition effect so the shadow appears gradually */
      background: linear-gradient(
        $light-background 10%,
        rgba(245, 246, 250, 0.8) 50%,
        rgba(245, 246, 250, 0.4) 70%,
        transparent
      );
      top: 0;
      /* cover should fall over shadow */
      z-index: 2;
    }

    #navbar {
      //height: 60px;
      width: 100%;
      background-color: $light-background;

      height: 60px;
      position: sticky;
      top: 0px;
      /* compensate for shadow with negative margin */
      margin-top: -20px;
      /* content should fall over shadow and cover */
      z-index: 3;
      
      display: flex;
      justify-content: space-between;

      .navbar-logo {
        flex-direction: row;
        width: 30%;
        margin-left: 50px;
        display: flex;
        justify-content: flex-start;

        .icon {
          flex-direction: row;
          text-decoration: none;
          margin: 0;
          padding: 0;
          
          img {
            width: 40px;
            margin: 10px 0;
          }
        }
        
        .name {
          flex-direction: row;
          text-decoration: none;
          padding: 5px 0 5px 30px;
          margin: 10px 0;
          font-family: 'Nunito';
          font-weight: lighter;
          font-size: 1.5em;
          color: $red;
          line-height: 30px;
        }
      }

      .navbar-nav {
        flex-direction: row;
        display: flex;
        justify-content: flex-end;
        flex-wrap: nowrap;
        width: 70%;

        .nav {
          list-style: none;
          display: flex;
          justify-content: flex-end;
          margin-right: 20px;

          .nav-item {
            flex-direction: row;
            padding: 15px 30px;

            a {
              font-family: 'Nunito';
              font-weight: lighter;
              font-size: 1.1em;
              color: $text-color;
              line-height: 30px;
              text-decoration: none;
              position: relative;

              &:after{
                content: '';
                position: absolute;
                width: 0; height: 2px;
                display: block;
                right: 0;
                background: $text-color;
                transition: width .2s ease;
                -webkit-transition: width .2s ease;
              }
 
              &:hover:after, &.-active:after {
                width: 100%;
                left: 0;
                background: $text-color;
              }
            }
          }
        }
      }
    }
  }

  .wrapper {
    margin-top: -20px;
  }

  footer {
    width: 100%;
    background-color: $light-background;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    align-items: center;

    .copy {
      flex-direction: row;
      width: 90%;
      padding: 15px 0 15px 5%;

      p {
        font-family: 'Open Sans';
        font-weight: normal;
        font-size: .9em;
        line-height: 20px;
        color: $text-color;
        margin: 0;

        a {
          text-decoration: none;
          color: $text-color;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .logo {
      flex-direction: row;
      width: 10%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 5%;

      img {
        width: 30px;
      }
    }
  }
}
</style>
