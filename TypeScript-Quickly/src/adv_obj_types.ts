// Interfaces and Types
interface Run {
    miles: number;
};

function updateRunGoal(run: Run) {
    console.log(`
    Miles left:      ${50 - run.miles}
    Percent of goal: ${(run.miles / 50) * 100}% complete
    `)
}

updateRunGoal({
    miles: 5,
});

// Interfaces and Classes & Deep Types
interface Directory {
  addFile: (name: string) => void;
  // Define a config type member here
  config: Config;
}

interface Config {
    default: DefaultConfig;
}

interface DefaultConfig {
    encoding: string;
    permissions: string;
}

class DesktopDirectory implements Directory {
  config = {
    default: {
      encoding: 'utf-8',
      permissions: 'drw-rw-rw-',
    }
  }

  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop = new DesktopDirectory();
console.log(Desktop.config);
// Desktop.addFile('lesson-notes.txt');
// Desktop.showPreview('lesson-notes.txt');

// Extending Interfaces
interface Shape {
    color: string;
}
interface Square extends Shape {
    sideLength: number;
}
const mySquare: Square = {
    sideLength: 10,
    color: 'blue'
};

interface Developer extends HumanB {
    code: () => void;
}
interface HumanB {
    name: string;
    hobbies: string[];
}
const me: Developer = {
    code: () => console.log('Headphones on. Coffee brewed. Editor open.'),
    name: 'Augustine',
    hobbies: ['Building rockets']
}
me.code();

