const express = require('express');
const {connect} = require('./utils/database');
const dotenv = require('dotenv');
const cors = require('cors');


const productsRouter = require('./api/routes/products.routes');
const usersRouter = require('./api/routes/users.routes');
const allergensRouter = require('./api/routes/allergens.routes');
const sosRouter = require('./api/routes/sos.routes');
const diaryRouter = require('./api/routes/diary.routes');

dotenv.config();

const PORT = process.env.PORT || 8000;


const app = express();
connect();

app.use(cors({
  origin: '*',
  credentials: true,
}));//securizar

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/users', usersRouter);
app.use('/products', productsRouter); 
app.use('/allergens', allergensRouter);
app.use('/sos', sosRouter);
app.use('/diary', diaryRouter);


app.listen(PORT, () => console.log(`listening on port:http://localhost:${PORT}`));