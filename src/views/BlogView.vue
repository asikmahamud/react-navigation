<script setup>
import BlogSidebar from '../components/BlogSidebar.vue';
import BlogViewsidebar from '../components/BlogViewsidebar.vue';
</script>

<template>
    <div class="items-start dark:bg-gray-800">
        <div class="container flex items-start">
           <BlogSidebar class="w-1/3"/>

            <div class="py-8">
                <div class="pb-8">
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
                                <li><a href="#" class="py-1 px-3 border bg-ray-100 dark:bg-gray-600 dark:border-gray-600 rounded-md">release</a></li>
                                <li><a href="#" class="py-1 px-3 border bg-ray-100 dark:bg-gray-600 dark:border-gray-600 rounded-md">announcement</a></li>
                            </ul>
                        </div>
                        <button class="text-base font-bold text-[#6B52AE] hover:underline transition w-24 sm:w-auto">Read More</button>
                    </div>
                </div>
                <h2 class="flex items-center font-bold text-2xl gap-2 mt-6 group sm:text-3xl dark:text-gray-200">
                    Highlights
                    <a href="#" class="text-violet-800 opacity-0 group-hover:opacity-100 after:absolute after:top-full after:left-0 after:w-0 after:h-0.5 after:bg-violet-800 after:hover:w-full relative transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M9.686 2.511a1.5 1.5 0 0 1 1.303 1.675L10.637 7h3.976l.399-3.186a1.5 1.5 0 0 1 2.977.372L17.637 7H20a1.5 1.5 0 0 1 0 3h-2.738l-.5 4H19.5a1.5 1.5 0 0 1 0 3h-3.113l-.398 3.186a1.5 1.5 0 0 1-2.977-.372L13.363 17H9.387l-.398 3.186a1.5 1.5 0 1 1-2.977-.372L6.363 17H4.5a1.5 1.5 0 1 1 0-3h2.238l.5-4H5a1.5 1.5 0 1 1 0-3h2.613l.399-3.186A1.5 1.5 0 0 1 9.686 2.51ZM13.74 14l.5-4h-3.977l-.5 4h3.976Z"/></g></svg>
                    </a>
                </h2>

                <h2 class="flex items-center font-bold text-2xl gap-2 mt-6 group dark:text-gray-200">
                    More flexible navigators
                    <a href="#" class="text-violet-800 opacity-0 group-hover:opacity-100 after:absolute after:top-full after:left-0 after:w-0 after:h-0.5 after:bg-violet-800 after:hover:w-full relative transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M9.686 2.511a1.5 1.5 0 0 1 1.303 1.675L10.637 7h3.976l.399-3.186a1.5 1.5 0 0 1 2.977.372L17.637 7H20a1.5 1.5 0 0 1 0 3h-2.738l-.5 4H19.5a1.5 1.5 0 0 1 0 3h-3.113l-.398 3.186a1.5 1.5 0 0 1-2.977-.372L13.363 17H9.387l-.398 3.186a1.5 1.5 0 1 1-2.977-.372L6.363 17H4.5a1.5 1.5 0 1 1 0-3h2.238l.5-4H5a1.5 1.5 0 1 1 0-3h2.613l.399-3.186A1.5 1.5 0 0 1 9.686 2.51ZM13.74 14l.5-4h-3.977l-.5 4h3.976Z"/></g></svg>
                    </a>
                </h2>
                <p class="my-5 leading-8 text-base dark:text-gray-200">Navigators accept many of their customization options as props, which means we can’t customize them based on the active screen. To make this level of control possible, we needed to move these props to options that you can configure per screen.</p>
                <p class="my-5 leading-8 text-base dark:text-gray-200">n React Navigation 6, many of these props are now screen options. The most significant changes are <span class="py-1 px-3 border bg-gray-100 rounded-md dark:bg-gray-600 dark:border-gray-600">tabBarOptions</span> and <span class="py-1 px-3 border bg-gray-100 rounded-md dark:bg-gray-600 dark:border-gray-600">drawerContentOptions</span>, which now all live on options instead. For example:</p>

                <div class="flex justify-end">
                    <button class="flex items-center justify-end w-60 p-3 text-violet-800 border rounded-md hover:border-violet-800 transition  dark:text-gray-200 dark:bg-violet-800 dark:border-violet-800 dark:hover:bg-transparent dark:hover:text-violet-800">
                        Older Entries
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="m19.164 12l-6.207-6.207l-1.414 1.414L16.336 12l-4.793 4.793l1.414 1.414L19.164 12Zm-5.65 0L7.307 5.793L5.893 7.207L10.686 12l-4.793 4.793l1.414 1.414L13.514 12Z"/></svg>
                    </button>
                </div>
            </div>

            <BlogViewsidebar/>
        </div>
    </div>
</template>