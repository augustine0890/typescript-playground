// Defining Unions
let ID: string | number;
ID = 1;
ID = '001';
console.log(`The ID is ${ID}.`);

function printNumsAndStrings(statement: string | number) {
    console.log(`ℹ️ LOG:: ${statement}`);
}
printNumsAndStrings(2);
printNumsAndStrings('hello!');

// Type Narrowing
function formatValue(value: string | number) {
  // Write your code here
  if (typeof value === 'string') {
    console.log(value.toLowerCase());
  } else if (typeof value === 'number') {
    console.log(value.toFixed(2));
  }
}
formatValue('Hiya');
formatValue(42);

// Inferred Union Return Types
type User = {
    id: number;
    username: string;
};

function createUser() {
    const randomChance = Math.random() >= 0.5;

    if (randomChance) {
        return { id: 1, username: 'nikko' };
    } else {
        return 'Could not create a user.';
    }
}

let userData: User | string = createUser()

// Unions and Arrays
const dateNumber = new Date().getTime();
const dateString = new Date().toString();
const timesList: (string | number)[] = [dateNumber, dateString];
console.log(timesList);

function formatListings(listings: (string | number)[]) {
  return listings.map((listing) => {
    if (typeof listing === 'string') {
      return listing.toUpperCase();
    }

    if (typeof listing === 'number') {
      return `$${listing.toLocaleString()}`;
    }
  });
}
const result = formatListings([
    '123 Main St',
    226800,
    '580 Broadway Apt 4a',
    337900,
]);
console.log(result);

// Common Key Value Pairs
type Goose = { 
    isPettable: boolean; 
    hasFeathers: boolean;
    canThwartAPicnic: boolean;
}
 
type Moose = {
    isPettable: boolean; 
    hasHoofs: boolean;
}

const pettingZooAnimal: Goose | Moose = {
    isPettable: true,
    hasHoofs: false
};
console.log(pettingZooAnimal.isPettable); // No TypeScript error
console.log(pettingZooAnimal.hasHoofs);

type Like = {
  username: string;
  displayName: string;
};

type Share = {
  username: string;
  displayName: string;
};

function getFriendNameFromEvent(event: Like | Share) {
  return event.displayName || event.username;
}

const newEvent = {
  username: 'vkrauss',
  displayName: 'Veronica Krauss',
};

const friendName = getFriendNameFromEvent(newEvent);
console.log(`You have an update from ${friendName}.`);

// Unions with Literal Types
type Status = 'idle' | 'downloading' | 'complete';

function downloadStatus(status: Status) {
  if (status === 'idle') {
    console.log('Download');
  } else if (status === 'downloading') {
    console.log('Downloading...');
  } else if (status === 'complete') {
    console.log('Your download is complete!');
  }
}

downloadStatus('complete');