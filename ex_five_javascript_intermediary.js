async function pesquisarDados() {
    const response = await fetch('https://api.example.com/dados');
    const data = await response.json();
    console.log(data);
  }

  