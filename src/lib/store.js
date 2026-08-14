const fs=require('fs'); const path=require('path');
const DB=path.join(__dirname,'../../data/db.json');
function read(){return JSON.parse(fs.readFileSync(DB,'utf8'));}
function write(data){const tmp=DB+'.tmp'; fs.writeFileSync(tmp,JSON.stringify(data,null,2)); fs.renameSync(tmp,DB); return data;}
module.exports={read,write};
