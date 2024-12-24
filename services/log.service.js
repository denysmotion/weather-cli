import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error);
}

const printSuccess = (message) => {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
}

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
        No parameters - weather output
        -s [CITY] to search for a city
        -h help
        -t [API_KEY] to save the token
        `
    );
}

export { printError, printSuccess, printHelp };