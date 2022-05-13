// Event
// {
//   "path": "Path parameter (original URL encoding)",
//   "httpMethod": "Incoming request’s method name",
//   "headers": {Incoming request headers},
//   "queryStringParameters": {Query string parameters},
//   "body": "A JSON string of the request payload",
//   "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encoded"
// }

exports.handler = async (event, context) => {
  console.log("event.body", event.body);
  const params = new URLSearchParams(event.body);

  let tableRowsHTML = "";

  for (const [key, value] of params) {
    tableRowsHTML += `<tr><th>${key}</th><td>${value}</td></tr>`;
  }

  console.log("tableRowsHTML", tableRowsHTML);

  const HTML = `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
  <h1>Form Data</h1>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Value</th>
      </tr>
    </thead>
    <tbody>
    ${tableRowsHTML}
    </tbody>
  </table>
  <button id="back" class="btn btn-primary">Go back to your form</button>
  <script>
    document.getElementById('back').addEventListener('click', () => {
      history.back();
    });
  </script>
</body>
</html>
  `;

  console.log({ HTML });

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    multiValueHeaders: {},
    body: HTML,
  };
};
