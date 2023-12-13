import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const sendEmailPath = '/sendemail';

const sesClient = new SESClient({ region: "us-east-1" });

export const handler = async (event) => {
  
  console.log(event.body);
  
  if (!event.body){
    throw new Error("Empty message!!");
  }
  
  
  
  
let emailResponse = await sendEmail(JSON.parse(event.body)); 
  
  

  let response = {
    
    statusCode: 200,
    headers: {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    body: JSON.stringify ("Hola amigo"),
  };
 
  return response;
  };

async function sendEmail(requestBody) {
  const bodyText = requestBody.bodyText;
  const name = requestBody.name;
  const email = requestBody.email;
  const subject = requestBody.subject;

  const params = {
    Destination: { ToAddresses: ["sandropolixe@gmail.com"] },
    Message: {
      Body: {
        Text: { Data: "Name: " + name.toString() + "\n" + "Email: " + email.toString() + "\n" + "Subject: " + subject.toString() + "\n" + "Message: " + bodyText.toString() },
      },
      Subject: { Data: "Nuevo contacto desde portfolio." },
    },
    Source: "sandropolixe@gmail.com",
  };

  try {
    const command = new SendEmailCommand(params);
    const data = await sesClient.send(command);
    return responseReturn(200, data);
  } catch (err) {
    return responseReturn(400, { error: err });
  }
}

function responseReturn(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  };
}