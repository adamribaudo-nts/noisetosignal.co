export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': 'https://www.noisetosignal.co',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method === "POST") {
      try {
        const formData = await request.formData();
        const email = formData.get('email');
        const message = formData.get('message');

        if (!email || !message) {
          return new Response("Missing email or message.", { status: 400, headers: corsHeaders });
        }

        // Store the data in your KV namespace
        const key = `submission-${Date.now()}`;
        await env.CONTACT_LIST.put(key, JSON.stringify({ email, message }));

        // ** Mailgun API Integration **
        const mailgunDomain = 'sandbox217beaaed8fc426a9da408826013cf06.mailgun.org';
        // Use your API key from env.MAILGUN_API_KEY secret
        const mailgunApiKey = env.MAILGUN_API_KEY;

        // The Mailgun API requires a multipart/form-data body
        const mailgunFormData = new FormData();
        mailgunFormData.append('from', `Contact Form <postmaster@${mailgunDomain}>`);
        mailgunFormData.append('to', 'adam@noisetosignal.co');
        mailgunFormData.append('subject', 'New Contact Form Submission');
        mailgunFormData.append('text', `New message from ${email}:\n\n${message}`);

        await fetch(`https://api.mailgun.net/v3/${mailgunDomain}/messages`, {
          method: 'POST',
          headers: {
            'Authorization': `Basic ${btoa(`api:${mailgunApiKey}`)}`
          },
          body: mailgunFormData,
        });

        return new Response("Submission stored successfully!", { status: 200, headers: corsHeaders });
      } catch (error) {
        return new Response(`Error: ${error.message}`, { status: 500, headers: corsHeaders });
      }
    }

    return new Response("This endpoint only accepts POST requests.", { status: 405, headers: corsHeaders });
  },
};