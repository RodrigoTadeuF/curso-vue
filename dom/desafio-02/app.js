new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Estou te alertando agora!')
        },
        alterarValor(event) {
            this.valor = event.target.value
        }
    }
})