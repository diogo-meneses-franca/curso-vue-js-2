<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg" placeholder="Informe o nome" v-model="usuario.nome"></b-form-input>
			</b-form-group>
			<b-form-group label="Email:">
				<b-form-input type="email" size="lg" placeholder="Informe o email" v-model="usuario.email"></b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="enviar" variant="primary" size="lg">Enviar</b-button>
			<b-button @click="carregarUsuarios" variant="success" size="lg" class="ml-4">Carregar Usuários</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome : </strong> {{ usuario.nome }} <br>
				<strong>Email : </strong> {{ usuario.email }} <br>
				<strong>ID : </strong> {{ usuario.id }}
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			usuarios: [],
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		enviar() {
			this.$http.post('usuarios.json', this.usuario).then(this. usuario = { nome: '', email: ''})
		},
		carregarUsuarios() {
			this.$http.get('usuarios.json').then(response => {
				this.usuarios = response.data
			})
			this.$http.defaults.headers.common['Authorization'] = 'Bearer token'
		},
		// carregarUsuarios() {
		// 	this.$http.get('https://curso-vue-33c5b-default-rtdb.firebaseio.com/', 'usuarios.json').then(response => {
		// 		this.usuarios = response.data
		// 	})
		// }
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
