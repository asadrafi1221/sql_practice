import pg from "pg";
import db_data from "../databaseplugin.js";

async function checkinguser(req, res) {
    const { name, rollnum, studentclass } = req.body;

    if (!name || !rollnum || !studentclass) {
        return res.send('plz fill all the required feilds');
    }


    await db_data.connect();
    let data = await db_data.query('SELECT * from students');
    let obj = data.rows;
    let find_user = false;

    for (let i = 0; i < obj.length; i++) {
        if (rollnum === obj[i].rollnum) {
            find_user = true;
            break;
        }
    }

    if (find_user === false) {
        return res.send('plz try again .');
    } else {
        return res.send('user has been logged in');
    }

}

export default checkinguser;
