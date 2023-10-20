<script setup>
defineProps({
    link: {
        type: String
    },
    text: {
        type: String
    }


})
</script>


<template>
    <li class="flex flex-col justify-center items-center text relative">
        <a class="ancla" :href="link" target="_blank" :aria-label="text">
            <slot />
        </a>
        <p class="border border-secondary-color rounded-xl px-2 py-1 mt-3 absolute top top-10 text-white">{{ text }}</p>
    </li>
</template>

<style scoped>
.text>p {
    opacity: 0;
    transition: all .25s ease-in-out;
}

.text:hover p {
    opacity: 1;
    transform: scale(1.1);
}
</style>

