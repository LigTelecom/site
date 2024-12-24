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
      body: `<p>123</p>`,
      headers: {
          "Content-Type": "text/plain"
      }
    }),
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .then(err => console.log(err))