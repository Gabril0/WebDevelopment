// Function to fetch stock quote
function GetQuote(stockCode) {
    const apiKey = "E0D85AP6BN6H07H8";
    const url = `https://api.example.com/quote?code=${stockCode}&apiKey=${apiKey}`;
  
    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("erro!!");
        }
      })
      .then(data => {
        return { acao: stockCode, cotacao: data.price };
      });
  }
  

  function RenderStock(stock) {
    const stockInfo = document.createElement("p");
    stockInfo.textContent = `Stock: ${stock.acao}, Quote: ${stock.cotacao}`;
    document.body.appendChild(stockInfo);
  }
  

  function handleSequentialQuoting() {
    const inputElements = document.querySelectorAll("input[name='stockCode']");
    const stockCodes = Array.from(inputElements).map(input => input.value);
  
    function processNextStock(index) {
      if (index >= stockCodes.length) {
        return; 
      }
  
      GetQuote(stockCodes[index])
        .then(stock => {
          RenderStock(stock);
          processNextStock(index + 1); 
        })
        .catch(error => {
          console.error(error);
          processNextStock(index + 1); 
        });
    }
  
    processNextStock(0); 
  }
  
  const cotarButton = document.getElementById("cotarButton");
  cotarButton.addEventListener("click", handleSequentialQuoting);
  