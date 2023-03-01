

//create file
// const fs = require('fs');
// fs.appendFile('welcome.txt', 'hello node', function (err) { 
//       if (err) throw err;   
//       console.log('Fichier créé !');});


//read file
const fs = require('fs');
fs.readFile('welcome.txt','utf-8', function (err, data) {
    if (err) throw err;
    console.log(data);
  });   
  
  

