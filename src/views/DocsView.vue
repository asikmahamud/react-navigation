<script setup>
import MainSidebar from '../components/MainSidebar.vue';
</script>
<template>
  <div class="flex dark:bg-gray-800 items-start">
    <!-- main sidebar -->
    <MainSidebar class="w-1/4"/>
    <!-- main sidebar end-->

    <div class="container py-4">
      <div class="">
        <nav class="mb-4">
          <ul class="flex items-center gap-2 dark:text-gray-200">
            <li>
              <a href="#">
               <svg viewBox="0 0 24 24" class="w-4 h-4"><path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" fill="currentColor"></path></svg>
              </a>
            </li>
            
            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/></svg></li>

            <li class="text-xs">
              Fundamentals
            </li>
 
            <li><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/></svg></li>

            <li class="bg-gray-100 dark:bg-gray-500 px-3 py-1 rounded-full text-xs text-violet-800">
              Getting started
            </li>
          </ul>
        </nav>

        <span class="bg-gray-200 dark:bg-gray-50 rounded-lg px-3 py-1 text-xs font-semibold">Version: 6.x</span>
        
        <div class="dark:text-gray-200">
          <h1 class="text-3xl font-bold my-4 md:text-5xl">Getting started</h1>
          <p class="my-5 leading-8 text-base">What follows within the Fundamentals section of this documentation is a tour of the most important aspects of React Navigation. It should cover enough for you to know how to build your typical small mobile application, and give you the background that you need to dive deeper into the more advanced parts of React Navigation.</p>
          <h2 class="flex items-center font-bold text-2xl gap-2 mt-6 group md:text-3xl">
            Pre-requisites
            <a href="#" class="text-violet-800 opacity-0 group-hover:opacity-100 after:absolute after:top-full after:left-0 after:w-0 after:h-0.5 after:bg-violet-800 after:hover:w-full relative transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M9.686 2.511a1.5 1.5 0 0 1 1.303 1.675L10.637 7h3.976l.399-3.186a1.5 1.5 0 0 1 2.977.372L17.637 7H20a1.5 1.5 0 0 1 0 3h-2.738l-.5 4H19.5a1.5 1.5 0 0 1 0 3h-3.113l-.398 3.186a1.5 1.5 0 0 1-2.977-.372L13.363 17H9.387l-.398 3.186a1.5 1.5 0 1 1-2.977-.372L6.363 17H4.5a1.5 1.5 0 1 1 0-3h2.238l.5-4H5a1.5 1.5 0 1 1 0-3h2.613l.399-3.186A1.5 1.5 0 0 1 9.686 2.51ZM13.74 14l.5-4h-3.977l-.5 4h3.976Z"/></g></svg>
            </a>
          </h2>
          <p class="my-5 leading-8 text-base">If you're already familiar with JavaScript, React and React Native, then you'll be able to get moving with React Navigation quickly! If not, we highly recommend you to gain some basic knowledge first, then come back here when you're done.</p>
          <p class="my-5 leading-8 text-base">Here are some resources to help you out:</p>

          <ul class="pl-8">
            <li class="text-base list-decimal"><a href="#" class="text-violet-800">React Native Express </a>(Sections 1 to 4)</li>
            <li class="text-base list-decimal"><a href="#" class="text-violet-800">Main Concepts of React</a></li>
            <li class="text-base list-decimal"><a href="#" class="text-violet-800">React Hooks</a></li>
            <li class="text-base list-decimal"><a href="#" class="text-violet-800">React Context </a>(Advanced)</li>
          </ul>

          <h2 class="flex items-center font-bold text-2xl gap-2 my-6 group md:text-3xl">
            Minimum requirements
            <a href="#" class="text-violet-800 opacity-0 group-hover:opacity-100 after:absolute after:top-full after:left-0 after:w-0 after:h-0.5 after:bg-violet-800 after:hover:w-full relative transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M9.686 2.511a1.5 1.5 0 0 1 1.303 1.675L10.637 7h3.976l.399-3.186a1.5 1.5 0 0 1 2.977.372L17.637 7H20a1.5 1.5 0 0 1 0 3h-2.738l-.5 4H19.5a1.5 1.5 0 0 1 0 3h-3.113l-.398 3.186a1.5 1.5 0 0 1-2.977-.372L13.363 17H9.387l-.398 3.186a1.5 1.5 0 1 1-2.977-.372L6.363 17H4.5a1.5 1.5 0 1 1 0-3h2.238l.5-4H5a1.5 1.5 0 1 1 0-3h2.613l.399-3.186A1.5 1.5 0 0 1 9.686 2.51ZM13.74 14l.5-4h-3.977l-.5 4h3.976Z"/></g></svg>
            </a>
          </h2>

          <ul class="pl-8">
            <li class="text-base list-disc mb-2">
              <code class="bg-gray-50 dark:bg-gray-500 dark:border-gray-500 border rounded-md p-0.5">react-native</code>
              >= 0.63.0
            </li>

            <li class="text-base list-disc mb-2">
              <code class="bg-gray-50 dark:bg-gray-500 dark:border-gray-500 border rounded-md p-0.5">expo</code>
              >= 41 (if you use <a href="#" class="text-violet-800">Expo</a>)
            </li>

            <li class="text-base list-disc mb-2">
              <code class="bg-gray-50 dark:bg-gray-500 dark:border-gray-500 border rounded-md p-0.5">typescript</code>
              >= 4.1.0 (if you use <a href="#" class="text-violet-800">TypeScript</a>)
            </li>
          </ul>

          <h2 class="flex items-center font-bold text-2xl gap-2 my-6 group md:text-3xl">
            Installation
            <a href="#" class="text-violet-800 opacity-0 group-hover:opacity-100 after:absolute after:top-full after:left-0 after:w-0 after:h-0.5 after:bg-violet-800 after:hover:w-full relative transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M9.686 2.511a1.5 1.5 0 0 1 1.303 1.675L10.637 7h3.976l.399-3.186a1.5 1.5 0 0 1 2.977.372L17.637 7H20a1.5 1.5 0 0 1 0 3h-2.738l-.5 4H19.5a1.5 1.5 0 0 1 0 3h-3.113l-.398 3.186a1.5 1.5 0 0 1-2.977-.372L13.363 17H9.387l-.398 3.186a1.5 1.5 0 1 1-2.977-.372L6.363 17H4.5a1.5 1.5 0 1 1 0-3h2.238l.5-4H5a1.5 1.5 0 1 1 0-3h2.613l.399-3.186A1.5 1.5 0 0 1 9.686 2.51ZM13.74 14l.5-4h-3.977l-.5 4h3.976Z"/></g></svg>
            </a>
          </h2>
          <p class="my-5 leading-8 text-base">Install the required packages in your React Native project:</p>

          <div>
            <ul class="flex items-center gap-1">
              <li class="text-base font-semibold hover:bg-gray-100 dark:hover:bg-gray-600 p-4 rounded-md relative after:absolute after:top-full after:left-0 after:w-full after:h-0.5 after:bg-violet-800 transition">npm</li>
              <li class="text-base font-semibold hover:bg-gray-100 dark:hover:bg-gray-600 p-4 rounded-md transition">Yarn</li>
            </ul>

            <div class="py-6">
              <code class="bg-gray-200 dark:bg-gray-600 p-4 w-full block rounded-md relative group">
                <span>npm install</span> @react-navigation/native

                <button class="border-2 border-gray-200 hidden group-hover:block p-1.5 opacity-30 hover:opacity-100 bg-white rounded-md absolute top-1/2 -translate-y-1/2 right-2 dark:bg-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1Z"/></svg>
                </button>
              </code>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/4 pl-5 sticky top-20 hidden lg:block">
        <ul class="pl-5 border-l">
          <li><a href="#" class="text-xs text-gray-600 dark:text-gray-200 hover:text-violet-800 transition">Pre-requisites</a></li>
          <li><a href="#" class="text-xs text-gray-600 dark:text-gray-200 hover:text-violet-800 transition">Minimum requirements</a></li>
          <li>
            <a href="#" class="text-xs text-gray-600 dark:text-gray-200 hover:text-violet-800 transition">Installation
             <ul class="pl-4">
              <li>
                <a href="#" v-for="n in 4" :key="n" class="text-xs text-gray-600 dark:text-gray-200 leading-6 hover:text-violet-800 transition">Installing dependencies into an Expo managed project</a>
              </li>
             </ul>
            </a>
          </li>
          <li>
            <a href="#" class="text-xs text-gray-600 dark:text-gray-200 hover:text-violet-800 transition">
              Wrapping your app in 
              <code class="bg-gray-50 dark:bg-gray-600 dark:border-gray-600 border rounded-md p-0.5">NavigationContainer</code>
            </a>
          </li>
        </ul>
      </div>
  </div>
</template>
