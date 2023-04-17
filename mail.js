import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const password = process.env.ZOHO_MAIL_PASS
const user = process.env.ZOHO_MAIL_USER

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  secure: true,
  port: 465,
  auth: {
    user: user,
    pass: password
  }
})

const mailOptions = {
  from: "Contato <contato@oberdan.me>",
  to: "oberdan.dev@gmail.com",
  subject: "Título do Email",
  text: "Texto do email sem html",
  html: `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Proposta de Orçamento de Energia Solar</title>
      <style>
        /* Estilos globais */
        * {
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }
        
        body {
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
        }
        
        /* Estilos do cabeçalho */
        .header {
          background-color: #1e88e5;
          color: #fff;
          padding: 20px;
          text-align: center;
        }
        
        /* Estilos do conteúdo */
        .content {
          background-color: #fff;
          margin: 20px;
          padding: 20px;
        }
        
        h1 {
          font-size: 28px;
          margin-bottom: 20px;
        }
        
        p {
          font-size: 16px;
          margin-bottom: 10px;
        }
        
        .highlight {
          font-weight: bold;
        }
        
        /* Estilos do rodapé */
        .footer {
          background-color: #1e88e5;
          color: #fff;
          padding: 20px;
          text-align: center;
        }
        
        a {
          color: #fff;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Proposta de Orçamento de Energia Solar</h1>
      </div>
      <div class="content">
        <p>Olá <span class="highlight">[Nome do Cliente]</span>,</p>
        <p>Agradecemos seu interesse em nossos sistemas de energia solar e estamos felizes em enviar uma proposta de orçamento para você. Com base em suas necessidades, recomendamos o seguinte sistema:</p>
        <ul>
          <li><span class="highlight">[Nome do Sistema]</span></li>
          <li><span class="highlight">[Capacidade do Sistema]</span></li>
          <li><span class="highlight">[Número de Painéis Solares]</span></li>
          <li><span class="highlight">[Preço do Sistema]</span></li>
        </ul>
        <p>Se você tiver alguma dúvida ou precisar de mais informações, não hesite em entrar em contato conosco. Teremos o prazer de ajudá-lo.</p>
        <p>Obrigado por considerar nossa empresa de energia solar para suas necessidades de energia. Estamos ansiosos para trabalhar com você.</p>
      </div>
      <div class="footer">
        <p>Atenciosamente,<br>[Nome da Empresa de Energia Solar]</p>
      </div>
    </body>
    </html>`,
  }

const enviaEmail = async (configEmail) => {
    transporter.sendMail(configEmail, function(err, info){
      if(err) return console.log('Erro ao enviar mensagem', err)
      console.log('Message sent: ', info.response)
    })
}

export {enviaEmail};

