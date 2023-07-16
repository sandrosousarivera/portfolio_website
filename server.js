const AWS = require('aws-sdk');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors())

app.use(bodyParser.json({ type: 'application/*+json' }))

app.use(express.json())

app.post('/email-send', (req, res) => {


  // Función para enviar el correo electrónico
  let name = req.body.name
  let subject = req.body.subject
  let email = req.body.email
  let message = req.body.message

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

      })

    } else {
      res.json({
        ok: false
      })
      console.log(error, data);
    }

  });
});



const port = 3000; // Puerto en el que se ejecutará el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:3000`);
});


AWS.config.update({
  region: 'us-east-1', // Reemplaza con la región de AWS que deseas utilizar
  accessKeyId: 'AKIATXUC3ILQRRSOIW6F', // Reemplaza con tus credenciales de AWS
  secretAccessKey: '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'
});

const ses = new AWS.SES();


