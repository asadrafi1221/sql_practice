import pg from "pg";
import db_data from "../databaseplugin.js";
var quiz = {};

const readingdata = async (req, res) => {
    try{
    await db_data.connect();
    const data = await db_data.query('SELECT * from students');
    quiz = data.rows;
    let obj = {};

for(let i=0;i<quiz.length;i++){
     obj[`user ${i} `] = quiz[i];
}
res.send(obj);
    }
    catch(err){
        res.send('Database_connection_error');
    }
}


export default readingdata;