const obj = {
    name: "T",
    template: "<p>Isso é um texto</p>"
}

export default Vue.component('Characters', {
    data() {
        return {
            characters: {},
            name: ''
        }
    },
    methods: {
        async getTime() {
            const data = await fetch('https://rickandmortyapi.com/api/character');
            const json = await data.json(); 
            this.characters = json.results;
            this.name = `Olá, ${this.characters[0].name}`;
        }
    },
    mounted() {
        this.getTime();
        console.log(this.characters)
    },
    components: {
        Ts: obj
    },
    template: "<div> <ul> <li v-for='ch in characters'>{{ ch.name }} </li> </ul> <ts></ts> {{ name }}</div>"
})