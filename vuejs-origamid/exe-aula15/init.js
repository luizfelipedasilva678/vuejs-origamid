const paragrafo = {
    name: "Paragrafo",
    template: "<p>Olá Mundo</p>"
}

const options = {
    el: '#app',
    data: {
    },
    components: {
        paragrafo2: paragrafo
    }
}

const vm = new Vue(options);