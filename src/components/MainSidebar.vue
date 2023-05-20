<script setup>
import SingleSidebar from './SingleSidebar.vue';

const menuLists = ['Guides', 'Navigators', 'Libraries','API reference',' Build your own Navigator','Additional resources','Meta']
const openSidebar = false;
</script>

<template>
    <div class="w-[300px] sticky h-full max-h-full top-16 pt-0 hidden lg:block dark:bg-gray-800">
        <div class="p-2 border-r dark:border-gray-400">
            <ul>
                <SingleSidebar v-for="(menu, index) in menuLists" :key="index" :menu="menu"/>
            </ul>
        </div>
    </div>
</template>
