import chalk from 'chalk';
import printCommand from './print.js';
import balanceCommand from './balance.js';
import registerCommand from './register.js'; 
import fileFlag from '../flags/fileFlag.js';
import sortFlag from '../flags/sortFlag.js';
import priceDbFlag from '../flags/pricedbFlag.js';

function fileCommand(argo) {
  let argumentos = process.argv.slice(2);
  console.log('fileCommand, it works!');
  console.log(argo);//console.log(comando);
  console.log(argumentos);

  //whichflag
  if(argumentos[0] == '--file' || argumentos[0] == '-f'){
      //whichCommand
      let filing = fileFlag(argo.file); 
      console.log("filing: ", filing); 
      if(argumentos[2] == 'print'){
        printCommand(filing);
      } else if(argumentos[2] == 'balance'){
        printCommand(balanceCommand(filing));
      } else if(argumentos[2] == 'register'){
        printCommand(registerCommand(filing));
      }
      //deleteTempFile(filing);
  } else if(argumentos[0] == '--sort' || argumentos[0] == '-s'){
    let sorting = sortFlag(argo.sort);
      if(argumentos[2] == 'print'){
        printCommand(sorting);
      } else if(argumentos[2] == 'balance'){
        printCommand(balanceCommand(sorting));
      } else if(argumentos[2] == 'register'){
        printCommand(registerCommand(sorting));
      }
      //deleteTempFile(sorting);
  } else if(argumentos[0] == '--price-db'){
      //priceDbFlag(argo.pricedb);
      console.log("Pricedb");
  }else{
    console.log(
      chalk.redBright("ERROR: The sintaxis must be either ")+chalk.yellowBright("<--file, --sort, --price-db> <filepath> <command>")
        );
    return;
  }
}

export default fileCommand;

  /* argumentos.map((value)=> {
    if(value == 'print')
      {
        printCommand(argo.file);
    }else if(value == 'balance'){
        balanceCommand(argo.file);
    } 
  })/*

    //console.log(argumento);
    //argumento.indexOf([1].toString();
    //console.log(JSON.stringify(argumento, null, 4));
    //Object.keys(argumento).forEach((prop)=> console.log(prop));
    //console.log(argumento);
    /* let argo = process.argv.slice(2);
    argo.map((value)=>{
      console.log(value);
    }) */