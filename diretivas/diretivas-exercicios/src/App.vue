<template>
	<div id="app">
		<h1>Diretivas</h1>
		<p v-text="'Usando a diretiva v-text'"></p>
		<p v-html="'Usando a diretiva <strong>v-html</strong>'"></p>
		<hr>
		<p v-destaque:fundo.atrasar="cor">Usando a diretiva personalizada v-destaque</p>
		<p v-destaque="cor">Usando a diretiva personalizada v-destaque</p>
		<hr>
		<p v-destaque-local:fundo.atrasar.alternar="{cor1: 'green', cor2: 'red', atraso: 2000, intervalo: 200}">Usando a diretiva personalizada v-destaque</p>
		<p v-destaque-local="{cor1: 'orange', atraso: 5000}">Usando a diretiva personalizada v-destaque</p>
	</div>
</template>

<script>
export default {
	data() {
		return{
			cor: 'lightblue'
		}
	},
	directives: {
		'destaque-local': {
			bind(el, binding, vnode){
				const aplicarCor = cor => {
					if(binding.arg === 'fundo'){
							el.style.backgroundColor = cor
						} else {
							el.style.color = cor
						}
				}
				let atraso = 0
				if(binding.modifiers['atrasar']) atraso = binding.value.atraso
				
				const cor1 = binding.value.cor1
				const cor2 = binding.value.cor2
				let corAtual = cor1
				
				setTimeout(() => {
					if(binding.modifiers['alternar']){
					setInterval(()=>{
						corAtual = corAtual === cor1 ? cor2 : cor1
						aplicarCor(corAtual)			
					},binding.value.intervalo)
				}else{
					aplicarCor(binding.value.cor1)
				}
				}, atraso)
			}
		}
	}	
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
