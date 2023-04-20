import express from 'express';
import path from 'path'
import { enviaEmail } from './mail.js';

const app = express();
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> console.log('running at: http://localhost:3000'))
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=> {
  res.sendFile(path.resolve('./index.html'))
})

// static routes
app.use('/src/images', express.static(path.resolve('./src/images')))
app.use('/src/style', express.static(path.resolve('./src/style')))
app.use('/src/script', express.static(path.resolve('./src/script')))

// modal post 
app.post('/', (req, res)=> {

  const {nome, sobrenome, cidade, telefone, email, texto, fatura} = req.body;
  const newsletter = Number(req.body.newsletter) || 0

  const user = {
    nome,
    sobrenome,
    cidade,
    telefone,
    email,
    fatura: Number(fatura),
    texto,
    newsletter,
  }

  const emailOpcoes = {
    from: `${nome} <${email}>`,
    to: "oberdan.dev@gmail.com",
    subject: `Proposta de Orçamento de ${nome}`,
    text: `Orçamento pelo site - Cliente: ${nome}`,
    html: `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Proposta de Orçamento de Energia Solar</title>
        <style>
          /* Estilos globais */
          * {
            box-sizing: border-box;
            font-family: Arial, sans-serif;
          }
          
          header {
            background-color: #003366;
            color: white;
            padding: 20px;
            text-align: center;
          }
          
          footer {
            background-color: #003366;
            color: white;
            padding: 10px;
            text-align: center;
          }
          
          /* Estilos do cartão */
          .card {
            border-radius: 5px;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            max-width: 800px;
            margin: auto;
            padding: 20px;
          }
          
          /* Estilos dos campos */
          .field {
            display: flex;
            flex-direction: row;
            margin-bottom: 10px;
          }
          
          .field label {
            font-weight: bold;
            margin-right: 10px;
            width: 150px;
          }
          
          .field p {
            margin: 0;
          }
        </style>
      </head>
      <body>
        <header>
          <h1>Proposta de Orçamento de Energia Solar</h1>
        </header>
        <div class="card">
          <div class="field">
            <label>Nome:</label>
            <p>${nome}</p>
          </div>
          <div class="field">
            <label>Sobrenome:</label>
            <p>${sobrenome}</p>
          </div>
          <div class="field">
            <label>Cidade:</label>
            <p>${cidade}</p>
          </div>
          <div class="field">
            <label>Telefone:</label>
            <p>${telefone}</p>
          </div>
          <div class="field">
            <label>E-mail:</label>
            <p>${email}</p>
          </div>
          <div class="field">
            <label>Fatura de Energia:</label>
            <p>R$ ${fatura}</p>
          </div>
          <div class="field">
            <label>Texto:</label>
            <p>${texto}</p>
          </div>
        </div>
        <footer>
          <p>Empresa de Energia Solar © 2023 - Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>`,
  }

  enviaEmail(emailOpcoes)
  
  console.log(user)

 

})
