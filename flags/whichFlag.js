import chalk from 'chalk';
import printCommand from '../commands/print.js';
import balanceCommand from '../commands/balance.js';
import registerCommand from '../commands/register.js'; 
import fileFlag from './fileFlag.js';
import sortFlag from './sortFlag.js';
import priceDbFlag from './pricedbFlag.js';
import readLedgerFile from '../tools/readLedgerFile.js';
import msgError from '../tools/msgError.js';

export default function whichFlag() {
  let argumentos = process.argv.slice(2);
  //console.log(argumentos); console.log(readLedgerFile(argumentos[1]));

  //whichflag
  if(argumentos[0] == '--file' || argumentos[0] == '-f'){
    let dataContent = readLedgerFile(argumentos[1]);
      if(argumentos[2] == 'print'){
        printCommand(dataContent);
      } else if(argumentos[2] == 'balance'){
        //printCommand(dataContent);
      } else if(argumentos[2] == 'register'){
        //printCommand(dataContent);
      } else {
        msgError();
      }
  }else{
    msgError();
  } 
}
