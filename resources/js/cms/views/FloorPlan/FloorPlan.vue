<template>
    <div class="state-floorplan rounded-md shadow-xl bg-white p-5">

        <div class="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
            <h3 class="ml-2 mt-2 text-lg leading-6 font-medium text-gray-900">
                Floorplan
            </h3>
            <p class="ml-2 mt-1 text-sm text-gray-500 truncate">{{ im.location }}</p>
            <div class="mt-3 flex sm:mt-0 sm:ml-4">
                <button @click="refreshCoords" type="button"
                        class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Refresh
                </button>
            </div>
        </div>

        <div class="my-5">
            <select v-model="im.floor" @change="getCoords" class="cursor-pointer pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed">
                <option value="-2">Verdieping -2</option>
                <option value="-1">Verdieping -1</option>
                <option value="0">Begane grond</option>
                <option value="1">Verdieping 1</option>
                <option value="2">Verdieping 2</option>
                <option value="3">Verdieping 3</option>
                <option value="4">Verdieping 4</option>
                <option value="5">Verdieping 5</option>
                <option value="6">Verdieping 6</option>
                <option value="7">Verdieping 7</option>
            </select>
        </div>

        <div id="floor-plan">

            <div v-if="views.floorplan" class="floor-plan mb-10 m-auto">
                <img :src="'/img/floorplans/ulr/Ulr-'+im.floor+'.png'" alt="" class="shadow-xl">
                <div id="imagemap" class="imagemap">
                    <div v-for="c in im.coords" :key="c.ID" @click="getUnit(c.ID, im.location)" class="unit"
                         :class="c.Status"
                         :style="{ width: c.w+'px', height: c.h+'px', top: c.y+'px', left: c.x+'px' }">
                        <div class="text-temp text-sm font-bold">{{ c.Huisnummer }}</div>
                    </div>
                </div>
            </div>

        </div>

        <SlideFloorPlan :show="slide.show"
                        :unit="unit"
                        :location="im.location"
                        @refresh="getCoords"
                        @hide="hideSlide()" ref="myChild"/>
    </div>
</template>

<script>
import SlideFloorPlan from '../../components/SlideFloorPlan/SlideFloorPlan'

export default {
    name: "FloorPlan",
    data() {
        return {
            im: {
                location: 'Utrecht Leidsche Rijn',
                coords: null,
                floor: 0,
                floors: ['-2', '-1', '0', '1', '2', '3', '4', '5', '6', '7'],
            },
            unit: [],
            views: {
                index: false,
                floors: false,
                floorplan: true
            },
            slide: {
                show: false
            }
        }
    },

    mounted() {
        this.getCoords();
    },

    methods: {
        getCoords() {
            let app = this;

            let config = {
                params: {
                    level: this.im.floor,
                    location: this.im.location,
                }
            }

            axiosServices.get('/floorplangetunits', config)
                .then((res) => { app.im.coords = res.data })
                .catch((err) => { console.log(err) })
        },

        refreshCoords() {
            this.im.coords = null;
            this.getCoords();

            let app  = this;

            setTimeout(function () {
                app.$store.dispatch('cms/addNotification', {
                    type: 'success',
                    title: 'Floorplan Refreshed',
                    timer: 2500
                })
            }, 200)
        },

        getUnit(ID, location) {
            this.slide.show = true;

            let config = {
                params: {unit: ID, location: location}
            }

            axiosServices.get('/unitinformation', config)
                .then((res) => {
                    this.unit = res.data
                    this.$refs.myChild.syncFormValues();
                })
                .catch((err) => { console.log(err) })
        },

        hideSlide() {
            this.slide.show = false;
        }
    },

    components: {
        SlideFloorPlan
    }
}
</script>

<style scoped>
.floor-plan {
    position: relative;
    width: 938px;
    height: 524px;
}

.floor-plan img {
    width: 938px;
    height: 524px;
    object-fit: contain;
}
</style>
