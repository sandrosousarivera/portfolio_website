/* const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();
const AWS = require('aws-sdk');
const bodyParser = require('body-parser');
const cors = require('cors');

// Carga los archivos de clave privada y certificado autofirmado
const privateKey = fs.readFileSync('/home/ec2-user/private-key.pem', 'utf8');
const certificate = fs.readFileSync('/home/ec2-user/certificate.pem', 'utf8');

const credentials = { key: privateKey, cert: certificate };

// Configura tu aplicación Express como lo haces normalmente
app.use(cors());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(express.json());

// Configura las credenciales de AWS y la región
AWS.config.update({
  region: 'us-east-1', // Reemplaza con la región de AWS que deseas utilizar
  accessKeyId: 'AKIATXUC3ILQ6P33JLGC', // Reemplaza con tus credenciales de AWS
  secretAccessKey: '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'
});

const ses = new AWS.SES();

app.post('/email-send', (req, res) => {
  let name = req.body.name;
  let subject = req.body.subject;
  let email = req.body.email;
  let message = req.body.message;

  console.log("elbody", req.body);

  const params = {
    Destination: {
      ToAddresses: ['sandropolixe@gmail.com'] // Reemplaza con tu dirección de correo electrónico
    },
    Message: {
      Body: {
        Text: {
          Data: `Nombre: ${name}\nSubject: ${subject}\nCorreo electrónico: ${email}\nMensaje: ${message}`
        }
      },
      Subject: {
        Data: subject
      }
    },
    Source: 'sandropolixe@gmail.com' // Reemplaza con la dirección de correo electrónico verificada en AWS SES
  };
  console.log(params);

  ses.sendEmail(params, (error, data) => {
    if (!error) {
      res.json({
        ok: true,
        data
      });
    } else {
      res.json({
        ok: false
      });
      console.log(error, data);
    }
  });
});

const port = 3000; // Puerto para HTTPS
const server = https.createServer(credentials, app);

server.listen(port, () => {
  console.log(`Servidor en ejecución en https://localhost:${port}`);
});
*/
