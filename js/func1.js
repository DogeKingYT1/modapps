const form = document.getElementById('applicationForm');
const proxyUrl = 'https://your-vercel-deployment-url/api/proxy.js?url=';
const webhookUrl = 'https://discord.com/api/webhooks/1211554816036315188/GQxG3AJm1Ptjn5nf_tY_Ajlh6Gx2IcSzwmkVNQpA3IiQX3i9HA9IHNdpG9d68O9kXCH0';

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const reason = document.getElementById('reason').value;
    const experience = document.getElementById('experience').value;
    const additionalInfo = document.getElementById('additionalInfo').value;

    const data = {
        username,
        reason,
        experience,
        additionalInfo
    };

    try {
        const response = await fetch(proxyUrl + encodeURIComponent(webhookUrl), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Application submitted successfully!');
            form.reset();
        } else {
            alert('Failed to submit application. Server responded with: ' + response.status);
            console.error('Failed to submit application. Server responded with error code:', response.status);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to submit application. Please try again later.');
    }
});
