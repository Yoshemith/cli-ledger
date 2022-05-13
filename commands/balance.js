import chalk from 'chalk';
import fs from 'fs';

function balance(filename) {
    console.log('--balanceCommand works!');
    //console.log(process.argv); 
    fs.readFile(`./${filename}`, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        /* console.log(
            chalk.greenBright(data)
        ); */

        //Operaciones de balance

        const re = /(Asset|Bank):(.*)/gm;
        //(chapter \d+(\.\d)*)/i; (.*)
        const found = data.match(re);
        console.log(found);
        found.map((text)=>{
            console.log(text.replace('\t', '    '));
        });

        console.log("AQUI ES BALANCE");
    });

    //writeFile
    //return filename
}

export default balance;
