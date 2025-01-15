const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const PORT = 3000;

// Configuração para servir arquivos estáticos
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/send-email', async (req, res) => {
    const { name, email, phone, interest, habilit, escolarid, message } = req.body;

    // Log para verificar os dados recebidos
    console.log("Dados recebidos:", req.body);

    try {
        // Enviar o e-mail usando a API externa
        const response = await fetch("https://api.smtplw.com.br/v1/messages", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': 'e06991c349dca900270c8ce3cdbcaa70' // Substitua pela sua chave de autenticação
            },
            body: JSON.stringify({
                from: "hotsite@ligfibra.net.br",
                to: "recrutamento@ligfibra.net.br",
                subject: "Nova inscrição recebida",
                body: `
                    <p><strong>Nome:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Telefone:</strong> ${phone}</p>
                    <p><strong>Área de Interesse:</strong> ${interest}</p>
                    <p><strong>Habilitação:</strong> ${habilit}</p>
                    <p><strong>Escolaridade:</strong> ${escolarid}</p>
                    <p><strong>Mensagem:</strong> ${message}</p>
                `,
            }),
        });

        if (!response.ok) {
            const responseData = await response.json();
            console.error("Erro da API:", responseData);
            throw new Error('Erro ao enviar o e-mail.');
        }

        res.send(`
            <script>
                alert('Formulário enviado com sucesso!');
                window.location.href = '/';
            </script>
        `);

    } catch (err) {
        console.error("Erro ao enviar e-mail:", err);
        res.send(`
            <script>
                alert('Erro ao enviar o formulário. Tente novamente mais tarde.');
                window.history.back();
            </script>
        `);
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
