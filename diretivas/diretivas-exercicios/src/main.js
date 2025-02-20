import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque',{
	bind(el, binding, vnode){
		let atraso = 0
		if(binding.modifiers['atrasar']) atraso = 3000

		setTimeout(() => {
			if(binding.arg === 'fundo'){
				el.style.backgroundColor = binding.value
			} else {
				el.style.color = binding.value
			}
		}, atraso)
		//el.style.backgroundColor = 'lightgreen'
	}
})
new Vue({
	render: h => h(App),
}).$mount('#app')
