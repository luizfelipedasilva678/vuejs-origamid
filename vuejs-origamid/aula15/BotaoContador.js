const BotaoContador  = {
    name: 'BotaoContador',
    data() {
        return {
            count: 0
        }
    },
    template: `<button @click="count++" >{{ count }}</button>`
}

export default Vue.component('BotaoContador', BotaoContador);