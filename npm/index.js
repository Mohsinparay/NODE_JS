import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));
const log = console.log;
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// // Compose multiple styles using the chainable API
// log(chalk.blue.bgRed.bold('Hello world!'));

// // Pass in multiple arguments
// log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// // Nest styles
// log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// // Nest styles of the same type even (color, underline, background)
// log(chalk.green(
// 	'I am a green line ' +
// 	chalk.blue.underline.bold('with a blue substring') +
// 	' that becomes green again!'
// ));


// var validator = require('validator');
import validator from 'validator';
const res = validator.isEmail('fo@obar.com'); //=> true
console.log(res ? chalk.green(res) : chalk.red(res));