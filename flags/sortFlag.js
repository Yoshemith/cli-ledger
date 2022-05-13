import chalk from 'chalk';
import fs from 'fs';

function sortFlag(filename) {
    console.log('--sortFlag works!');
    //console.log(process.argv); 
    //aqui ordenamos
    //Pasamos a print
    fs.readFile(`./${filename}`, 'utf8', (err, data) => {
        if (err) {
          //console.error(err);
          console.log(
            chalk.redBright("ERROR: The sintaxis must be either ")+chalk.yellowBright("<--file, --sort, --price-db> <filepath> <command>")
              );
          return;
        }
        //console.log(data);
        console.log("AQUI ES SORTFLAG");
    });
}

export default sortFlag;



// ledgercito --sort archivo print

// --file -> fileFlag() 
/* fileFlag() {
    -print()
    -balance()
    -register()
} */

// --sort -> sortFlag()
/* sortFlag() {
    -print()
    -balance()
    -register()
} */

// --price-db -> priceDbFlag()
/* pricedbFlag() {
    -print()
    -balance()
    -register()
} */