new Vue({
  el: '#desafio',
  data: {
    valor: '',
  },
  methods: {
    invertir: function () {
      this.valor = this.valor.split('').reverse().join('');
    },
    armazenar(event) {
      this.valor = event.target.value;
    },
    exibirAlerta() {
      alert('Alerta!');
    },
  },
});
