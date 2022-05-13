#! /usr/bin/env node

import { program } from 'commander';

import fileCommand from './commands/fileCommand.js';

import fileFlag from './flags/fileFlag.js';
import sortFlag from './flags/sortFlag.js';
import pricedbFlag from './flags/pricedbFlag.js';

program.version('0.0.1');

program
    .option('-f, --file <argo>', "Just testing file.")
    .option('-s, --sort <argo>', "Just testing sort.")
    .option('-pd, --price-db <argo>', "Just testing pricedb.")
    .description('Read file as a ledgercito file')
    .action(fileCommand);
    
/* program
    .command('print')
    .description('Add a new TODO task')
    .action(sortFlag)

program
    .command('balance')
    .description('Add a new TODO task')
    .action(pricedbFlag) */

program.parse();

/*
program
    .option('--file <argumento...>', "The file you're trying to use. If not specified, it will show an error.")
    .option('-f <argumento...>', "The file you're trying to use. If not specified, it will show an error.")
    .description('Read file as a ledgercito file')
    .action(fileCommand);

program
    .option('--sort', "it sorts the values of the file. If not specified, it will show an error.")
    .description('For sorting values')
    .action(sortFlag);

program
    .option('--price-db <argumento...>', "Show price of the file values or something. If not specified, it will show an error.")
    .description('Check prices in ledgercito')
    .action(pricedbFlag);

*/

    /* 
program
    .command('add <task>')
    .description('Add a new TODO task')
    .action(add)

program
    .command('mark-done')
    .description('Mark commands done')
    .option('-t, --tasks <tasks...>', 'The tasks to mark done. If not specified, all tasks will be marked done.')
    .action(markDone) */
