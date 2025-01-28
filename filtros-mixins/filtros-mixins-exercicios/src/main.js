import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('inverter', function(valor) {
	return valor.split('').reverse().join('')
})

Vue.mixin({
	data() {
		return {
			global: 'Global Mixin Data'
		}
	},
	created() {
		console.log('Created - Global Mixin')
	}
})
new Vue({
	render: h => h(App),
	created() {
		console.log('Created - Vue Instance')
	}
}).$mount('#app')
