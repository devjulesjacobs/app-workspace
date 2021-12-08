<template>
    <div class="state-floorplan">

        <div class="mb-5">
            <h1 class="text-2xl font-bold mr-4 inline-block">{{ im.location }}</h1>
            <select v-model="im.floor" @change="getCoords" class="pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed">
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

            <div v-if="views.floorplan" class="floor-plan mb-10">
                <img :src="'/img/floorplans/ulr/Ulr-'+im.floor+'.png'" alt="" class="shadow-xl">
                <div id="imagemap" class="imagemap">
                    <div v-for="c in im.coords" :key="c.ID" @click="getUnit(c.ID, im.location)" class="unit" :class="c.Status" :style="{ width: c.w+'px', height: c.h+'px', top: c.y+'px', left: c.x+'px' }">
                        <div class="text-temp text-sm font-bold">{{ c.Huisnummer }}</div>
                    </div>
                </div>
            </div>

        </div>

        <SlideFloorPlan :show="slide.show"
                        :unit="unit"
                        :location="im.location"
                        @refresh="getCoords"
                        @hide="hideSlide()" />
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
                floor: 0,
                coords: null
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
            .then((res) => {
                app.im.coords = res.data;
            })
            .catch((err) => { console.log(err) })
        },

        getUnit(ID, location) {
            this.slide.show = true;

            let config = {
                params: { unit: ID, location: location }
            }

            axiosServices.get('/unitinformation', config)
            .then((res) => {
                this.unit = res.data
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
