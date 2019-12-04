// OBJECT DRILLS

const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Justice League' },
    { id: 7, name: 'Hulk', squad: 'Avengers' },
];

// 1.

let loaf = {
    flour: 300,
    water: 210,
    hydration: function () {
        return (this.water / this.flour) * 100;
    }
};

console.log(loaf.flour, loaf.water);
console.log(loaf.hydration());

// 2.

let obj = {
    foo: 1,
    bar: 2,
    fum: 3,
    quux: 4,
    spam: 5
};

for (let key in obj) {
    console.log(`Key: ${key}, Value: ${obj[key]}`);
};

// 3.

let obj2 = {
    meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(obj2.meals[3]);

// 4.

let myArr = [
    {
        name: 'Brittany',
        jobTitle: 'Student'
    },
    {
        name: 'Daisy',
        jobTitle: 'Dog'
    },
    {
        name: 'Kim Kardashian',
        jobTitle: 'Reality TV Star'
    },
    {
        name: 'Lea Michele',
        jobTitle: 'Actress'
    }
];

myArr.forEach(person => {
    console.log(`Name: ${person.name}, Job Title: ${person.jobTitle}`);
});

// 5.)

let myArr2 = [
    {
        name: 'Brittany',
        jobTitle: 'Student'
    },
    {
        name: 'Daisy',
        jobTitle: 'Dog',
        boss: 'Henry'
    },
    {
        name: 'Kim Kardashian',
        jobTitle: 'Reality TV Star',
        boss: 'Henry'
    },
    {
        name: 'Lea Michele',
        jobTitle: 'Actress',
        boss: 'Henry'
    }
];

myArr2.forEach(person => {
    let { name, jobTitle, boss = 'Non-existant' } = person;
    console.log(`${jobTitle} ${name} reports to ${boss}.`);
});

myArr2.forEach(person => {
    if (person.boss) {
        console.log(`${person.name} reports to ${person.boss}.`);
    } else {
        console.log(`${person.title} ${person.name} doesn't report to anybody.`);
    };
});

// 6.

const decode = string => {
    let obj = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4
    };

    return string.split(' ').map(word => {
        if (Object.keys(obj).includes(word[0])) {
            let firstChar = word[0];
            return word[obj[firstChar]];
        } else {
            return ' ';
        }
    }).join('');
}

console.log(decode('craft block argon meter bells brown croon droop'));

// 7.

const createCharacter = (name, race, origin, attack, defense) => {
    return {
        describe: function () {
            console.log(`${name} is a ${race} from ${origin}`);
        },
        evaluateFight: function (char) {
            return ``
        }
    }
};

const chars = [
    {
        name: 'Gandalf the White',
        nickname: 'gandalf',
        race: 'Wizard',
        origin: 'Middle Earth',
        attack: 10,
        defense: 6
    },
    {
        name: 'Bilbo Baggins',
        nickname: 'bilbo',
        race: 'Hobbit',
        origin: 'The Shire',
        attack: 2,
        defense: 1
    },
    {
        name: 'Frodo Baggins',
        nickname: 'frodo',
        race: 'Hobbit',
        origin: 'The Shire',
        attack: 2,
        defense: 1
    },
    {
        name: 'Aragorn son of Arathorn',
        nickname: 'aragorn',
        race: 'Man',
        origin: 'Dunnedain',
        attack: 6,
        defense: 8
    },
    {
        name: 'Legolas',
        nickname: 'legolas',
        race: 'Elf',
        origin: 'Woodland Realm',
        attack: 8,
        defense: 5
    }
];

let characters = chars.map(char => {
    return createCharacter(char.name, char.race, char.origin, char.attack, char.defense);
});

let index = chars.findIndex(c => c.nickname === 'aragorn');
characters[index].describe();

// 8.

const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Justice League' },
    { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query) {
    console.log(`query: ${query}`);
    console.log(`object.keys: ${Object.keys(query)}`);
    for (let key in query) {
        console.log(query[key]);
        let foundHero = arr.find(hero => query[key] === arr[key]);
        console.log(`found hero: ${foundHero}`);
        if (foundHero) {
            return foundHero;
        }
    }
    return null;
}

console.log(findOne(HEROES, { id: 1 }));
//=> { id: 1, name: 'Captain America', squad: 'Avengers' }

console.log(findOne(HEROES, { id: 10 }));
//=> null

console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));
//=> null

console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
//=> { id: 5, name: 'Wonder Woman', squad: 'Justice League' }

console.log(findOne(HEROES, { squad: 'Justice League' }));
//=> { id: 4, name: 'Superman', squad: 'Justice League' }



