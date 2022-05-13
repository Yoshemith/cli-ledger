import chalk from 'chalk';
import fs from 'fs';

function whichCommand(type, lineArgo) {
    console.log('--whichFlag! works!');
    //console.log(process.argv); THIS FILE IS UNDER DEVELOPMENT, IT DOESN'T WORK YET
    priceDbFlag();
    if(argumentos[0] == 'print'){
          return 'sort';
      } else if(argumentos[0] == 'balance'){
          return 'sort';
      }else if(argumentos[0] == 'register'){
          return 'pricedb';
      }else{
          return 'error';
      }
}

export default whichCommand;