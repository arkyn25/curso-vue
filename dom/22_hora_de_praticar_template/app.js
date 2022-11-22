new Vue({
  el: '#desafio',
  data: {
    nome: 'Arlen',
    idade: 29,
    imagem: 'https://picsum.photos/200/300?random=1',
  },
  methods: {
    idadeVezes3() {
      return this.idade * 3;
    },
    random() {
      return Math.random();
    },
  },
});
