<template >
    <section class="text-white mt-18" id="about">
        <div class="absolute z-0 top-[93rem] inset-x-0 h-64 flex items-start">
            <div class="h-24 w-64 bg-gradient-to-br from-primary via-secondary blur-2xl to-[#570cac] opacity-20"></div>
        </div>
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-1">
            <div data-aos="flip-right">
                <h2 class="text-4xl font-bold text-white text-left mb-8">Parcours académique</h2>
                <div class="space-y-8 py-8">
                    <div v-for="element in education" :key="element.id"
                    class="flex items-center md:w-[80%] w-full rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]"
                    >
                        <div class="w-1/4">
                            <img src="https://img.icons8.com/ios-glyphs/60/ffffff/graduation-cap--v1.png" alt="graduation-cap--v1">
                        </div>
                        <div class="w-3/4 pl-4">
                            <h3 class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl">
                                {{ element.School }}
                            </h3>
                            <p class="text-white">{{ element.program }}</p>
                            <p class="text-white">{{ element.year }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full" data-aos="flip-right">
                <h2 class="text-4xl font-bold text-white md:text-center text-left mb-4">More
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">About</span>
                    Me
                </h2>
                <p class="text-base lg:text-lg mt-8 py-8">J'ai déjà réalisé plusieurs projets académiques qui m'ont permis de travailler sur des technologies modernes comme ReactJS, VueJS, Node.js, PHP, et SQL. Par exemple, j'ai développé une plateforme de gestion de tâches pour une entreprise, créé des systèmes IoT, et conçu des pages web marketing. Ces expériences m'ont aidé à renforcer ma capacité d'adaptation et mon esprit d'équipe, tout en consolidant mes compétences techniques.

Je parle couramment le français et l'anglais (niveau C1), et ma langue maternelle est le kabyle. En dehors du travail, je suis passionné de sport, notamment le football et la chasse sous-marine, et j'adore les jeux vidéo et les animaux.

Je suis mobile dans toute la France et prêt à relever de nouveaux défis. Mon objectif est d’apporter mes compétences et mon énergie à une équipe, tout en continuant à apprendre et à évoluer dans le domaine du développement informatique.
                </p>
              
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
const education=ref([
    {
        id:1,
        program:' Formation BAC+2 en développement informatique',
        school:'École d\'ingénieurs CESI, Caen',
        year:'2023 - 2025'
    },
    {
        id:2,
        program:'Licence en science de la vie et de la nature',
        school:'Université de CAEN Normandie',
        year:'2021-2022'
    },
    {
        id:2,
        program:'Baccalauréat scientifique',
        school:'Lycée YAZOURENE AZEFFOUN',
        year:'2019 - 2020'
    }
    

])
</script>
