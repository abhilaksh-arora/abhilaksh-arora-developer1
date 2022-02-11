import Vue from 'vue';
import VueGtag from 'vue-gtag';

if (process.env.NODE_ENV === "production") {
    Vue.use(VueGtag, {
        config: {id: 'G-J9KY8C1EDL'},
        appName: 'Abhilaksh Arora Developer',
    });
}