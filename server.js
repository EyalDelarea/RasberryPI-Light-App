const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var path = require('path');
var cors = require('cors')
const { exec } = require("child_process");
const script_path  = '/home/pi/RasberryPI-Light-App/projector_'


//comment
app.use(cors());
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/build')));

app.get("/",function (req,res) {
    res.sendFile(path.join(__dirname+'/build/index.html'))
})
// console.log that your server is up and running
app.listen(port, () => console.log(`Server is running on port : ${port}`));


app.get('/off',function (req,res) {

    exec(script_path+"off.sh", (error, stdout, stderr) => {
        try{
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        res.send({ express: stdout });

      }
      catch(e){console.error(e);}
      })
    res.send({express:"off"})
})

app.get('/on',function (req,res) {

    exec(script_path+"on.sh", (error, stdout, stderr) => {
        try{
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        res.send({ express: stdout });

      }
      catch(e){console.error(e);}
      })
    res.send({express:"on"})
})



//get state method
app.get('/get_state',function (req,res){

  exec(script_path+"state.sh", (error, stdout, stderr) => {
    try{
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    res.send({ express: stdout });

  }
  catch(e){console.error(e);}
  })
});
