<template >
    <section class="text-white mt-20" id="testimonials" data-aos="zoom-in">
        <h2 class="text-4xl font-bold text-white text-left mb-4 px-4 xl:pl-16">Recommandations </h2>
        <div class="px-4 xl:px-16">
            <Carousel v-bind="settings" :breakpoints="breakpoints" >
                <Slide v-for="element in testimonials" :key="element.id">
                    <div class="carousel__item p-4">
                        <div class="w-full mx-auto bg-[#111a3e] shadow-lg border border-[#1f1641] p-5 text-white font-light mb-6">
                            <div class="w-full flex mb-4 items-center">
                                <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                    <img :src="element.image" alt="testimonial image" loading="lazy">
                                </div>
                                <h6 class="ml-4 font-bold text-sm uppercase text-white">{{ element.fullName }}</h6>
                            </div>
                            <div class="w-full">
                                <p class="text-sm leading-tight">
                                    <span class="text-lg leading-none italic font-bold text-white mr-1">"</span>
                                       <strong>{{ element.comment }}</strong> 
                                    <span class="text-lg leading-none italic font-bold text-white mr-1">"</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Slide> 
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
import { Carousel , Navigation , Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
//Carousel settings
const settings =ref({
    itemsToShow:1,
    snapAlign:"center",
})

//Breakpoints
const breakpoints =ref({
    700:{
        itemsToShow:2.5,
        snapAlign:'center',
    },
    1024:{
        itemsToShow:3,
        snapAlign:'start'
    }
})

const testimonials=ref([
    {
        id:1,
        fullName:'DEBUREAU AUGUSTIN',
        image:'https://media.licdn.com/dms/image/v2/D4E35AQFYcDEx3pmFqg/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1713170530002?e=1733835600&v=beta&t=3torZGOU0Z2OwlUqWHoBuT8F81v1ZRhimBo9HnjFUgs',
        comment:'J\'ai eu le plaisir de superviser Adam pendant son stage chez RESEAU EXPRESS. Il a développé une page web impressionnante en utilisant HTML, CSS Tailwind et JavaScript, démontrant un excellent sens du détail et une grande maîtrise des technologies web. Son enthousiasme et sa capacité à apprendre rapidement ont grandement contribué au succès de notre projet.'
    },
])
</script>
<style >
    .carousel__prev,.carousel__next {
        color: white !important;
    }
</style>