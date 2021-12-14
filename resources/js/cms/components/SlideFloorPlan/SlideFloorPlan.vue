<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <transition name="slide-fade">
        <div v-if="show" class="fixed inset-0 overflow-hidden z-40" aria-labelledby="slide-over-title" role="dialog"
             aria-modal="true">

            <div @click="hideSlide" class="absolute inset-0 overflow-hidden bg-gray-500 bg-opacity-50 transition-opacity"></div>

            <div class="fixed inset-y-0 right-0 max-w-full flex">
                    <div v-if="show" class="w-screen max-w-4xl sx:max-w-full">
                        <div class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll z-50">
                            <div class="px-6 mb-6">
                                <div class="flex items-start justify-between">
                                    <h2 class="text-xl font-medium text-gray-900" id="slide-over-title">Overzicht</h2>
                                    <div class="ml-3 h-7 flex items-center">
                                        <button @click="hideSlide" type="button"
                                                class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                            <span class="sr-only">Close panel</span>
                                            <!-- Heroicon name: outline/x -->
                                            <svg class="h-5 w-5 -mt-1 inline-block text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                      d="M6 18L18 6M6 6l12 12"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="grid grid-cols-2">

                                <div class="flex-1 border-r border-gray-200 min-h-screen overflow-x-hidden">
                                    <div>
                                        <div v-if="slide.screen === 'info'">

                                            <h3 class="text-2xl font-bold mb-4 px-6">Persoonsinformatie</h3>

                                            <div class="mb-5 px-6">
                                                <label class="block text-sm font-medium text-gray-700">
                                                    Inschrijfnummer of emailadres
                                                </label>
                                                <div class="mt-1">
                                                    <input @change="getUserInfo" v-model="search" type="text" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                </div>
                                            </div>

                                            <hr class="mb-5">
                                            <div v-if="views.person">
                                                <div class="mb-3 px-6">
                                                    <div class="flex">
                                                        <div class="mr-4 flex-shrink-0 self-center">
                                                      <span class="inline-block h-14 w-14 rounded-full overflow-hidden bg-gray-100">
                                                        <svg v-if="person.picture === 'null'" class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                        </svg>
                                                        <img v-if="person.picture !== 'null'" class="object-center object-cover inline-block h-14 w-14 rounded-md" :src="person.picture" alt="" />
                                                      </span>
                                                        </div>
                                                        <div>
                                                            <p class="font-bold mt-1">{{ person.naam }}</p>
                                                            <a class="text-blue-600 text-sm" :href="'mailto:'+person.email">{{ person.email }}</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <hr class="mb-2">

                                                    <div class="grid grid-cols-2">
                                                        <div class="flex-1 mb-3 px-6">
                                                            <dt class="text-sm font-medium text-gray-500">
                                                                Beroep
                                                            </dt>
                                                            <dd class="mt-1 text-sm text-gray-900 text-gray-900">
                                                                {{ person.beroep }}
                                                            </dd>
                                                        </div>
                                                        <div class="flex-1 mb-3 px-6">
                                                            <dt class="text-sm font-medium text-gray-500">
                                                                Opleiding
                                                            </dt>
                                                            <dd class="mt-1 text-sm text-gray-900 text-gray-900">
                                                                {{ person.opleiding }}
                                                            </dd>
                                                        </div>
                                                    </div>

                                                    <div class="grid grid-cols-2">
                                                        <div class="flex-1 mb-3 px-6">
                                                            <dt class="text-sm font-medium text-gray-500">
                                                                Telefoon
                                                            </dt>
                                                            <a :href="'tel:'+person.telefoon" class="mt-1 text-sm text-blue-600 hover:text-blue-800 text-gray-900">
                                                                {{ person.telefoon }}
                                                            </a>
                                                        </div>
                                                        <div class="flex-1 mb-3 px-6">
                                                            <dt class="text-sm font-medium text-gray-500">
                                                                Mobiel
                                                            </dt>
                                                            <a :href="'tel:'+person.mobiel" class="mt-1 text-sm text-blue-600 hover:text-blue-800 text-gray-900">
                                                                {{ person.mobiel }}
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <hr class="mb-2">

                                                    <div class="grid grid-cols-1">
                                                        <div class="flex-1 mb-3 px-6">
                                                            <dt class="text-sm font-medium text-gray-500">
                                                                Voorkeuren
                                                            </dt>
                                                            <dd class="mt-1 text-sm text-gray-900 text-gray-900">

                                                                <div class="grid grid-cols-2">
                                                                    <div class="flex-1 border-r border-gray-200">
                                                                        <div>
                                                                            <svg v-show="person.wilBerging" xmlns="http://www.w3.org/2000/svg" class="-mt-1 h-5 w-5 text-green-600 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                                            </svg>
                                                                            <svg v-show="!person.wilBerging" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 -mt-1 inline-block text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                                            </svg>
                                                                            Berging
                                                                        </div>
                                                                        <div>
                                                                            <svg v-show="person.wilDeelAuto" xmlns="http://www.w3.org/2000/svg" class="-mt-1 h-5 w-5 text-green-600 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                                            </svg>
                                                                            <svg v-show="!person.wilDeelAuto" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 -mt-1 inline-block text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                                            </svg>
                                                                            Deelauto
                                                                        </div>
                                                                        <div>
                                                                            <svg v-show="person.wilParkeerplaats" xmlns="http://www.w3.org/2000/svg" class="-mt-1 h-5 w-5 text-green-600 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                                            </svg>
                                                                            <svg v-show="!person.wilParkeerplaats" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 -mt-1 inline-block text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                                            </svg>
                                                                            Parkeerplaats
                                                                        </div>
                                                                        <div>
                                                                            <svg v-show="person.wilParkeerplaatsElektrisch" xmlns="http://www.w3.org/2000/svg" class="-mt-1 h-5 w-5 text-green-600 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                                            </svg>
                                                                            <svg v-show="!person.wilParkeerplaatsElektrisch" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 -mt-1 inline-block text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                                            </svg>
                                                                            Elekertische parkeerplaats
                                                                        </div>
                                                                        <div>
                                                                            <svg v-show="person.wilSamenwonen" xmlns="http://www.w3.org/2000/svg" class="-mt-1 h-5 w-5 text-green-600 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                                            </svg>
                                                                            <svg v-show="!person.wilSamenwonen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 -mt-1 inline-block text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                                            </svg>
                                                                            Samenwonen
                                                                        </div>
                                                                        <div>
                                                                            <svg v-show="person.wilSportAbonnement" xmlns="http://www.w3.org/2000/svg" class="-mt-1 h-5 w-5 text-green-600 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                                            </svg>
                                                                            <svg v-show="!person.wilSportAbonnement" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 -mt-1 inline-block text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                                            </svg>
                                                                            Sport abonnement
                                                                        </div>
                                                                    </div>
                                                                    <div class="flex-1 pl-3">
                                                                        <div>
                                                                            <svg v-show="person.wilE_Bike" xmlns="http://www.w3.org/2000/svg" class="-mt-1 h-5 w-5 text-green-600 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                                            </svg>
                                                                            <svg v-show="!person.wilE_Bike" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 -mt-1 inline-block text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                                            </svg>
                                                                            E-Bike
                                                                        </div>
                                                                        <div>
                                                                            <svg v-show="person.wilExtra_Fietsplek" xmlns="http://www.w3.org/2000/svg" class="-mt-1 h-5 w-5 text-green-600 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                                            </svg>
                                                                            <svg v-show="!person.wilExtra_Fietsplek" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 -mt-1 inline-block text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                                            </svg>
                                                                            Extra Fietsplek
                                                                        </div>
                                                                        <div>
                                                                            <svg v-show="person.wilScooterplek" xmlns="http://www.w3.org/2000/svg" class="-mt-1 h-5 w-5 text-green-600 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                                            </svg>
                                                                            <svg v-show="!person.wilScooterplek" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 -mt-1 inline-block text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                                            </svg>
                                                                            Scooterplek
                                                                        </div>
                                                                        <div>
                                                                            <svg v-show="person.wilMotorplek" xmlns="http://www.w3.org/2000/svg" class="-mt-1 h-5 w-5 text-green-600 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                                            </svg>
                                                                            <svg v-show="!person.wilMotorplek" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 -mt-1 inline-block text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                                            </svg>
                                                                            Motorplek
                                                                        </div>
                                                                        <div>
                                                                            <svg v-show="person.roker" xmlns="http://www.w3.org/2000/svg" class="-mt-1 h-5 w-5 text-green-600 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                                            </svg>
                                                                            <svg v-show="!person.roker" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 -mt-1 inline-block text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                                            </svg>
                                                                            Roker
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </dd>
                                                        </div>
                                                    </div>

                                                    <hr class="mb-2">

                                                    <div class="grid grid-cols-1">
                                                        <div class="flex-1 mb-3 px-6">
                                                            <dt class="text-sm font-medium text-gray-500">
                                                                Motivatie
                                                            </dt>
                                                            <dd class="mt-1 text-sm text-gray-900 text-gray-900">
                                                                {{ person.motivatie }}
                                                            </dd>
                                                        </div>
                                                    </div>

                                                    <hr class="mb-2">

                                                    <div class="grid grid-cols-1">
                                                        <div class="flex-1 mb-3 px-6">
                                                            <dt class="text-sm font-medium text-gray-500">
                                                                Afronden
                                                            </dt>
                                                            <dd class="mt-1">
                                                                <button @click.prevent="setSlideScreen('rapport')" type="button" class="mt-1 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-theme hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                                                    Rapport opstellen
                                                                </button>
                                                            </dd>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div v-if="views.startupMessage" class="text-center mx-5 text-sm text-gray-500 p-5 bg-gray-100 rounded">
                                                Zoek een persoon op inschrijfnummer of emailadres
                                            </div>

                                            <div v-if="error !== null" class="text-center mx-5 text-sm text-red-800 p-5 bg-red-50 rounded">
                                                {{ error }}
                                            </div>
                                        </div>

                                        <div v-if="slide.screen === 'rapport'">
                                            <h3 class="text-2xl font-bold mb-4 px-6">Rapport opstellen</h3>

                                            <div class="sm:rounded-md sm:overflow-hidden">
                                                <div class="px-6">

                                                    <div class="mb-5">

                                                        <div class="mb-3">
                                                            <h3 class="text-lg font-medium text-gray-900 mb-1"><span class="text-blue-600">1.</span> BSN controle</h3>
                                                            <div class="mt-1">
                                                                <h5 class="text-sm">BSN</h5>
                                                                <input v-model="form.BSN" @change="checkBSN" type="text" class="mb-2 shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" />

                                                                <h5 class="text-sm">BSN nogmaals</h5>
                                                                <input v-model="form.BSN_check" @keyup="checkBSN" type="text" class="mb-3 shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" />

                                                                <p v-if="formChecks.BSN" class="text-green-500 text-sm">
                                                                    <svg v-if="formChecks.BSN" xmlns="http://www.w3.org/2000/svg" class="-mt-1 h-4 w-4 inline-block" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                                    </svg>
                                                                    BSN gecontroleerd
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <hr class="mb-4 mt-4">

                                                        <h3 class="text-lg font-medium text-gray-900 mb-1"><span class="text-blue-600">2.</span> Voorkeuren</h3>

                                                        <div class="grid grid-cols-2">
                                                            <div class="flex-1 pr-3 border-r border-gray-200">
                                                                <div class="relative flex items-start py-1">
                                                                    <div class="min-w-0 flex-1 text-sm">
                                                                        <label for="wilBerging" class="text-gray-700 select-none cursor-pointer" :class="{ 'text-blue-500': form.wilBerging }">Berging</label>
                                                                    </div>
                                                                    <div class="ml-3 flex items-center h-5">
                                                                        <input v-model="form.wilBerging" id="wilBerging" type="checkbox" class="focus:ring-green-500 h-4 w-4 text-green-600 cursor-pointer border-gray-300 rounded">
                                                                    </div>
                                                                </div>
                                                                <div class="relative flex items-start py-1">
                                                                    <div class="min-w-0 flex-1 text-sm">
                                                                        <label for="wilDeelAuto" class="text-gray-700 select-none cursor-pointer" :class="{ 'text-blue-500': form.wilDeelAuto }">Deelauto</label>
                                                                    </div>
                                                                    <div class="ml-3 flex items-center h-5">
                                                                        <input v-model="form.wilDeelAuto" id="wilDeelAuto" type="checkbox" class="focus:ring-green-500 h-4 w-4 text-green-600 cursor-pointer border-gray-300 rounded">
                                                                    </div>
                                                                </div>
                                                                <div class="relative flex items-start py-1">
                                                                    <div class="min-w-0 flex-1 text-sm">
                                                                        <label for="wilParkeerplaats" class="text-gray-700 select-none cursor-pointer" :class="{ 'text-blue-500': form.wilParkeerplaats }">Parkeerplaats</label>
                                                                    </div>
                                                                    <div class="ml-3 flex items-center h-5">
                                                                        <input v-model="form.wilParkeerplaats" id="wilParkeerplaats" type="checkbox" class="focus:ring-green-500 h-4 w-4 text-green-600 cursor-pointer border-gray-300 rounded">
                                                                    </div>
                                                                </div>
                                                                <div class="relative flex items-start py-1">
                                                                    <div class="min-w-0 flex-1 text-sm">
                                                                        <label for="wilParkeerplaatsElektrisch" class="text-gray-700 select-none cursor-pointer" :class="{ 'text-blue-500': form.wilParkeerplaatsElektrisch }">Parkeerplaats Elektrisch</label>
                                                                    </div>
                                                                    <div class="ml-3 flex items-center h-5">
                                                                        <input v-model="form.wilParkeerplaatsElektrisch" id="wilParkeerplaatsElektrisch" type="checkbox" class="focus:ring-green-500 h-4 w-4 text-green-600 cursor-pointer border-gray-300 rounded">
                                                                    </div>
                                                                </div>
                                                                <div class="relative flex items-start py-1">
                                                                    <div class="min-w-0 flex-1 text-sm">
                                                                        <label for="wilSamenwonen" class="text-gray-700 select-none cursor-pointer" :class="{ 'text-blue-500': form.wilSamenwonen }">Samenwonen</label>
                                                                    </div>
                                                                    <div class="ml-3 flex items-center h-5">
                                                                        <input v-model="form.wilSamenwonen" id="wilSamenwonen" type="checkbox" class="focus:ring-green-500 h-4 w-4 text-green-600 cursor-pointer border-gray-300 rounded">
                                                                    </div>
                                                                </div>
                                                                <div class="relative flex items-start py-1">
                                                                    <div class="min-w-0 flex-1 text-sm">
                                                                        <label for="wilSportAbonnement" class="text-gray-700 select-none cursor-pointer" :class="{ 'text-blue-500': form.wilSportAbonnement }">Sportabonnement</label>
                                                                    </div>
                                                                    <div class="ml-3 flex items-center h-5">
                                                                        <input v-model="form.wilSportAbonnement" id="wilSportAbonnement" type="checkbox" class="focus:ring-green-500 h-4 w-4 text-green-600 cursor-pointer border-gray-300 rounded">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="flex-1 pl-3">
                                                                <div class="relative flex items-start py-1">
                                                                    <div class="min-w-0 flex-1 text-sm">
                                                                        <label for="wilE_Bike" class="text-gray-700 select-none cursor-pointer" :class="{ 'text-blue-500': form.wilE_Bike }">E-Bike</label>
                                                                    </div>
                                                                    <div class="ml-3 flex items-center h-5">
                                                                        <input v-model="form.wilE_Bike" id="wilE_Bike" type="checkbox" class="focus:ring-green-500 h-4 w-4 text-green-600 cursor-pointer border-gray-300 rounded">
                                                                    </div>
                                                                </div>
                                                                <div class="relative flex items-start py-1">
                                                                    <div class="min-w-0 flex-1 text-sm">
                                                                        <label for="wilExtra_Fietsplek" class="text-gray-700 select-none cursor-pointer" :class="{ 'text-blue-500': form.wilExtra_Fietsplek }">Fietsplek</label>
                                                                    </div>
                                                                    <div class="ml-3 flex items-center h-5">
                                                                        <input v-model="form.wilExtra_Fietsplek" id="wilExtra_Fietsplek" type="checkbox" class="focus:ring-green-500 h-4 w-4 text-green-600 cursor-pointer border-gray-300 rounded">
                                                                    </div>
                                                                </div>
                                                                <div class="relative flex items-start py-1">
                                                                    <div class="min-w-0 flex-1 text-sm">
                                                                        <label for="wilScooterplek" class="text-gray-700 select-none cursor-pointer" :class="{ 'text-blue-500': form.wilScooterplek }">Scooterplek</label>
                                                                    </div>
                                                                    <div class="ml-3 flex items-center h-5">
                                                                        <input v-model="form.wilScooterplek" id="wilScooterplek" type="checkbox" class="focus:ring-green-500 h-4 w-4 text-green-600 cursor-pointer border-gray-300 rounded">
                                                                    </div>
                                                                </div>
                                                                <div class="relative flex items-start py-1">
                                                                    <div class="min-w-0 flex-1 text-sm">
                                                                        <label for="wilMotorplek" class="text-gray-700 select-none cursor-pointer" :class="{ 'text-blue-500': form.wilMotorplek }">Motorplek</label>
                                                                    </div>
                                                                    <div class="ml-3 flex items-center h-5">
                                                                        <input v-model="form.wilMotorplek" id="wilMotorplek" type="checkbox" class="focus:ring-green-500 h-4 w-4 text-green-600 cursor-pointer border-gray-300 rounded">
                                                                    </div>
                                                                </div>
                                                                <div class="relative flex items-start py-1">
                                                                    <div class="min-w-0 flex-1 text-sm">
                                                                        <label for="roker" class="text-gray-700 select-none cursor-pointer" :class="{ 'text-blue-500': form.roker }">Roker</label>
                                                                    </div>
                                                                    <div class="ml-3 flex items-center h-5">
                                                                        <input v-model="form.roker" id="roker" type="checkbox" class="focus:ring-green-500 h-4 w-4 text-green-600 cursor-pointer border-gray-300 rounded">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <hr class="mb-4 mt-4">

                                                    <h3 class="text-lg font-medium text-gray-900 mb-1"><span class="text-blue-600">3.</span> Studio bepaling</h3>
                                                    <h5 class="text-sm">Studio voorkeur</h5>
                                                    <input v-model="form.preferredUnit" type="text" class="mb-2 shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" />

                                                    <hr class="mb-4 mt-4">

                                                    <h3 class="text-lg font-medium text-gray-900 mb-1"><span class="text-blue-600">4.</span> Verslag</h3>

                                                    <div class="mb-3">
                                                        <label class="block text-sm font-medium text-gray-700">
                                                            Verslag
                                                        </label>
                                                        <div class="mt-1">
                                                            <textarea v-model="form.report" rows="3" class="shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"></textarea>
                                                        </div>
                                                    </div>

                                                    <div class="mb-3">
                                                        <label class="block text-sm font-medium text-gray-700">
                                                            Opmerking over bewonersapp
                                                        </label>
                                                        <div class="mt-1">
                                                            <textarea v-model="form.reportApp" rows="3" class="shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"></textarea>
                                                        </div>
                                                    </div>

                                                    <hr class="mb-4 mt-4">

                                                    <h3 class="text-lg font-medium text-gray-900 mb-3"><span class="text-blue-600">5.</span> Afronden</h3>

                                                    <div class="mb-4">
                                                        <label  class="block text-sm font-medium text-gray-700">Match</label>
                                                        <select v-model="form.match" name="location" class="mb-2 shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md">
                                                            <option value="" disabled selected>Selecteer een match score</option>
                                                            <option v-for="option in person.match" :value="option.id">{{ option.id }}</option>
                                                        </select>
                                                    </div>
                                                    <div class="mb-4">
                                                        <label  class="block text-sm font-medium text-gray-700">Case handler</label>
                                                        <select v-model="form.handler" name="location" class="mb-2 shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md">
                                                            <option value="" disabled selected>Selecteer een handler</option>
                                                            <option v-for="option in person.handler" :value="option.id">{{ option.id }}</option>
                                                        </select>
                                                    </div>

                                                    <div class="mb-4" v-if="errors.length">
                                                        <p class="font-medium">Fouten gevonden in formulier:</p>
                                                        <ul>
                                                            <li v-for="error in errors" class="text-red-700 text-sm">{{ error }}</li>
                                                        </ul>
                                                    </div>

                                                    <div class="inline-block">
                                                        <button @click="setSlideScreen('info')" type="button" class="mb-5 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                            Terug
                                                        </button>
                                                        <button @click="sendReport" type="button" class="mb-5 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                            Afronden
                                                        </button>
                                                        <span v-if="loading">
                                                            <div class="spinner-border -mt-3 ml-2 mr-1 animate-spin inline-block w-6 h-6 border-4 rounded-full" role="status" style="border-right-color: #2C55A2"></div>
                                                            Loading ...
                                                        </span>
                                                    </div>

                                                </div>
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
    </transition>

</template>

<script>
export default {
    name: "SlidePost",
    data() {
        return {
            search: '',
            error: null,
            person: [],
            views: {
                person: false,
                startupMessage: true
            },
            slide: {
                screen: 'info'
            },
            form: {
                wilBerging: false,
                wilDeelAuto: false,
                wilParkeerplaatsElektrisch: false,
                wilParkeerplaats: false,
                wilSamenwonen: false,
                wilSportAbonnement: false,
                wilE_Bike: false,
                wilExtra_Fietsplek: false,
                wilScooterplek: false,
                wilMotorplek: false,
                roker: false,
                report: '',
                reportApp: '',
                BSN: '',
                BSN_check: '',
                preferredUnit: '',
                location: this.location,
                inschrijfnummer: '',
                handler: '',
                match: '',
            },
            formChecks: {
                BSN: false,
            },
            errors: [],
            loading: false,
        }
    },
    mounted() {
    },
    methods: {
        sendReport() {
            this.loading = true;
            this.errors = [];

            if(!this.formChecks.BSN) this.errors.push('De BSN nummers komen niet met elkaar overeen.');
            if(this.form.handler.length <= 0) this.errors.push('Kies een Handler.');
            if(this.form.match.length <= 0) this.errors.push('Kies een match score.');

            if(!this.errors.length) {
                axiosServices.post('/floorplan/accountinfo', this.form)
                    .then((res) => {
                        this.hideSlide()
                        this.setSlideScreen('info')
                        this.search = ''
                        this.person = []
                        this.views.person = false
                        this.views.startupMessage = true
                        this.form = {
                            wilBerging: false,
                            wilDeelAuto: false,
                            wilParkeerplaatsElektrisch: false,
                            wilParkeerplaats: false,
                            wilSamenwonen: false,
                            wilSportAbonnement: false,
                            wilE_Bike: false,
                            wilExtra_Fietsplek: false,
                            wilScooterplek: false,
                            wilMotorplek: false,
                            roker: false,
                            report: '',
                            reportApp: '',
                            BSN: '',
                            BSN_check: '',
                            preferredUnit: '',
                            location: this.location,
                            inschrijfnummer: '',
                            handler: '',
                            match: '',
                        }
                        this.formChecks.BSN = false
                        this.loading = false;

                        this.$store.dispatch('cms/addNotification', {
                            type: 'success',
                            title: 'Rapport verstuurd',
                            message: 'De gegevens zijn succesvol opgeslagen in Salesforce',
                            timer: 4500
                        });
                    })
                    .catch((err) => {
                        this.loading = false;
                        this.$store.dispatch('cms/addNotification', {
                            type: 'error',
                            title: 'Fout bij insturen',
                            message: err,
                            timer: 10000
                        });
                    })
            } else {
                this.loading = false;
                this.$store.dispatch('cms/addNotification', {
                    type: 'error',
                    title: 'Fout bij insturen',
                    message: 'Er zijn fouten gevonden in het formulier, controleer de fouten onderin het formulier.',
                    timer: 10000
                });
            }
        },
        hideSlide: function () {
            this.$emit('hide')
        },
        setSlideScreen(screen) {
            this.slide.screen = screen;
        },
        togglePreference(preference) {
            this.form[preference] = !this.form[preference];
        },
        checkBSN() {
            if(this.form.BSN.length) {
                this.formChecks.BSN = this.form.BSN === this.form.BSN_check;
            } else {
                this.formChecks.BSN = false;
            }
        },
        syncFormValues() {
            let form = this.form,
                person = this.person;

            // Voorkeuren
            form['wilBerging'] = person.wilBerging;
            form['wilDeelAuto'] = person.wilDeelAuto;
            form['wilParkeerplaatsElektrisch'] = person.wilParkeerplaatsElektrisch;
            form['wilParkeerplaats'] = person.wilParkeerplaats;
            form['wilSamenwonen'] = person.wilSamenwonen;
            form['wilSportAbonnement'] = person.wilSportAbonnement;
            form['wilE_Bike'] = person.wilE_Bike;
            form['wilExtra_Fietsplek'] = person.wilExtra_Fietsplek;
            form['wilScooterplek'] = person.wilScooterplek;
            form['wilMotorplek'] = person.wilMotorplek;
            form['roker'] = person.roker;

            // Other fields
            form['report'] = person.report;
            form['reportApp'] = person.reportApp;
            form['BSN'] = person.BSN;
            form['preferredUnit'] = person.preferredUnit;

            // User
            form['inschrijfnummer'] = person.inschrijfnummer;

            // Unit
            form['preferredUnit'] = this.unit.ID;
        },
        getUserInfo() {
            axiosServices.get('/floorplan/accountinfo', {
                params: {
                    id: this.search
                }
            })
            .then((res) => {
                this.person = res.data
                this.error = null

                this.views.person = true
                this.views.startupMessage = false

                this.syncFormValues();
            })
            .catch((err) => {
                this.error = err.response.data

                this.views.person = false
                this.views.startupMessage = false
            })
        }
    },
    props: ['unit', 'location', 'show']
}
</script>

<style scoped>

</style>
