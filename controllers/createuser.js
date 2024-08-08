import pg from "pg";
import db_data from "../databaseplugin.js";



const createuser = async (req, res) => {
    const { name, rollnum, studentclass } = req.body;

    if (!name || !rollnum || !studentclass) {
        return res.send('plz fill all the required feilds');
    }

    else {
        try {
            await db_data.connect();
            const data = await db_data.query('SELECT * FROM students');

            let quiz = data.rows;
            console.log('this is data :');
            console.log(quiz);

            await db_data.query(`INSERT INTO students(rollnum,name, class) VALUES ($1, $2, $3)`, 
            [rollnum, name, studentclass]);
            


            return res.send('data inserted successfully');
            
        
            
        }
        
        catch (err) {
            console.error(err);
            res.status(500).send('database error');
        }
    }
};

export default createuser;

