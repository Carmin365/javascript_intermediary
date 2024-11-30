async function procurarCidade() {
    const cidade = document.getElementById('cidade').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=YOUR_API_KEY`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const resultado = document.getElementById('resultado');
      resultado.innerHTML = `Temperatura em ${data.name}: ${data.main.temp} K`;
    } catch (error) {
      console.error('Erro ao procurar dados:', error);
      resultado.innerHTML = 'Não foi possível encontrar a cidade.';
    }
  }

  