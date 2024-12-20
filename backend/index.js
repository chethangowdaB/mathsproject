const express = require('express');
const { connect,Schema,mongoose} = require('mongoose');
const connectTomongo= require('./db');
const app = express();
const cors=require('cors');

connectTomongo();
app.listen(4000,() => {
  console.log("Started on PORT 4000");
  })
const questionSchema = new Schema({
  id:Number,
  problem: String,
  hints:{
    hc:Boolean,
    hq:Boolean,
    he:Boolean,
    hs:Boolean
  },
  hc:{
    
        concept1:String,
        concept2:String,
        options1: String,
        options2: String,
        options3: String,
        options4: String,
    
    ul:{
      
      concept1:String,
      concept2:String,
      options1: String,
      options2: String,
      options3: String,
      options4: String,
  },
  al:{
    
    concept1:String,
    concept2:String,
    options1: String,
    options2: String,
    options3: String,
    options4: String,
}
  },
  hq:{
    
        concept1:String,
        concept2:String,
        options1: String,
        options2: String,
        options3: String,
        options4: String,
    
    ul:{
      
      concept1:String,
      concept2:String,
      options1: String,
      options2: String,
      options3: String,
      options4: String,
  },
  al:{
   
    concept1:String,
    concept2:String,
    options1: String,
    options2: String,
    options3: String,
    options4: String,
}},
he:{
  
      concept1:String,
      concept2:String,
      options1: String,
      options2: String,
      options3: String,
      options4: String,
 
  ul:{
    
    concept1:String,
    concept2:String,
    options1: String,
    options2: String,
    options3: String,
    options4: String,
},
al:{
  
  concept1:String,
  concept2:String,
  options1: String,
  options2: String,
  options3: String,
  options4: String,
}},
hs:{
  
      concept1:String,
      concept2:String,
      options1: String,
      options2: String,
      options3: String,
      options4: String,
  },
  ul:{
    
    concept1:String,
    concept2:String,
    options1: String,
    options2: String,
    options3: String,
    options4: String,
},
al:{
  
  concept1:String,
  concept2:String,
  options1: String,
  options2: String,
  options3: String,
  options4: String,
},
  
  Scs:String,
  
});

const qs = mongoose.model('Differncitiation', questionSchema);
const questionSchemaintegration = new Schema({
  id: Number,
  problem: String,
  hints: {
    hc: Boolean,
    hq: Boolean,
    he: Boolean,
    hs: Boolean
  },
  hc: {
    concept1: String,
    concept2: String,
    options1: String,
    options2: String,
    options3: String,
    options4: String,
    ul: {
      concept1: String,
      concept2: String,
      options1: String,
      options2: String,
      options3: String,
      options4: String
    },
    al: {
      concept1: String,
      concept2: String,
      options1: String,
      options2: String,
      options3: String,
      options4: String
    }
  },
  hq: {
    concept1: String,
    concept2: String,
    options1: String,
    options2: String,
    options3: String,
    options4: String,
    ul: {
      concept1: String,
      concept2: String,
      options1: String,
      options2: String,
      options3: String,
      options4: String
    },
    al: {
      concept1: String,
      concept2: String,
      options1: String,
      options2: String,
      options3: String,
      options4: String
    }
  },
  he: {
    concept1: String,
    concept2: String,
    options1: String,
    options2: String,
    options3: String,
    options4: String,
    ul: {
      concept1: String,
      concept2: String,
      options1: String,
      options2: String,
      options3: String,
      options4: String
    },
    al: {
      concept1: String,
      concept2: String,
      options1: String,
      options2: String,
      options3: String,
      options4: String
    }
  },
  hs: {
    concept1: String,
    concept2: String,
    options1: String,
    options2: String,
    options3: String,
    options4: String,
    ul: {
      concept1: String,
      concept2: String,
      options1: String,
      options2: String,
      options3: String,
      options4: String
    },
    al: {
      concept1: String,
      concept2: String,
      options1: String,
      options2: String,
      options3: String,
      options4: String
    }
  },
  Scs: String
});
const inte =mongoose.model("Integration",questionSchemaintegration)



app.use(cors());
app.get('/fetch/diffi',(req,res)=>{
  qs.find((err,val)=>{
    if(err){
      console.log("error");
    }
    else{
    res.json(val);
  }
  })
})
app.get('/fetch/integration',(req,res)=>{
  inte.find((err,val)=>{
    if(err){
      console.log("error");
    }
    else{
    res.json(val);
  }
  })
})
