import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#47a84b',
                secondary: '#d12424',
            },
            dark: {
                primary: '#47a84b',
                secondary: '#d12424',
            },            
        },
    },
});
