<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p>{{ 'teste filtro local' | filtroLocal }}</p>
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
		valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<p>{{ 'teste filtro global' | contarCaracteres }}</p>

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<p>{{ espacosPorVirgula }}</p>
		<p>{{ contarCaracteresComputed }}</p>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
		<p>{{ contarCaracteresComputed }}</p>
	</div>
</template>

<script>
import frasesMixins from './frasesMixins';
export default {
	mixins: [frasesMixins],
	data() {
		return {
			ex1: 'teste filtro local',
			ex2: 'teste filtro global',
			ex3: 'teste exercicio 3',
		}
	},
	filters: {
		// Exercício 1
		filtroLocal(valor) {
			return valor.replace(/\s/g, ',');
		},
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
