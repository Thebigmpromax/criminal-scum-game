const prompt = require('prompt-sync')({siginit: true});
const quit = 'game over, press control and c together ';
console.log('Thebigmpromax Presents');
console.log('A recreation of a game made by Bethesda Game Studios');
console.log('The Elder Scrolls IV');
console.log('Oblivion');
const name = prompt('Choose a name for your Character. ');
const race = prompt(`Ok, ${name}, create a species. `);
console.log(`You are ${name} the ${race} `);
console.log('')
console.log(`${name} is in the imperial prison, he sees the emperor, Uriel Septim VII. do you? 
A. Talk to him to get the key. 
B. Kill him to get the key. 
C. Pickpocket him to get the key `);
const imperial = prompt('');
if(imperial == 'A') {
    console.log('You get the key and the emperor is assasinated')
    console.log('now the guard asks you to take the amulet of kinks to a guy')
} else if(imperial == 'B') {
    console.log(`${name} escapes the prison and has gained some strength `)
} else if(imperial == 'C') {
    console.log('as you were leaving, you hear one of the guards say...')
    console.log('STOP!, YOU VIOLATED THE LAW!')
    prompt(quit);
} else {
    console.log('Invalid Awnser')
    prompt(quit);
};
const cclass = prompt('create a class for your character ');
console.log(`Now in Cyrodill ${name} the ${race} is a great ${cclass}`);