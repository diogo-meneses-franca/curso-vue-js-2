<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome é <strong>{{ nome }}</strong></p>
        <p>Idade é: <strong>{{ idade }}</strong></p>
        <button @click="alterarNome">Alterar Nome</button>
        <hr>
        <div class="componentes">
            <app-usuario-info :nome="nome" :idade="idade" @nomeMudou="nome = $event.novo" :reiniciarFn="reiniciarNome" />
            <!--@idadeMudou="idade = $event"-->
            <app-usuario-editar :idade="idade"/>
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data () {
        return {
            nome: 'Pedro',
            idade: 21
        }
    },
    methods: {
        alterarNome() {
            this.nome = 'Ana'
        },
        reiniciarNome() {
            this.nome = 'Pedro'
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }
    /*
    Em CSS, a seletor > * significa:

        >: Um combinador filho direto. Ele seleciona apenas os elementos que são filhos diretos do elemento pai especificado.
        *: Um seletor universal que corresponde a todos os elementos.

        Assim, o seletor .componentes > * significa:

        "Selecione todos os elementos que são filhos diretos do elemento com a classe componentes."
    */
    .componentes > * {
        margin: 10px;
    }
</style>
