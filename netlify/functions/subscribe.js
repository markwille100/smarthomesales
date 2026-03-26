exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    const { email } = JSON.parse(event.body);
    const response = await fetch(
      'https://api.beehiiv.com/v2/publications/pub_3112ce40-2f03-4c0d-98d0-c9209dda5dfd/subscriptions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer XtpKu8S7gYuyqaFhG2bhBV6SeMoyAciVYyLMAyuvSXG1aHPZoYPxml6Wd5pY83DW'
        },
        body: JSON.stringify({
          email,
          reactivate_existing: false,
          send_welcome_email: false
        })
      }
    );
    const data = await response.json();
    return {
      statusCode: 200,
      headers,
      body
