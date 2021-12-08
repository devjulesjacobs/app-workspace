<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <transition name="slide-fade">
        <div v-if="show" class="fixed inset-0 overflow-hidden z-40" aria-labelledby="slide-over-title" role="dialog"
             aria-modal="true">
            <div @click="hideSlide"
                 class="absolute inset-0 overflow-hidden bg-gray-500 bg-opacity-50 transition-opacity z-40"></div>
            <div class="absolute inset-0 z-50" aria-hidden="true">
                <div class="fixed inset-y-0 right-0 max-w-full flex sm:pl-16">
                    <div v-if="show" class="w-screen max-w-5xl sx:max-w-full">
                        <div class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                            <div class="px-6 mb-6">
                                <div class="flex items-start justify-between">
                                    <h2 class="text-xl font-medium text-gray-900" id="slide-over-title">Studio
                                        overzicht</h2>
                                    <div class="ml-3 h-7 flex items-center">
                                        <button @click="hideSlide" type="button"
                                                class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                            <span class="sr-only">Close panel</span>
                                            <!-- Heroicon name: outline/x -->
                                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                      d="M6 18L18 6M6 6l12 12"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="grid grid-cols-2">

                                <div class="flex-1 border-r border-gray-200 min-h-screen">
                                    <div class="px-6 mb-3">
                                        <h3 class="text-2xl font-bold mb-4">Persoonsinformatie</h3>

                                        <div>
                                            <label for="email" class="block text-sm font-medium text-gray-700">
                                                Email address
                                            </label>
                                            <div class="mt-1">
                                                <input id="email" name="email" type="email" placeholder="Enter email address" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex-1">
                                    <div class="px-6">
                                        <h3 class="text-2xl font-bold">Studio overzicht</h3>
                                        <p class="mb-4 text-sm">{{ unit.Subtype + ' ' + unit.ID + ' op verdieping ' + unit.Verdieping }}</p>
                                    </div>

                                    <hr class="mb-2">

                                    <div class="sm:col-span-1 mb-3 px-6">
                                        <dt class="text-sm font-medium text-gray-500">
                                            Status
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900 text-green-700" :class="unit.Status">
                                            {{ unit.Status }}
                                        </dd>
                                    </div>

                                    <hr class="mb-2">

                                    <div class="sm:col-span-1 mb-3 px-6">
                                        <dt class="text-sm font-medium text-gray-500">
                                            Adres
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900">
                                            {{ unit.Straat + ' ' + unit.Huisnummer + ', ' + location + ', ' + unit.Postcode }}
                                        </dd>
                                    </div>

                                    <hr class="mb-2">

                                    <div class="sm:col-span-1 mb-3 px-6">
                                        <dt class="text-sm font-medium text-gray-500">
                                            Oppervlakte
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900 text-gray-900">
                                            {{ unit.Oppervlak + ' m²' }}
                                        </dd>
                                    </div>

                                    <hr class="mb-2">

                                    <div class="sm:col-span-1 mb-3 px-6">
                                        <dt class="text-sm font-medium text-gray-500">
                                            Type woning
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900 text-gray-900">
                                            {{ unit.Subtype }}
                                        </dd>
                                    </div>

                                    <hr class="mb-2">

                                    <div class="sm:col-span-1 mb-3 px-6">
                                        <dt class="text-sm font-medium text-gray-500">
                                            Balkon
                                        </dt>
                                        <dd class="mt-1 text-sm text-gray-900 text-gray-900">
                                            {{ unit.Balkon ? 'Ja' : 'Nee' }}
                                        </dd>
                                    </div>

                                    <hr class="mb-2">

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>

</template>

<script>
export default {
    name: "SlidePost",
    methods: {
        hideSlide: function () {
            this.$emit('hide')
        },
    },
    props: ['unit', 'location', 'show']
}
</script>

<style scoped>

</style>
