
<script setup>
import { useStore } from '../stores/main';

const store = useStore()

</script>

<template>
    <div class="flex items-center justify-between dark:bg-[#333] dark:text-white bg-white shadow-md px-5 py-2">
        <div class="flex items-center gap-5">
            <button @click="store.mobileMenu = !store.mobileMenu" class="lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z"/></svg>
            </button>  

            <RouterLink to="/" class="flex items-center gap-3">
                <div class="h-8 w-8 flex-shrink-0">
                    <img src="../assets/image/spiro.svg" class="h-full w-full object-contain" alt="">
                </div>
                <h1 class="text-base font-medium hover:text-violet-500 transition">React Navigation</h1>
            </RouterLink>

            <nav class="items-center text-base font-medium gap-5 hidden lg:flex">
                <RouterLink to="/docs" class="hover:text-violet-500 transition">Docs</RouterLink>
                <RouterLink to="/blog" class="hover:text-violet-500 transition">Blog</RouterLink>
                <RouterLink to="/help" class="hover:text-violet-500 transition">Help</RouterLink>
                <RouterLink to="#" class="flex items-center py-3 transition relative group">
                   <span class="hover:text-violet-500 transition">6.x</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="currentColor" d="m7 10l5 5l5-5H7z"/></svg>
                    </span>
                    <ul class="p-2 w-40 absolute top-full left-0 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 dark:bg-gray-600">
                        <li><a href="#" class="block py-1 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-500 text-base font-medium transition">7.x</a></li>
                        <li><a href="#" class="block py-1 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-500 text-base font-medium transition">6.x</a></li>
                        <li><a href="#" class="block py-1 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-500 text-base font-medium transition">5.x</a></li>
                        <li><a href="#" class="block py-1 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-500 text-base font-medium transition">4.x</a></li>
                        <li><a href="#" class="block py-1 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-500 text-base font-medium transition">3.x</a></li>
                        <li><a href="#" class="block py-1 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-500 text-base font-medium transition">2.x</a></li>
                        <li><a href="#" class="block py-1 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-500 text-base font-medium transition">1.x</a></li>
                        <li><a href="#" class="block py-1 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-500 text-base font-medium transition">All versions</a></li>
                    </ul>
                </RouterLink>
            </nav>
        </div>

        <div class="flex items-center gap-5">
            <a href="https://github.com/" class="items-center gap-2 text-base font-medium hover:text-violet-500 transition hidden lg:flex">
              GitHub
              <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
            </a>

            <!-- dark btn -->
            <button @click="store.darkMode=!store.darkMode" class="hover:bg-gray-200 p-1 rounded-full transition hidden lg:block dark:hover:text-[#333]">
                <svg class="darkMode" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"></path></svg>
                <svg viewBox="0 0 24 24" width="24" height="24" class="hidden"><path fill="currentColor" d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"></path></svg>
            </button>
            <!-- dark btn end -->

            <!-- search box -->
            <div>
                <button @click="store.dropDown = !store.dropDown" class="flex items-center bg-gray-200 h-9 rounded-[40px] justify-between px-2 border-2 border-transparent group hover:border-purple-700 hover:bg-white transition dark:text-gray-800">
                    <svg width="20" height="20" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    <span class="text-base font-medium text-gray-400 group-hover:text-gray-900 pl-1.5 pr-3 transition hidden sm:block">Search</span>
                    <span class="items-center gap-1 hidden sm:flex">
                        <kbd class="h-5 w-5 shadow-sm rounded-sm bg-white group-hover:bg-gray-100 text-xs flex items-center justify-center">
                          <svg width="15" height="15"><path d="M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953" stroke-width="1.2" stroke="currentColor" fill="none" stroke-linecap="square"></path></svg>
                        </kbd>
                        <kbd class="h-5 w-5 shadow-sm rounded-sm bg-white group-hover:bg-gray-100 text-xs flex items-center justify-center font-normal">K</kbd>
                    </span>
                </button>
            </div>
            <!-- search box end -->
        </div>
    </div>
</template>