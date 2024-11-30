function calcular(c, d, operacao) {
    return operacao(c, d);
  }
  
  const resultado = calcular(5, 3, (x, y) => x * y);
  console.log(resultado); // 15