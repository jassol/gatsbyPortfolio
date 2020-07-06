const projectData = [
  {
    name: 'ProBanker Simulations Data Viz',
    date: 'July 2020 - now',
    description: 'Finance Model Data Viz',
    stack: ['Javascript', 'XML', 'XSLT', 'D3.js'],
    links: {
      github: 'https://github.com/people-power-solar',
      deployed: 'https://peoplepower.netlify.app/'
    },
    shortContent: "Coming Soon."
  },
  {
    name: 'PPSC Portal',
    date: 'May 2020 - now',
    description: 'Member Portal for Solar Group',
    stack: ['Javascript', 'React/Redux', 'Express', 'Airtable', 'Mocha/Chai/Sinon'],
    links: {
      github: 'https://github.com/people-power-solar',
      deployed: 'https://peoplepower.netlify.app/'
    },
    shortContent: "A member-portal for a community-owned solar cooperative. I write tests, finesse the UI, and update API connectivity for their log-in and billing processes."
  },
  {
    name: 'SokoCity',
    date: 'April 2020',
    description: 'Puzzle Adventure Game',
    stack: ['Javascript', 'Phaser.io', 'Firebase'],
    links: {
      github: 'https://github.com/destination-pop/soko-city',
      youtube: 'https://www.youtube.com/watch?v=9Yr-5DsVitw&list=PLx0iOsdUOUmk6YoAw7y5AbHeXf45tuNnF&index=17&t=0s',
      deployed: 'https://soko-city.firebaseapp.com/'
    },
    shortContent: 'My team of four built SokoCity with inspiration from a popular farming game called Stardew Valley. We recreated some of our favorite gaming features: NPC interactivity, puzzle challenges, randomized layouts and level progression.',
    longContent: "Welcome to SokoCity, a role-playing game featuring logic puzzles and food quests. /n /n My team of four built this game with inspiration from Stardew Valley, a popular farming game released in 2016. We wanted to recreate some of our favorite gaming features: NPC interactivity, puzzle challenges, randomized layouts and level progression. And so SokoCity was born. /n /n A major challenge proved to be the integration of a puzzle generation Node module with Phaser.io, our chosen gaming framework. The puzzle generator guaranteed a puzzle layout that was technically solveable. But we needed to manipulate that output to become Phaser-readable input. I took on this issue. With a series of mapping functions, created a layer for each individual object in the puzzle- a box, a wall, or a goal tile. This allowed my team to add custom physics properties in Phaser, rendering a functional puzzle within our gaming world."
  },
  {
    name: 'Modern Fruit',
    date: 'May 2020',
    description: 'E-Commerce Application',
    stack: ['Javascript', 'React/Redux', 'Express', 'Postgres'],
    links: {
      github: 'https://github.com/A-modern-fruit-shop-2001-tof232c/A-modern-fruit-stand',
      deployed: 'https://modern-fruit-stand.herokuapp.com/'
    },
    shortContent: 'This mock e-commerce application was built as a group project at Grace Hopper Academy. Features include user login, browsing products, admin tools, and shopping cart persistence.',
    longContent: "Modern Fruit is the modern day version of a fruit stand- an e-commerce site where you can login as a user, browse available products, and curate your shopping cart. /n /n My team built these MVP features as a project at Grace Hopper Academy, but decided to build further. We added an administrator user type that can edit prices and user information. Additionally, we enhanced the user experience by taking advantage of local storage to build out a persistent cart for guest users. /n /n Cart persistence proved to be an initial challenge. The team debated several options for guest cart storage- session storage, local storage or database storage? I advocated for local storage due to the simplicity of setup, relative speed of access, as well as data persistence between browsing sessions. The team agreed. For our use case, local storage provided the simplest answer to build out our desired user experience."
  }
];

const socialData = [
  {type: 'github', link: 'https://github.com/jassol'},
  {type: 'linkedin', link: 'https://www.linkedin.com/in/jasminsoltani/'},
  {type: 'medium', link: 'https://medium.com/@jassol'},
  {type: 'email', link: 'mailto:jksoltani@gmail.com'},
  {type: 'resumé', link: 'localPathHere'}
];

export {
  projectData,
  socialData
};
