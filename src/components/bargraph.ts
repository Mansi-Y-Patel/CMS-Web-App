import { defineComponent, h } from 'vue';

import { GChart } from 'vue-google-charts';

export const type = 'BarChart';

export const data = [
  ['Attendance', 'Lecture',{ role: 'annotation'}, 'Lab',{ role: 'annotation'}],
  ['', 2,'2', 5,'5'],
];

export const options = {
    height:100,
    // bar: {groupWidth: "60%"},
    colors: [ 'black','023e8a'],
    chartArea: {left:10,top:10, bottom:10},
                    // chartArea:{left:10, right:10, top:10, bottom:10},
    hAxis:{
        textPosition: "none",
        gridlines:{
            color:"transparent",
            count:0,
        },
        baselineColor: "transparent",
    }
};

export default defineComponent({
  name: 'GoogleChart',
  components: {
    GChart,
  },
  setup() {
    return () =>
      h(GChart, {
        data,
        options,
        type,
      });
  },
});
