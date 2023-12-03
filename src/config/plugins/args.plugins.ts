import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

export const argsv = yargs(process.argv)
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication table base'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication table limit'
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show multiplication table'
    })
    .check((argv, _options) => {
        if(argv.b < 1 ) throw 'Error: base must be a number';
        return true
    })
    .parseSync()