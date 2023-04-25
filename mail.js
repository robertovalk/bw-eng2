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

const enviaEmail = async (configEmail) => { 
    transporter.sendMail(configEmail, function(err, info){
      if(err) return console.log('Erro ao enviar mensagem: \n.\n.\n.', err)
      console.log('Message sent: ', info.response)
    })
}

export {enviaEmail};

