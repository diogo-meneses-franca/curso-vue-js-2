import Vue from 'vue'
import App from './App.vue'
import ContadoresComponent from './ContadoresMulticomponent.vue'

Vue.config.productionTip = false
Vue.component('ContadoresComponent', ContadoresComponent)
new Vue({
  render: h => h(App),
}).$mount('#app')
