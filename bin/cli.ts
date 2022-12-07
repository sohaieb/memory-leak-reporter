import Chalk from "chalk";
import yargs from "yargs";
import {hideBin} from "yargs/helpers";

const argv = yargs(hideBin(process.argv));
argv
    .scriptName('mem-leak-reporter')
    .usage('$0 <cmd> [args]')
    .command('start-test [folder]','Execute parallel multi-tests', yargs => {
        yargs.positional('folder',
            {
            describe: 'Folder containing action, back, pre files',
            default: './app/'
        });
    }, args => {
        console.log('hello man');
    });

argv
    .command('single [file]','Execute single testing file', args => {
    yargs.positional('file',
        {
            describe: 'entry file'
        });
})
    .help()
    .argv;