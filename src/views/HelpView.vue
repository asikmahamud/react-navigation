<script setup>

</script>

<template>
    <div class="dark:bg-gray-800 flex h-[75vh]">
        <div class="container py-10 md:pt-28 h-ful">
            <h2 class="text-2xl font-bold mb-4 dark:text-gray-200">Need help?</h2>
            <p class="leading-8 dark:text-gray-200">If you've encountered a bug with React Navigation, please 
                <a href="#" class="text-violet-800 hover:underline transition">post an issue</a> 
                and be sure to fill out the issue template. If you believe there is a feature missing, please 
                <a href="#" class="text-violet-800 hover:underline transition">create a feature request on Canny,</a>
                or if you're feeling up for the task of proposing an API for the feature, 
                <a href="#" class="text-violet-800 hover:underline transition">submit a RFC!</a>
                If you just need some help, try joining us in the <span class="py-0.5 px-3 border bg-gray-100 rounded-md dark:bg-gray-600 dark:border-gray-600">react-navigation</span> channel on
                <a href="#" class="text-violet-800 hover:underline transition">Discord or post a question to StackOverflow.</a>
            </p>

            <div class="grid md:grid-cols-3 gap-10 pt-10">
                <div class="dark:text-gray-200">
                    <h2 class="text-xl font-bold mb-2">Browse Docs and API</h2>
                    <p class="leading-7">Learn more using the
                        <a href="#" class="text-violet-800 hover:underline transition">documentation on this site.</a> 
                    </p>
                </div>

                <div class="dark:text-gray-200">
                    <h2 class="text-xl font-bold mb-2">Join the community</h2>
                    <p class="leading-7">Ask questions about the documentation and project in the `#help-react-native` channel on the
                        <a href="#" class="text-violet-800 hover:underline transition"> Reactiflux Discord.</a> 
                    </p>
                </div>

                <div class="dark:text-gray-200">
                    <h2 class="text-xl font-bold mb-2">Browse Docs and API</h2>
                    <p class="leading-7">Read the release notes for new versions of React Navigation in the
                        <a href="#" class="text-violet-800 hover:underline transition">releases tab on the Github repository.</a> 
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>