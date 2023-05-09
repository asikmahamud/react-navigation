<script setup>
import BlogSidebar from '../components/BlogSidebar.vue';
</script>

<template>
    <div class="dark:bg-gray-800">
        <div class="container grid lg:grid-cols-12 items-start">
           <BlogSidebar/>

            <div class="col-span-6 py-8">
                <div v-for="n in 5" :key="n" class="pb-20">
                    <h2 class="mb-4">
                        <RouterLink to="/blog-view" class="font-bold text-3xl text-[#6B52AE] hover:underline transition md:text-5xl">React Navigation 6.0</RouterLink>
                    </h2>
                    <span class="text-sm dark:text-gray-200">August 14, 2021 · 6 min read</span>

                    <div class="flex items-center gap-3 py-5">
                        <img src="../assets/image/1174278.png" class="w-12 h-12 rounded-full object-contain" alt="">
                        <div>
                            <h4>
                                <RouterLink to="/" class="text-[#6B52AE] font-semibold text-base hover:underline transition">Satyajit Sahoo</RouterLink>
                            </h4>
                            <span class="text-sm dark:text-gray-200">Core Team</span>
                        </div>
                    </div>
                    <p class="text-base mb-5 dark:text-gray-200">The documentation is now live at <a href="#" class="text-[#6B52AE]">reactnavigation.org</a>, and v5 lives<a href="#" class="text-[#6B52AE]">here.</a></p>
                    <p class="text-base mb-5 leading-8 dark:text-gray-200">React Navigation 6 keeps mostly the same core API as React Navigation 5, and you can think of it as further polishing what was in React Navigation 5. Let's talk about the highlights of this release in this blog post.</p>
                    
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2 flex-wrap">
                            <p class="text-base font-semibold dark:text-gray-200">Tags:</p>
                            <ul class="flex items-center gap-2 flex-wrap dark:text-gray-200">
                                <li><a href="#" class="py-1 px-3 border bg-gray-100 dark:bg-gray-600 dark:border-gray-600 rounded-md">release</a></li>
                                <li><a href="#" class="py-1 px-3 border bg-gray-100 dark:bg-gray-600 dark:border-gray-600 rounded-md">announcement</a></li>
                            </ul>
                        </div>
                        <button class="text-base font-bold text-[#6B52AE] hover:underline transition w-24 sm:w-auto">Read More</button>
                    </div>
                </div>s

                <div class="flex justify-end">
                    <button class="flex items-center justify-end w-60 p-3 text-violet-800 border rounded-md hover:border-violet-800 transition dark:bg-violet-800 dark:text-gray-200 dark:border-violet-800 dark:hover:bg-transparent dark:hover:text-violet-800">
                        Older Entries
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="m19.164 12l-6.207-6.207l-1.414 1.414L16.336 12l-4.793 4.793l1.414 1.414L19.164 12Zm-5.65 0L7.307 5.793L5.893 7.207L10.686 12l-4.793 4.793l1.414 1.414L13.514 12Z"/></svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>