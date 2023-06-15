const messageForm = document.getElementById('message-form');
const responseDiv = document.getElementById('response');

messageForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const messageInput = document.getElementById('message');
    const message = messageInput.value;

    const webhookUrl = 'https://discord.com/api/webhooks/1118731412166680639/xcJQs939xvWVvXMsQnm-TVa-6nrhJddKsCVSvh1KSwcdH2tJOsvoQd7s9zU8TnquADZZ';

    const payload = {
        content: message
    };

    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    console.log(response);

    // Display the response
    responseDiv.innerHTML = `<p class="bold-text">Message sent successfully 👍</p>`;
    responseDiv.classList.remove('hidden');

    // Reset the form
    messageForm.reset();

    setTimeout(() => {
        responseDiv.innerHTML = '';
    }, 4000);
});