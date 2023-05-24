import { createApp } from 'vue'

import App from './App.vue'
import router from './router';
import store from './store';

import BaseCard from './components/ui/BaseCard';
import BaseButton from './components/ui/BaseButton';
import BaseBadge from './components/ui/BaseBadge'

const app = createApp(App);

app
.use(router)
.use(store)

.component('baseCard', BaseCard)
.component('baseButton', BaseButton)
.component('baseBadge', BaseBadge)

.mount('#app');
