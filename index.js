const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {connect} = require('./utils/database');


const cloudinary = require('cloudinary').v2;


const productsRouter = require('./api/routes/products.routes');
const usersRouter = require('./api/routes/users.routes');
const allergensRouter = require('./api/routes/allergens.routes');
const sosRouter = require('./api/routes/sos.routes');
const diaryRouter = require('./api/routes/diary.routes');

dotenv.config();
const PORT = process.env.PORT || 8000;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
});


const app = express();
connect();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Method', 'POST, GET, DELETE, PUT, PATCH');
  res.header("Access-Control-Allow-Credentials", "true")
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
})

app.use(cors({
  origin: '*',
  credentials: true, 
}));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/users', usersRouter);
app.use('/products', productsRouter); 
app.use('/allergens', allergensRouter);
app.use('/sos', sosRouter);
app.use('/diary', diaryRouter);

app.use('*', (req,res,next) => {
  return res.status(404).json("Route not found")
});

// app.use((error, req, res, next) => {
//   return res.status( error.status || 500 ).json("Error: " + error.message || "Unexpected error");
// });


app.listen(PORT, () => console.log(`listening on port:http://localhost:${PORT}`));