async function send() {
    const sendButton = document.getElementById("send");
    sendButton.addEventListener("click", async function () {
      const inputName = document.getElementById("inputName").value;
      const inputEmail = document.getElementById("inputEmail").value;
      const inputTelefone = document.getElementById("inputTelefone").value;
      const inputFeedback = document.getElementById("inputFeedback").value;
  
      // Desabilitar o botão enquanto a requisição está sendo feita
      sendButton.disabled = true;
      sendButton.innerText = "Enviando...";
  
      // try {
      //     const response  = await fetch("https://google.com", {method: "GET"})
      //     window.alert(response)
      // } catch (error) {
      //   window.alert(error)        
      // }
    
// função para tratar o sucesso
// function success() {
//   var data = JSON.parse(this.responseText); //fazer o parsing da string para JSON
//   console.log(data);
// }

// // função para tratar o erro
// function error(err) {
//   console.log('Erro de solicitação', err); //os detalhes do erro estarão no objeto "err"
// }

// var xhr = new XMLHttpRequest(); //invocar uma nova instância de XMLHttpRequest
// xhr.onload = success; // chamar a função success se a solicitação for um sucesso
// xhr.onerror = error;  // chamar a função error se a solicitação der errado
// xhr.open('POST', 'https://api.smtplw.com.br/v1/messages'); // abrir uma solicitação GET
// xhr.setRequestHeader('x-auth-token', 'e06991c349dca900270c8ce3cdbcaa70')
// xhr.send(); // enviar a solicitação ao servidor.

        let request = await fetch("https://api.smtplw.com.br/v1/messages", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': 'e06991c349dca900270c8ce3cdbcaa70'
    
          },
          body: JSON.stringify({
            from: "hotsite@ligfibra.net.br",
            to: "sac@ligfibra.net.br",
            subject: "Solicitação do site",
            body: `<p>${inputFeedback}</p>`,
            headers: {
                "Content-Type": "text/plain"
            }
          }),
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .then(err => console.log(err))
        // console.log(response)
  
        // if (!response.ok) throw new Error("Erro ao enviar formulário.");
  
        // Exibir mensagem de sucesso
        alert("Formulário enviado com sucesso!");
    //   } catch (error) {
    //     // Exibir erro
    //     alert(`Erro ao enviar: ${error.message}`);
    //   } finally {
    //     // Reativar o botão
    //     sendButton.disabled = false;
    //     sendButton.innerText = "Enviar";
    //   }
     });

     console.log("teste")
  }
  
  // Chamar a função para configurar o evento
  send();
  