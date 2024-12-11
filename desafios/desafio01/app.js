new Vue({
    el: '#desafio',
    data: {
        nome: 'Diogo M. França',
        idade: 38,
        linkTenis: 'https://mizunobr.vtexassets.com/arquivos/ids/256508-1600-1600?v=638639241445130000&width=1600&height=1600&aspect=true'
    },
    methods: {
        aleatorio: function() {
            return Math.random()
        }
    }
    
})