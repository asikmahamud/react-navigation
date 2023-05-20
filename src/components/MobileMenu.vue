<script setup>
  import { computed, ref, watch } from 'vue';
import { useStore } from '../stores/main';
import { useRouter } from 'vue-router';

  const router = useRouter()


const isBlog = ref(false)
  const currentRouteName = computed(() => router.currentRoute.value.name)

  const store = useStore()

  watch(currentRouteName, async (newRoute, oldRoute) => {
        if(newRoute === 'blog'){
            isBlog.value = true
        }else{
            isBlog.value = false
        }
    })
    const show = ref(false)
</script>

<template>
    <div v-if="store.mobileMenu" class="bg-gray-700 bg-opacity-60 z-40 fixed inset-0 lg:hidden">
        <div class="w-4/5 h-full bg-white dark:bg-gray-800">
            <div class="bg-white dark:bg-gray-900 p-3 border-b dark:border-none flex items-center justify-between">
                <div class="flex items-center gap-6">
                    <RouterLink to="/" class="flex items-center gap-3">
                        <div class="h-8 w-8 flex-shrink-0">
                            <img src="../assets/image/spiro.svg" class="h-full w-full object-contain" alt="">
                        </div>
                        <h1 class="text-base font-medium hover:text-violet-500 transition dark:text-gray-200">React Navigation</h1>
                    </RouterLink>
                    <!-- dark btn -->
                    <button @click="store.darkMode=!store.darkMode" class="hover:bg-gray-200 p-1 rounded-full transition dark:hover:text-[#333]">
                        <svg v-if="store.darkMode" class="text-gray-100" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"></path></svg>
                        <svg v-else viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"></path></svg>
                    </button>
                    <!-- dark btn end -->
                </div>

                <button @click="store.mobileMenu = !store.mobileMenu" class="p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="gray" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z"/></svg>
                </button>
            </div>

            <div class="p-2" v-if="!isBlog">
                <ul class="dark:text-gray-200">
                    <li><RouterLink to="/docs" class="block hover:bg-gray-200 dark:hover:bg-gray-700 py-2 px-2 rounded-md transition">Docs</RouterLink></li>
                    <li><RouterLink to="/blog" class="block hover:bg-gray-200 dark:hover:bg-gray-700 py-2 px-2 rounded-md transition">Blog</RouterLink></li>
                    <li>
                        <a href="https://github.com/" class="items-center gap-2 flex hover:bg-gray-200 dark:hover:bg-gray-700 py-2 px-2 rounded-md transition">
                        GitHub
                        <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
                        </a>
                    </li>
                    <li><RouterLink to="/help" class="block hover:bg-gray-200 dark:hover:bg-gray-700 py-2 px-2 rounded-md transition">Help</RouterLink></li>
                    <li>
                        <button @click="show=!show" href="#" class="w-full hover:bg-gray-200 dark:hover:bg-gray-700 py-2 px-2 rounded-md transition flex items-center justify-between">
                            Versions
                            <svg :class="{'rotate-90' : show}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="gray" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"></path></svg>
                        </button>
                        <ul v-show="show" class="pl-4">
                            <li><a href="#" class="block hover:bg-gray-200 dark:hover:bg-gray-700 py-2 px-2 rounded-md transition">7.x</a></li>
                            <li><a href="#" class="block hover:bg-gray-200 dark:hover:bg-gray-700 py-2 px-2 rounded-md transition">6.x</a></li>
                            <li><a href="#" class="block hover:bg-gray-200 dark:hover:bg-gray-700 py-2 px-2 rounded-md transition">5.x</a></li>
                            <li><a href="#" class="block hover:bg-gray-200 dark:hover:bg-gray-700 py-2 px-2 rounded-md transition">4.x</a></li>
                            <li><a href="#" class="block hover:bg-gray-200 dark:hover:bg-gray-700 py-2 px-2 rounded-md transition">3.x</a></li>
                            <li><a href="#" class="block hover:bg-gray-200 dark:hover:bg-gray-700 py-2 px-2 rounded-md transition">2.x</a></li>
                            <li><a href="#" class="block hover:bg-gray-200 dark:hover:bg-gray-700 py-2 px-2 rounded-md transition">1.x</a></li>
                            <li><a href="#" class="block hover:bg-gray-200 dark:hover:bg-gray-700 py-2 px-2 rounded-md transition">All versions</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div v-if="isBlog">
                <button @click="isBlog=false" class="w-full flex items-start px-5 py-2 dark:text-gray-200 bg-[#F0EDF7] dark:bg-gray-600 dark:hover:bg-gray-700">← Back to main menu</button>
                <ul class="pl-4 dark:text-gray-200 text-gray-600">
                    <li><a href="#" class="block hover:bg-gray-200 dark:hover:bg-gray-700 py-2 px-2 rounded-md transition">React Navigation 6.0</a></li>
                    <li><a href="#" class="block hover:bg-gray-200 dark:hover:bg-gray-700 py-2 px-2 rounded-md transition">On the way to React Navigation 6.0</a></li>
                    <li><a href="#" class="block hover:bg-gray-200 dark:hover:bg-gray-700 py-2 px-2 rounded-md transition">React Navigation joins GitHub Sponsors</a></li>
                    <li><a href="#" class="block hover:bg-gray-200 dark:hover:bg-gray-700 py-2 px-2 rounded-md transition">React Navigation on the Web</a></li>
                    <li><a href="#" class="block hover:bg-gray-200 dark:hover:bg-gray-700 py-2 px-2 rounded-md transition">React Navigation 5.0 - A new way to navigate</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>