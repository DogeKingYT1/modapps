// Define the URL for the proxy and the Discord webhook
const proxyUrl = 'https://dogekingyt1.github.io/api/proxy.js?url=';
const webhookUrl = 'https://discord.com/api/webhooks/1211554816036315188/GQxG3AJm1Ptjn5nf_tY_Ajlh6Gx2IcSzwmkVNQpA3IiQX3i9HA9IHNdpG9d68O9kXCH0';

// Function to submit the form data
const handleSubmit = async (e) => {
    e.preventDefault();

    // Get form input values
    const username = document.getElementById('username').value;
    const reason = document.getElementById('reason').value;
    const experience = document.getElementById('experience').value;
    const additionalInfo = document.getElementById('additionalInfo').value;

    // Construct the data object
    const data = {
        username,
        reason,
        experience,
        additionalInfo
    };

    try {
        // Send POST request to proxy URL with webhook URL and data
        const response = await fetch(proxyUrl + encodeURIComponent(webhookUrl), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            // If request is successful, show success message and reset form
            alert('Application submitted successfully!');
            document.getElementById('applicationForm').reset();
        } else {
            // If request fails, show error message
            alert('Failed to submit application. Server responded with: ' + response.status);
            console.error('Failed to submit application. Server responded with error code:', response.status);
        }
    } catch (error) {
        // If an error occurs during the request, log the error and show error message
        console.error('Error:', error);
        alert('Failed to submit application. Please try again later.');
    }
};

// Add event listener to the form submission
const form = document.getElementById('applicationForm');
form.addEventListener('submit', handleSubmit);