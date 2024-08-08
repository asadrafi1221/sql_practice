import db_data from "../databaseplugin.js";

const updateuser = async (req, res) => {

    try {
        const { newname, studentclass, studentrollnum, prevrollnum } = req.body;

        if (!newname || !studentclass || !studentrollnum || !prevrollnum) {
            return res.send('plz fill all the required feilds');
        }

        const data = await db_data.query('SELECT * FROM students');
        const data_arr = data.rows;
        console.log(data_arr);
        let userFound = false;
        let index = -1;

        for (let i = 0; i < data_arr.length; i++) {
            if (prevrollnum === data_arr[i].rollnum) {
                userFound = true;
                index = i;
                break;
            }

        }



        if (userFound === false) {
            res.send('Your rollnum is not present in our records');
        } else {

            await db_data.query(`UPDATE students SET rollnum = $1, name = $2 , class = $3 WHERE id = $4`,
                [studentrollnum, newname, studentclass, data_arr[index].id]);

            res.send('Data updated successfully');
        }
    }
    catch (err) {
        console.error('Database error:', err);
        res.send('Database error');
    }
};

export default updateuser;
