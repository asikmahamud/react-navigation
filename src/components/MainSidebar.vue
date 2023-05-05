<script setup>

const openSidebar = false;
</script>

<template>
    <div class="w-[300px] sticky h-full max-h-full top-0 pt-0">
        <div class="p-2 border-r">
            <ul>
                <li>
                    <a @click="openSidebar = !openSidebar" href="#" class="flex items-center justify-between text-gray-700 font-medium py-2 px-2 hover:bg-gray-100 transition">
                        <span class="text-violet-500">Fundamentals</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/></svg>
                    </a>
                    <ul v-show="openSidebar" class="">
                        <li v-for="n in 10" :key="n" class="hover:bg-gray-100 transition"><a href="#" class="flex items-center justify-between text-gray-700 font-medium py-2 pl-5">Getting started</a></li>
                    </ul>
                </li>

                <li>
                    <a @click="openSidebar" href="#" class="flex items-center justify-between text-gray-600 font-medium py-2 px-2 hover:bg-gray-100 transition">
                        Guides
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/></svg>
                    </a>
                    <ul v-show="openSidebar" class="">
                        <li v-for="n in 10" :key="n" class="hover:bg-gray-100 transition"><a href="#" class="flex items-center justify-between text-gray-700 font-medium py-2 pl-5">Getting started</a></li>
                    </ul>
                </li>

                <li>
                    <a @click="openSidebar" href="#" class="flex items-center justify-between text-gray-600 font-medium py-2 px-2 hover:bg-gray-100 transition">
                        Navigators
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/></svg>
                    </a>
                    <ul v-show="openSidebar" class="">
                        <li v-for="n in 10" :key="n" class="hover:bg-gray-100 transition"><a href="#" class="flex items-center justify-between text-gray-700 font-medium py-2 pl-5">Getting started</a></li>
                    </ul>
                </li>

                <li>
                    <a @click="openSidebar" href="#" class="flex items-center justify-between text-gray-600 font-medium py-2 px-2 hover:bg-gray-100 transition">
                        Libraries
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/></svg>
                    </a>
                    <ul v-show="openSidebar" class="">
                        <li v-for="n in 10" :key="n" class="hover:bg-gray-100 transition"><a href="#" class="flex items-center justify-between text-gray-700 font-medium py-2 pl-5">Getting started</a></li>
                    </ul>
                </li>

                <li>
                    <a @click="openSidebar" href="#" class="flex items-center justify-between text-gray-600 font-medium py-2 px-2 hover:bg-gray-100 transition">
                        API reference
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/></svg>
                    </a>
                    <ul v-show="openSidebar" class="">
                        <li v-for="n in 10" :key="n" class="hover:bg-gray-100 transition"><a href="#" class="flex items-center justify-between text-gray-700 font-medium py-2 pl-5">Getting started</a></li>
                    </ul>
                </li>

                <li>
                    <a @click="openSidebar" href="#" class="flex items-center justify-between text-gray-600 font-medium py-2 px-2 hover:bg-gray-100 transition">
                        Build your own Navigator
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/></svg>
                    </a>
                    <ul v-show="openSidebar" class="">
                        <li v-for="n in 10" :key="n" class="hover:bg-gray-100 transition"><a href="#" class="flex items-center justify-between text-gray-700 font-medium py-2 pl-5">Getting started</a></li>
                    </ul>
                </li>

                <li>
                    <a @click="openSidebar" href="#" class="flex items-center justify-between text-gray-600 font-medium py-2 px-2 hover:bg-gray-100 transition">
                        Additional resources
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/></svg>
                    </a>
                    <ul v-show="openSidebar" class="">
                        <li v-for="n in 10" :key="n" class="hover:bg-gray-100 transition"><a href="#" class="flex items-center justify-between text-gray-700 font-medium py-2 pl-5">Getting started</a></li>
                    </ul>
                </li>

                <li>
                    <a @click="openSidebar" href="#" class="flex items-center justify-between text-gray-600 font-medium py-2 px-2 hover:bg-gray-100 transition">
                        Meta
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/></svg>
                    </a>
                    <ul v-show="openSidebar" class="">
                        <li v-for="n in 10" :key="n" class="hover:bg-gray-100 transition"><a href="#" class="flex items-center justify-between text-gray-700 font-medium py-2 pl-5">Getting started</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
