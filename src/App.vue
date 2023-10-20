<script setup>
import { RouterView } from 'vue-router'
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
          <li class="flex flex-col justify-center items-center text relative">
            <a class="ancla" href="" target="_blank">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                class="w-10 h-10 text-secondary-color hover:scale-125 transition-all" height="1em" width="1em"
                xmlns="http://www.w3.org/2000/svg">

                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z">
                </path>
              </svg>
            </a>
            <p class="border border-secondary-color rounded-xl px-2 py-1 mt-3 absolute top top-10 text-white">GitHub</p>
          </li>
          <li class="flex flex-col justify-center items-center text relative">
            <a href="" target="_blank">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                class="w-10 h-10 text-secondary-color hover:scale-125 transition-all" height="1em" width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z">
                </path>
              </svg>
            </a>
            <p class="border border-secondary-color rounded-xl px-2 py-1 mt-3 absolute top top-10 text-white">Linkedin
            </p>
          </li>
          <li class="flex flex-col justify-center items-center text relative">
            <a class="ancla" href="" target="_blank">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                class="w-10 h-10 text-secondary-color hover:scale-125 transition-all" height="1em" width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023.479 0 .774-.242.774-.651 0-.366-.254-.586-.704-.586zm3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018.817.006 1.349-.444 1.349-1.396.006-.83-.479-1.268-1.255-1.268z">
                </path>
                <path
                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.498 16.19c-.309.29-.765.42-1.296.42a2.23 2.23 0 0 1-.308-.018v1.426H7v-3.936A7.558 7.558 0 0 1 8.219 14c.557 0 .953.106 1.22.319.254.202.426.533.426.923-.001.392-.131.723-.367.948zm3.807 1.355c-.42.349-1.059.515-1.84.515-.468 0-.799-.03-1.024-.06v-3.917A7.947 7.947 0 0 1 11.66 14c.757 0 1.249.136 1.633.426.415.308.675.799.675 1.504 0 .763-.279 1.29-.663 1.615zM17 14.77h-1.532v.911H16.9v.734h-1.432v1.604h-.906V14.03H17v.74zM14 9h-1V4l5 5h-4z">
                </path>
              </svg>
            </a>
            <p
              class="w-32 tex-center border border-secondary-color rounded-xl px-2 py-1 mt-3 absolute top top-10 text-white">
              Descargar CV
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="hidden items-center w-full lg:flex">
      <img class="w-full" src="/Asset 2.svg" alt="">
    </div>
  </header>
  <main class=" max-w-7xl mx-auto">
    <section
      class=" bg-secondary-color flex flex-col lg:flex-row mt-10 rounded-3xl px-28 h-52 gap-5 items-center justify-center"
      id="about_me">
      <p class="lg:rotate-90 text-3xl font-bold text-center text-gray-950">Sobre mi</p>
      <h2 class="font-bebas text-6xl lg:text-8xl font-extrabold text-gray-950 text-center">Sin barreras, sin límites</h2>
    </section>
    <section class="flex mt-20 rounded-3xl px-20 pb-20">
      <div class="w-1/2">
        <h3 class="text-secondary-color text-2xl font-semibold">Apasionado por la creación de sitios Web.</h3>
        <p class="text-white text-lg font-normal mt-2">Desarrolador web desde 2021, siempre impulsado por el deseo de
          elaborar
          sitios web
          preciosos, accesibles y con el
          mejor rendimiento posible</p>
        <p class="text-white text-lg font-normal mt-4">
          He tenido el privilegio de aprender de varios con varios cursos de expertos en la materia de la programación
          FrontEnd.
        </p>
      </div>
      <div></div>
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

.text>p {
  opacity: 0;
  transition: all .25s ease-in-out;
}

.text:hover p {
  opacity: 1;
  transform: scale(1.1);
}
</style>
