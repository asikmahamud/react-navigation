<script setup>
import { ref } from 'vue';
const props = defineProps(['menu','submenu'])

const SubMenuLists = ['Getting started', 'Hello React Navigation', 'Moving between screens','Passing parameters to routes',' Build your own Navigator','Configuring the header bar','Header buttons',
'Nesting navigators','Navigation lifecycle','Next steps','Glossary of terms','Troubleshooting','Limitations',]
const show = ref(false)

</script>

<template>
    <li>
        <button @click="show=!show" class="flex w-full items-center justify-between text-gray-700 hover:text-violet-500 font-medium py-2 px-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-100 transition">
            <span>{{menu}}</span>
            <svg :class="{'rotate-90' : show}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/></svg>
        </button>
        <ul v-show="show" class="">
            <li v-for="(submenu, index) in SubMenuLists" :key="index" :submenu="submenu" class="hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                <a href="#" class="flex items-center justify-between text-gray-700 font-medium py-2 pl-5 dark:text-gray-200">{{submenu}}</a>
            </li>
        </ul>
    </li>
</template>

