import chalk from 'chalk';
import fs from 'fs';

function fileFlag(filename) {
  console.log("AQUI ES FILEFLAG");
  //Read File and check if exists
  fs.readFile(`./${filename}`, 'utf8', (err, data) => {
    if (err) {
      console.log(
        chalk.redBright("ERROR: The sintaxis must be either ")+chalk.yellowBright("<--file, --sort, --price-db> <filepath> <command>")
          );
      return;
    }else{
      //Create a temporary copy of the file
      let tempFilePath = '././tempFiles/copyTempFile.ledger';
      fs.copyFile(`./${filename}`, tempFilePath, (err) => {
        if (err) {
          console.log("Error in the Copy, Found:", err);
        }
        else {
          // Get the current filenames
          /* console.log("\nFile Contents of copied_file: \n",
            fs.readFileSync("././tempFiles/copyTempFile.ledger", "utf8")); */
          console.log(tempFilePath);
          return tempFilePath;
        }
      });
    }
    //console.log(data);
    //console.log("AQUI ES FILEFLAG");
  });

    /* console.log('--fileFlag it works!');
    let argo = process.argv.slice(2);
    argo.map((value)=>{
      console.log(value);
    }) */
    //console.log(process.argv); 

    //console.log(argumento);
    //argumento.indexOf([1].toString();
    //console.log(JSON.stringify(argumento, null, 4));
    //Object.keys(argumento).forEach((prop)=> console.log(prop));
    //console.log(argumento);
}

export default fileFlag;