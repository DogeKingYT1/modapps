// api/proxy.js

const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const { url } = req.query;
    const { method, headers, body } = req;

    try {
        const response = await fetch(url, {
            method,
            headers,
            body: body ? JSON.stringify(body) : undefined
        });

        const responseData = await response.json();
        res.status(response.status).json(responseData);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while proxying the request.' });
    }
};
