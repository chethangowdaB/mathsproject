const mongoose = require('mongoose');


const url='mongodb://127.0.0.1:27017/questions'



const connectTomongo=()=>{
    const connectionParams={
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }
    mongoose.set('strictQuery', true);
    mongoose.connect(url,connectionParams)
        .then( () => {
            console.log('Connected to the database ')
        })
        .catch( (err) => {
            console.error(`Error connecting to the database. n${err}`);
        })
}

module.exports=connectTomongo;
