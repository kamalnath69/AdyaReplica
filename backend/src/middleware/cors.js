const cors = require('cors');

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:5173'], // Add your frontend URLs
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = cors(corsOptions);