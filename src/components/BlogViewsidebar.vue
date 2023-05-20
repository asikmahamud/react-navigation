<script setup>

</script>

<template>
    <div class="w-1/5 pl-5 py-8 sticky top-16 hidden lg:block">
        <ul class="pl-5 border-l dark:border-l dark: border-gray-400">
            <li>
                <a href="#" class="text-xs text-gray-600 dark:text-gray-200 dark:hover:text-violet-700 hover:text-violet-800 transition">Highlights</a>
                <ul class="pl-4">
                    <li class="flex flex-col">
                        <a href="#" v-for="n in 4" :key="n" class="text-xs text-gray-600 dark:text-gray-200 leading-6 hover:text-violet-800  dark:hover:text-violet-800 transition">More flexible</a>
                    </li>
                    <li class="flex flex-col">
                        <a href="#" v-for="n in 4" :key="n" class="text-xs text-gray-600 dark:text-gray-200 leading-6 hover:text-violet-800  dark:hover:text-violet-800 transition">existing functionality</a>
                    </li>
                    <li class="flex flex-col">
                        <a href="#" v-for="n in 4" :key="n" class="text-xs text-gray-600 dark:text-gray-200 leading-6 hover:text-violet-800  dark:hover:text-violet-800 transition">default</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" class="text-xs text-gray-600 dark:text-gray-200 dark:hover:text-violet-700 hover:text-violet-800 transition">Upgrading</a>
            </li>
            <li>
                <a href="#" class="text-xs text-gray-600 dark:text-gray-200 dark:hover:text-violet-700 hover:text-violet-800 transition">UpgSponsor us</a>
            </li>
        </ul>
    </div>
</template>