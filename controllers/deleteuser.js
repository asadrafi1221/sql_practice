import db_data from "../databaseplugin.js";

async function deleteuser(req, res) {
    try {
        const data = await db_data.query('SELECT * from students');
        const data_arr = data.rows;
        console.log(data_arr);

        const { rollnum } = req.body;
        
        if (!rollnum) {
            return res.send('plz fill the rollnum or give an integer..');
        }
        else {
            let usermatched = false;
            for (let i = 0; i < data_arr.length; i++) {
                if (rollnum == data_arr[i].rollnum) {
                    usermatched = true;
                    break;
                }
            }
           
            if (usermatched === false) {
                res.send('sorry i dont think so your data exist');
            }
            else {
                await db_data.query('DELETE from students where rollnum = $1', [rollnum]);
                res.send('user deleted succesfully');
            }
        }
    }
    catch (err) {
        console.log(err);
        res.send('Database connection error ...');
    }


}
export default deleteuser;