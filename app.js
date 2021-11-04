const prompt = require('prompt-sync')({siginit: true});
const quit = 'game over, press and hold control and c together ';
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
    console.log('now the guard asks you to take the amulet of kings to a guy called jauffre')
} else if(imperial == 'B') {
    console.log(`${name} escapes the prison and has gained some strength `)
} else if(imperial == 'C') {
    console.log('as you were leaving, you hear one of the guards say...')
    console.log('STOP!, YOU VIOLATED THE LAW!')
    prompt(quit);
} else {
    console.log('Invalid Answer')
    prompt(quit);
};
const cclass = prompt('create a class for your character ');
console.log(`Now in Cyrodill ${name} the ${race} is a great ${cclass}`);
console.log(`${name} has 3 places to go, do you...
A. Go to the imperial City
B. Go to a house out of town
C. Go exploring `);
const dir = prompt('');
if(dir == 'A') {
    console.log(`${name} 'You find an allyway, a house and jauffre, do you...
A. Go to the allyway
B. Go to the house
C. Talk to jauffre`);
const imp = prompt('');
if (imp == 'A') {
    console.log(`You see a guy, he says "You want some sk-skooma" Do You...
A. Take the skooma
B. Get out`);
const skooma = prompt('');
if (skooma == 'A') {
    console.log(`You take the skooma and you hear... 
    STOP, YOU VIOLATED THE LAW!`)
    console.log('you got the ending: ')
    console.log(`
    ┏━━━┳┓
    ┃┏━┓┃┃
    ┃┗━━┫┃┏┳━━┳━━┳┓┏┳━━┓
    ┗━━┓┃┗┛┫┏┓┃┏┓┃┗┛┃┏┓┃
    ┃┗━┛┃┏┓┫┗┛┃┗┛┃┃┃┃┏┓┃
    ┗━━━┻┛┗┻━━┻━━┻┻┻┻┛┗┛`)
} else if (skooma == 'B') {
    console.log('The guard thanks you and catches the skooma dealer.')
    console.log('You got the ending: ')
    console.log(`
    ╔═══╗──────────────╔╗─────╔╗
    ║╔═╗║─────────────╔╝╚╗────║║
    ║╚═╝╠══╦══╦══╦══╦═╩╗╔╬══╦═╝║
    ║╔╗╔╣║═╣══╣╔╗║║═╣╔═╣║║║═╣╔╗║
    ║║║╚╣║═╬══║╚╝║║═╣╚═╣╚╣║═╣╚╝║
    ╚╝╚═╩══╩══╣╔═╩══╩══╩═╩══╩══╝
    ──────────║║
    ──────────╚╝`)
}
}
} else if(dir == 'B') {
    console.log(`${name} sees a person asleep, do you...
A. Go kill them
B. Leave`);
const darkbquest = prompt('')
if (darkbquest == 'A') {
    console.log('Your kill is seen by unkown foces... ')
    console.log(`${name} later sleeps, he is seen by Lucien LaChance of The Dark Brotherhood, He says "Kill Rufio, 
    And your initiation into The Dark Brotherhood... Shall be complete" ${name} is no longer a ${cclass}, he is an
    asassin for The Dark Brotherhood `)
    console.log('You got the Ending: ')
    console.log(`
        ╭━━╮     ╭╮╭╮      ╭╮         ╭╮
        ┃╭╮┃    ╭╯╰┫┃      ┃┃         ┃┃
        ┃╰╯╰┳━┳━┻╮╭┫╰━┳━━┳━┫╰━┳━━┳━━┳━╯┃
        ┃╭━╮┃╭┫╭╮┃┃┃╭╮┃┃━┫╭┫╭╮┃╭╮┃╭╮┃╭╮┃
        ┃╰━╯┃┃┃╰╯┃╰┫┃┃┃┃━┫┃┃┃┃┃╰╯┃╰╯┃╰╯┃
        ╰━━━┻╯╰━━┻━┻╯╰┻━━┻╯╰╯╰┻━━┻━━┻━━╯`)
}   else if (darkbquest == 'B') {
    console.log('You leave the house and are killed by The Dark Brotherhood ');
    console.log('You got the ending: ');
    console.log(`🇩​​​​​🇪​​​​​🇫​​​​​🇪​​​​​🇦​​​​​🇹​​​​​🇪​​​​​🇩​​​​​`)
}
} else if(dir == 'C') {
    console.log('')
} else {
    console.log('Invalid Awnser')
    prompt(quit);
};