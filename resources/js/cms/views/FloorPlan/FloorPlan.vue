<template>
    <div class="state-floorplan">

        <h1 class="text-2xl font-bold mb-5">Utrecht Leidsche Rijn</h1>

        <div id="floor-plan">
            <div class="floor-plan">
                <img src="/img/floorplans/ulr/ULR-0-floorplan.png" alt="" class="shadow-xl">

                <div id="imagemap"></div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "FloorPlan",
    data() {
        return {
            views: {

            },
            coords: [
                {
                unit: 1,
                x1: 116,
                y1: 5,
                x2: 144,
                y2: 82
                },
                {
                    unit: 3,
                    x1: 147,
                    y1: 5,
                    x2: 177,
                    y2: 82
                },
                {
                    unit: 5,
                    x1: 179,
                    y1: 5,
                    x2: 209,
                    y2: 82
                },
                {
                    unit: 7,
                    x1: 211,
                    y1: 5,
                    x2: 240,
                    y2: 82
                },
                {
                    unit: 9,
                    x1: 244,
                    y1: 5,
                    x2: 272,
                    y2: 82
                },
                {
                    unit: 11,
                    x1: 340,
                    y1: 5,
                    x2: 369,
                    y2: 82
                },
                {
                    unit: 13,
                    x1: 372,
                    y1: 5,
                    x2: 400,
                    y2: 82
                },
                {
                    unit: 15,
                    x1: 506,
                    y1: 5,
                    x2: 535,
                    y2: 82
                },
                {
                    unit: 17,
                    x1: 538,
                    y1: 5,
                    x2: 567,
                    y2: 82
                },
                {
                    unit: 19,
                    x1: 570,
                    y1: 5,
                    x2: 599,
                    y2: 82
                },
                {
                    unit: 21,
                    x1: 604,
                    y1: 133,
                    x2: 633,
                    y2: 210
                },
                {
                    unit: 23,
                    x1: 636,
                    y1: 133,
                    x2: 665,
                    y2: 210
                },
                {
                    unit: 25,
                    x1: 668,
                    y1: 133,
                    x2: 697,
                    y2: 210
                },
                {
                    unit: 27,
                    x1: 700,
                    y1: 133,
                    x2: 729,
                    y2: 210
                },
                {
                    unit: 29,
                    x1: 732,
                    y1: 133,
                    x2: 761,
                    y2: 210
                },
                {
                    unit: 31,
                    x1: 763,
                    y1: 151,
                    x2: 793,
                    y2: 210
                },
                {
                    unit: 33,
                    x1: 797,
                    y1: 151,
                    x2: 825,
                    y2: 210
                },
                {
                    unit: 35,
                    x1: 861,
                    y1: 151,
                    x2: 895,
                    y2: 210
                },
                {
                    unit: 37,
                    x1: 899,
                    y1: 151,
                    x2: 933,
                    y2: 210
                },
                {
                    unit: 39,
                    x1: 855,
                    y1: 260,
                    x2: 933,
                    y2: 293
                },
                {
                    unit: 41,
                    x1: 855,
                    y1: 296,
                    x2: 933,
                    y2: 325
                },
                {
                    unit: 43,
                    x1: 855,
                    y1: 328,
                    x2: 933,
                    y2: 357
                },
                {
                    unit: 45,
                    x1: 855,
                    y1: 360,
                    x2: 933,
                    y2: 389
                },
                {
                    unit: 47,
                    x1: 855,
                    y1: 393,
                    x2: 933,
                    y2: 421
                },
                {
                    unit: 49,
                    x1: 855,
                    y1: 423,
                    x2: 933,
                    y2: 453
                },
                {
                    unit: 51,
                    x1: 855,
                    y1: 456,
                    x2: 933,
                    y2: 485
                },
                {
                    unit: 53,
                    x1: 855,
                    y1: 489,
                    x2: 933,
                    y2: 517
                },
                {
                    unit: 2,
                    x1: 115,
                    y1: 440,
                    x2: 145,
                    y2: 519
                },
                {
                    unit: 4,
                    x1: 148,
                    y1: 440,
                    x2: 177,
                    y2: 519
                },
                {
                    unit: 8,
                    x1: 307,
                    y1: 440,
                    x2: 337,
                    y2: 519
                },
                {
                    unit: 10,
                    x1: 340,
                    y1: 440,
                    x2: 369,
                    y2: 519
                },
                {
                    unit: 12,
                    x1: 373,
                    y1: 440,
                    x2: 401,
                    y2: 519
                },
                {
                    unit: 16,
                    x1: 603,
                    y1: 440,
                    x2: 633,
                    y2: 518
                },
                {
                    unit: 18,
                    x1: 635,
                    y1: 440,
                    x2: 665,
                    y2: 518
                },
                {
                    unit: 20,
                    x1: 668,
                    y1: 440,
                    x2: 697,
                    y2: 518
                },
                {
                    unit: 22,
                    x1: 700,
                    y1: 440,
                    x2: 729,
                    y2: 518
                },
                {
                    unit: 24,
                    x1: 731,
                    y1: 440,
                    x2: 761,
                    y2: 518
                },
                {
                    unit: 26,
                    x1: 763,
                    y1: 440,
                    x2: 791,
                    y2: 518
                }
            ]
        }
    },

    mounted() {
        this.coordsRebuilder();
    },

    methods: {
        coordsRebuilder() {
            let coords = this.coords;

            Object.keys(coords).forEach(function (k) {
                let w = (parseInt(coords[k].x2) - parseInt(coords[k].x1)) + 'px';
                let h = (parseInt(coords[k].y2) - parseInt(coords[k].y1)) + 'px';
                let top = parseInt(coords[k].y1) + 'px';
                let left = parseInt(coords[k].x1) + 'px';

                let html = '<div class="unit" style="' +
                    'width:' + w + ';' +
                    'height:' + h + ';' +
                    'left:' + left + ';' +
                    'top:' + top + ';' +
                    '"><div class="text-temp text-sm font-bold">' + coords[k].unit + '</div></div>';

                $('#imagemap').append(html);
            });
        }
    }
}
</script>

<style scoped>

</style>
