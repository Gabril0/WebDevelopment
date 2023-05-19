function getQuote(stock) {
    const apiKey = "E0D85AP6BN6H07H8";
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock}.SA&apikey=${apiKey}`;

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        const quote = data["Global Quote"];
        const symbol = quote["01. symbol"];
        const price = quote["05. price"];
        return { acao: symbol, cotacao: price };
      });
  }
  //criação e atribuição dinamica dos parágrafos com seus valores
  function renderStock(stock) {
    const quoteResults = document.getElementById("quoteResults");
    const stockElement = document.createElement("p");
    stockElement.textContent = `Cotação da Ação ${stock.acao}: ${stock.cotacao}`;
    quoteResults.appendChild(stockElement);
  }
  //faz sequencialmente
  function fetchSequencial() {
    const stocks = ["ABEV3", "ASAI3", "AZUL4", "B3SA3", "BIDI11"];

    const sequence = stocks.reduce((promise, stock) => {
      return promise.then(() => getQuote(stock)).then(renderStock);
    }, Promise.resolve());
  }
  //espera todas terminarem para fazer por conta do promise all
  function fetchAssincrono() {
    const stocks = ["ABEV3", "ASAI3", "AZUL4", "B3SA3", "BIDI11"];

    const promises = stocks.map(stock => getQuote(stock));
    Promise.all(promises).then(quotes => {
      quotes.forEach(renderStock);
    });
  }
  
  // Chamar a função para buscar as cotações sequencialmente ao carregar a página
  fetchSequencial();