const express = require('express');
const app = express()
const port = 4000;

 const bodyParser = require('body-parser')

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const mongoose= require('mongoose')
const conn_url = process.env.REACT_APP_conn_url
const conn_params={

    useCreateIndex:true,
    useUnifiedTopology:true
}
mongoose.connect(conn_url,conn_params )
.then(()=>console.log('successfully connected to mongodb'))
.catch((e)=>console.log('error : ',e))


const router = require('./router')
app.use('/api',router)

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port,() => {console.log('server started at',port)})
