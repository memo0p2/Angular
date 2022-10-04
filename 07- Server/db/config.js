const mongoose  = require("mongoose");

const dbConnection = async () => {
  try{
    await mongoose.connect(process.env.BD_CNN);
    console.log('Db online')
  }catch(e){
    console.log(e);
    throw new Error('Error a la hora de inicializar DB');
  }
}

module.exports={
    dbConnection
}