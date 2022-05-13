import chalk from 'chalk';

export default function errorMsg() {
    console.log(
        chalk.redBright("ERROR: The sintaxis must be either \n")
        +chalk.yellowBright("--file, --sort, --price-db> <filepath> <command>\n")
        +chalk.bgWhiteBright("Remember that the avaliable commands are: print\n")
        +chalk.yellowBright("balance, register are WIP")
    );
}