export default {
    computed: {
		espacosPorVirgula() {
			return this.ex3.replace(/\s/g, ',');
		},
		contarCaracteresComputed() {
			return this.ex3.split(' ').map(palavra => `${palavra} (${palavra.length})`).join(' ');
		}
	}
}