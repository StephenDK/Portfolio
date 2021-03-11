const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const fs = require('fs');
const dotenv = require('dotenv');
const path = require('dotenv');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

dotenv.config({ path: './config/config.env'});

app.get('/', async (req, res) => {
    try {
        let info = await fs.readFileSync('_data/resume.json')
        info = JSON.parse(info);
        res.status(200).json({
            success: true,
            info
        })
    } catch (error) {
        console.log(error)
    }
})


app.listen(PORT, () => {
    console.log(`Process running in ${process.env.NODE_ENV} mode on port ${PORT}`);
})
