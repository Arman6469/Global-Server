require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./db/mongoConnect')


const progRoutes = require('./routes/progRoutes');
const webRoutes = require('./routes/webRoutes');
const mediaRoutes = require('./routes/mediaRoutes');


const app = express();

app.use(express.json());
app.use(cors());



app.use('/api/prog', progRoutes);
app.use('/api/web', webRoutes);
app.use('/api/media', mediaRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));