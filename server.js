const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));

const PORT = process.env.PORT || 3000;

app.use('/api/v1/travail', require('./routes/travail/router'));
app.use('/api/v1/social', require('./routes/social/router'));

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
