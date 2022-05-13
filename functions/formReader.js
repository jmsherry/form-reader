// Event
// {
//   "path": "Path parameter (original URL encoding)",
//   "httpMethod": "Incoming request’s method name",
//   "headers": {Incoming request headers},
//   "queryStringParameters": {Query string parameters},
//   "body": "A JSON string of the request payload",
//   "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encoded"
// }

// const qs = require('querystring');

exports.handler = async (event, context) => {
  console.log('event.body', event.body);
  // const { query } = qs.parse(event.body);
  // your server-side functionality
//   const body = JSON.parse(event.body);
//   console.log("🚀 ~ file: formReader.js ~ line 14 ~ body", body);

//   let tableRowsHTML = "";

//   for (const [key, value] of Object.entries(body)) {
//     tableRowsHTML += `<tr><th>${key}</th><td>${value}</td></tr>`;
//   }

//   console.log("tableRowsHTML", tableRowsHTML);

//   const HTML = `
//   <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>
//   <h1>Form Data</h1>
//   <table>
//     <thead>
//       <tr>
//         <th scope="col">Name</th>
//         <th scope="col">Value</th>
//       </tr>
//     </thead>
//     <tbody>
//     ${tableRowsHTML}
//     </tbody>
//   </table>
// </body>
// </html>
//   `;

//   console.log({ HTML });

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    multiValueHeaders: {},
    body: 'HTML',
  };
};
