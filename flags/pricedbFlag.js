import chalk from 'chalk';
import fs from 'fs';

function pricedbFlag(filename) {
    console.log('--pricedbFlag works!');
    //console.log(process.argv); 
    fs.readFile(`./${filename}`, 'utf8', (err, data) => {
        if (err) {
          //console.error(err);
          console.log(
            chalk.redBright("ERROR: The sintaxis must be either ")+chalk.yellowBright("<--file, --sort, --price-db> <filepath> <command>")
              );
          return;
        }
        console.log(data);
        console.log("AQUI ES PRICEDBFLAG");
    });
}

export default pricedbFlag;