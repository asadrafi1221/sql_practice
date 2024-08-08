import express from "express";
import getpage from "./routes/getroute.js";
import createuser from "./routes/signin.js";
import logged_in from "./routes/loggedin.js";
import updateroute from "./routes/updateroute.js";
import deleteuser from "./routes/deleteroute.js";


//----------------------------///i have created this page so it can use my all api in my code//----------------------------------------------->

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(getpage);
app.use(createuser);
app.use(logged_in);
app.use(updateroute);
app.use(deleteuser);


app.listen(port, () => {
    console.log(`the app is listening on ${port}`);
})