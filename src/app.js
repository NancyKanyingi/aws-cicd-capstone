
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve the HTML page and its CSS stylesheet.
app.use(express.static(__dirname));

// Health endpoint for AWS monitoring.
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

if (require.main === module) {
  app.listen(port, '0.0.0.0', () => {
    console.log(`App running on port ${port}`);
  });
}

module.exports = app;
