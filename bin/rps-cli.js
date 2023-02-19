#!/usr/bin/env node
import minimist from 'minimist'
import {rps} from '../lib/rpsls.js'

const args = minimist(process.argv.slice(2));

if(args.h || args.help){
    console.log(`Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
    
      -h, --help      display this help message and exit
      -r, --rules     display the rules and exit
    
    Examples:
      node-rps        Return JSON with single player RPS result.
                      e.g. {"player":"rock"}
      node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                      e.g {"player":"rock","opponent":"scissors","result":"win"}`);
    process.exit(0);
}

if(args.r || args.rules){
    console.log(`Rules for Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`);
    process.exit(0);
}

if(args._.length > 1){
    console.log('[ARGUMENT] is out of range.');
    console.log(`Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
    
      -h, --help      display this help message and exit
      -r, --rules     display the rules and exit
    
    Examples:
      node-rps        Return JSON with single player RPS result.
                      e.g. {"player":"rock"}
      node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                      e.g {"player":"rock","opponent":"scissors","result":"win"}`);
    console.log(`Rules for Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`);
    process.exit(0);
}

if(args._.length === 0){
    console.log(JSON.stringify(rps()));
    process.exit(0);
}

if(args._.length === 1){

    const playerChoice = args._[0].toString().toLowerCase();
    const rpsArr = ['rock', 'paper', 'scissors'];
    if(rpsArr.includes(playerChoice)){
        console.log(JSON.stringify(rps(playerChoice)));
        process.exit(0);
    } else {
        console.log('Invalid argument');
        console.log(`Available options: rock, paper, scissors`);
        process.exit(0);
    }
}