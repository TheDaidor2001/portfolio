<script setup>
import { RouterView } from 'vue-router'
import SocialIcons from './components/SocialItems.vue'
import { Github, Linkedin, Curriculum } from './components/icons'
</script>

<template>
  <header class=" max-w-7xl mx-auto bg-thith-color flex mt-10 rounded-3xl px-0 lg:px-20 py-20 lg:py-0">
    <div
      class="flex flex-col sm:flex-row justify-between h-full w-full relative bg-grey sm:h-[40vh] lg:h-[85vh] lg:max-h-[960px] rounded-3xl">
      <div class="flex justify-center h-full lg:pt-4 flex-col relative gap-3 lg:gap-1 content-wrapper w-screen lg:w-auto">
        <p class="text-white text-4xl font-bebas font-bold text-center lg:text-left">Hola</p>
        <h1 class="text-white text-6xl md:text-8xl font-bold font-bebas text-center lg:text-left">Soy <span
            class="text-secondary-color font-secondary">Daniel
            Castillo</span></h1>
        <p class="text-white text-lg text-center lg:text-left">Front-End Developer</p>
        <ul class="flex gap-3 justify-center lg:justify-start">
          <SocialIcons text="Github" link="https://github.com/TheDaidor2001">
            <Github />
          </SocialIcons>
          <SocialIcons text="Linkedin" link="https://www.linkedin.com/in/daniel-castillo-balboa-360a85224/">
            <Linkedin />
          </SocialIcons>
          <SocialIcons text="CV" link="/NCurriculum.pdf">
            <Curriculum />
          </SocialIcons>
        </ul>
      </div>
    </div>
    <div class="hidden items-center w-full lg:flex">
      <img class="w-full" src="/Asset 2.svg" alt="">
    </div>
  </header>
  <main class=" max-w-7xl mx-auto">
    <section
      class=" bg-secondary-color flex flex-col lg:flex-row mt-10 rounded-3xl px-0 lg:px-28 h-52 gap-5 items-center justify-center"
      id="about_me">
      <p class="lg:rotate-90 text-xl lg:text-3xl font-bold text-center text-gray-950">Sobre mi</p>
      <h2 class="font-bebas text-4xl md:text-6xl lg:text-8xl font-extrabold text-gray-950 text-center">Sin barreras, sin
        límites</h2>
    </section>
    <section class="flex flex-col lg:flex-row items-center mt-20 rounded-3xl px-20 pb-20 gap-20">
      <div class="w-full lg:w-2/3">
        <h3 class="text-secondary-color text-3xl font-semibold">Apasionado por la creación de sitios Web.</h3>
        <p class="text-white text-xl font-light mt-2">Desarrolador web desde 2021, siempre impulsado por el deseo de
          elaborar
          sitios web
          preciosos, accesibles y con el
          mejor rendimiento posible</p>
        <p class="text-white text-xl font-light mt-4">
          He tenido el privilegio de aprender de varios con varios cursos de expertos en la materia de la programación
          FrontEnd.
        </p>
      </div>
      <div class="mx-auto w-1/3">
        <img src="/name.png" alt="">
      </div>
    </section>
  </main>
</template>


<style>
.text-selection-disable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
