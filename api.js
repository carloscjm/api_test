const express = require('express');
const app = express();
const buckets = new Map();

app.use(express.json({ extended: false }));
app.use('/api/clients', require('./src/routes/clients'));//Private
app.use('/api/docs', require('./src/routes/docs'));//Public

app.get('/', (req, res) => res.json({ msg: 'Running', status: 200 }));
const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
