const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Configuração para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/send-email', async (req, res) => {
    const { nome, email, telefone, feedback } = req.query; 

    try {
        // Enviar o e-mail usando a API externa
        const response = await fetch("https://api.smtplw.com.br/v1/messages", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': 'e06991c349dca900270c8ce3cdbcaa70' // Coloque sua chave de autenticação aqui
            },
            body: JSON.stringify({
                from: "hotsite@ligfibra.net.br", // Remetente do e-mail
                to: "sac@ligfibra.net.br", // Destinatário
                subject: "Solicitação do site", // Assunto do e-mail
                body: `<p>Nome: ${nome}</p><p>Email: ${email}</p><p>Telefone: ${telefone}</p><p>Feedback: ${feedback}</p>`,
                headers: {
                    "Content-Type": "text/plain"
                }
            }),
        });

        const jsonResponse = await response.json();
        res.send(`
            <script>
                alert('Formulário enviado com sucesso!');
                window.location.href = '/'; // Redireciona para a página inicial
            </script>
        `);


    } catch (err) {
        console.error("Erro ao enviar e-mail:", err);
    }
});
// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
