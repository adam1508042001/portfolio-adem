<template>
    <section class="relative w-full" data-aos="zoom-in-up">
        <div class="absolute top-0 inset-x-0 h-64 flex items-start">
            <div class="h-24 w-2/3 bg-gradient-to-br from-[#570cac] blur-2xl invisible opacity-40"></div>
            <div class="h-20 w-3/5 bg-gradient-to-r from-[#670ccf] opqcity-40 blur-2xl"></div>
        </div>
        <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
            <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
                <div class="lg:py-6">
                    <div class="text-center lg:text-left">
                        <h1 class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                            Hello there, Je m'appelle <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                                AFROUNE MOHAMED ADAM
                            </span>😁
                        </h1>
                    </div>
                    <p class="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl">
                       Je suis <strong>étudiant</strong> en <strong>développement informatique</strong> à l'<strong>École d'ingénieurs CESI</strong> à Caen, en formation BAC+2. Passionné par la programmation et les nouvelles technologies, je suis à la recherche d'une opportunité en alternance ou d'un stage de 6 mois pour enrichir mes compétences professionnelles.
                    </p>
                    <div class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                        <button class=" border border-primary px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
                            <div class="hover:scale-105 transition-all ease-in-out flex justify-center items-center relative">
                            <div class="svg-container">
                               
                                <div class="download-loader text-white hidden"></div>
                            </div>
                            <a href="https://www.linkedin.com/in/mohamed-adam-afroune/overlay/1735058541962/single-media-viewer/?profileId=ACoAADQNJCABcZZSeLEky6S_MhmAbaO6PeWD-j8" target="_blank" class="cv pl-2 text-primary">Visualiser le CV sur Linkedin</a>

   
                        </div>
                        </button>




                    </div>
                </div>
                <div class="lg:h-full md:flex">
                    <div class="flex w-full h-96 min-h-[24rem] lg:min-h-[none] lg:w-full lg:h-full items-center relative">
                        <div class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl"></div>
                        <div class="absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-3 md:right-40 sm:right-16 rounded-full shadow-lg border border-primary">
                            <img src="../assets/photo-site.png" alt="Hero pic" width="500" height="auto" loading="lazy"
                            class="w-full h-full rounded-full object-cover"
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


</script>