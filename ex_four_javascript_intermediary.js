const botao = document.getElementById('meuBotao');
botao.addEventListener('click', () => {
  const novoParagrafo = document.createElement('p');
  novoParagrafo.textContent = 'Novo parágrafo produzido!';
  document.body.appendChild(novoParagrafo);
});