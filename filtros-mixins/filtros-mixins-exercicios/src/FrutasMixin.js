export default {
    data() {
        return {
            fruta: '',
            frutas: ['Banana', 'Maçã', 'Pera', 'Uva']
        }
    },
    methods: {
        addFruta() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }
}