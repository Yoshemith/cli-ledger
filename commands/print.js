import chalk from 'chalk';
import fs from 'fs';

function print(filename) {
    console.log('--printCommand works!');
    //console.log(process.argv); 
    fs.readFile(`./${filename}`, 'utf8', (err, data) => {
        if (err) {
          //console.error(err);
          console.log(
            chalk.redBright("ERROR PRINT: The sintaxis must be either ")+chalk.yellowBright("<--file(--sort, --price-db)> <filepath> <command>")
              );
          return;
        }
        console.log(data);
        console.log("AQUI ES PRINT");
    });
}

export default print;