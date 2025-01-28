<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<p>{{ usuarioLogado }}</p>
		<p>{{ cpf | inverter }}</p>
		<input type="text" :value="cpf">
		<hr>
		<h1>{{ global }}</h1>
		<Frutas/>
	</div>
</template>

<script>
import Frutas from './Frutas.vue';
import FrutasMixin from './FrutasMixin';
import UsuarioMixin from './UsuarioMixin';
export default {
	components: {Frutas},
	mixins: [FrutasMixin, UsuarioMixin],
	filters: {
		cpf(valor) {
			return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
		}
	},
	data() {
		return {
			cpf: '356.301.570-86'
		}
	},
	created() {
		console.log('Created - App');
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

input {
	font-size: 1.4rem;
	padding: 10px;
	border-radius: 5px;
	border: 1px solid #ccc;
}
</style>
