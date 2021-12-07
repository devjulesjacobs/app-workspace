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
                <img :src="'/img/floorplans/ulr/ULR-'+im.floor+'-FLOOR.png'" alt="" class="shadow-xl">
                <div id="imagemap" class="imagemap">
                    <div v-for="c in im.coords" :key="c.ID" @click="getUnit(c.ID, im.location)" class="unit" :class="c.Status" :style="{ width: c.w+'px', height: c.h+'px', top: c.y+'px', left: c.x+'px' }">
                        <div class="text-temp text-sm font-bold">{{ c.Huisnummer }}</div>
                    </div>
                </div>
            </div>

        </div>

        <div>
            <h1 class="font-bold text-2xl">Clicked unit info</h1>
            <div>
                <pre>{{ unit }}</pre>
            </div>
        </div>

    </div>
</template>

<script>

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
            let config = {
                params: { unit: ID, location: location }
            }

            axiosServices.get('/unitinformation', config)
            .then((res) => {
                this.unit = res.data
            })
            .catch((err) => { console.log(err) })
        },
    }
}
</script>

<style scoped>

</style>
