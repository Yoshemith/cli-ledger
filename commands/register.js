import chalk from 'chalk';
import fs from 'fs';

function register(filename) {
    console.log('--balanceCommand works!');
    //console.log(process.argv); 
    fs.readFile(`./${filename}`, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(
            chalk.greenBright(data)
        );

        //Operaciones de balance
        console.log("AQUI ES REGISTER");
        
    });

    //writeFile
    //return filename
}

export default register;