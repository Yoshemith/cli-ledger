#! /usr/bin/env node

import { program } from 'commander';
import whichFlag from './flags/whichFlag.js';

program.version('0.0.1');

program
    .option('-f, --file', "Just testing file.")
    .option('-s, --sort', "Just testing sort.")
    .option('-pd, --price-db', "Just testing pricedb.")
    .description('Read file as a ledgercito file')
    .action(whichFlag);

program.parse();

// How to use the cli (only print command)
// ledgercito --file ./files/Income.ledger print ---> Para un ledger
// ledgercito --file ./files/Index.ledger print ---> Para todos los ledgers