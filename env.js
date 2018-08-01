import fs from "fs";
global.env = (item)=>{
    let env = JSON.parse(fs.readFileSync(__dirname+'/../../.env', 'utf8', function(err, data){
        console.log(err)
    }));
    return env[item];
}