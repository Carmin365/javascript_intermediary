function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  
    this.cumprimentar = function() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    };
  }
  
  const pessoa1 = new Pessoa("Peter", 50);
  pessoa1.cumprimentar();