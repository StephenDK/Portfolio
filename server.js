const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})