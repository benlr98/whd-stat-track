

export const getRandomFromArray = (array) => {
  const item = array[Math.floor(Math.random() * array.length)];
  return item;
}
  
export const testInitialPlayerStats = {
  twoMade:0,
  twoMiss:0,
  oneMade:0,
  oneMiss:0,
  dunk:0,
  oreb:0,
  dreb:0,
  to: 0,
  stl: 0,
  ast: 0,
  blk: 0,
};

export const testPlayers= [
  {playername: "Ben Rich", stats: testInitialPlayerStats},
  {playername: "Charlie Devaul", stats: testInitialPlayerStats},
  {playername: "Willard Devaul", stats: testInitialPlayerStats},
  {playername: "MJ", stats: testInitialPlayerStats},
  {playername: "Bill Russel", stats: testInitialPlayerStats},
  {playername: "Kobe", stats: testInitialPlayerStats},
];

export const testHomePlayers= [
  {playername: "Ben Rich", stats: testInitialPlayerStats},
  {playername: "Charlie Devaul", stats: testInitialPlayerStats},
  {playername: "Willard Devaul", stats: testInitialPlayerStats},
];

export const testAwayPlayers= [
  {playername: "MJ", stats: testInitialPlayerStats},
  {playername: "Bill Russel", stats: testInitialPlayerStats},
  {playername: "Kobe", stats: testInitialPlayerStats},
];

export const TESTteamName  = {
  home: { teamname: "Cheerios", score: 0, players: testHomePlayers}, 
  away: { teamname: "Lucky Charms", score: 0, players: testAwayPlayers}
}

export const BUTTONS = {
  pointButtons: {
    twoMade: {id: 1, name: 'twoMade', displayName: '2PT', pointValue: 2, primary: true},
    twoMiss: {id: 2, name: 'twoMiss', displayName: '(2PT)', primary: false},
    oneMade: {id: 3, name: 'oneMade', displayName: '1PT', pointValue: 1, primary: true},
    oneMiss: {id: 4, name: 'oneMiss', displayName: '(1PT)', primary: false},
    dunk: {id: 5, name: 'dunk', displayName: 'DUNK', pointValue: 1, primary: true},
  },
  statButtons: {
    oreb: {id: 6, name: 'oreb', displayName: 'OREB', primary: true},
    dreb: {id: 7, name: 'dreb', displayName: 'DREB', primary: true},
    to: {id: 8, name: 'to', displayName: 'TURNOVER', primary: true},
    blk: {id: 9, name: 'blk', displayName: 'BLOCK', primary: true},
    stl: {id: 10, name: 'stl', displayName: 'STEAL', primary: true},
    ast: {id: 11, name: 'ast', displayName: 'ASSIST', primary: true},
  },
  testButtons: [
    {id: 6, name: 'oreb', displayName: 'OREB', primary: true},
    {id: 7, name: 'dreb', displayName: 'DREB', primary: true},
    {id: 8, name: 'to', displayName: 'TURNOVER', primary: true},
    {id: 9, name: 'blk', displayName: 'BLOCK', primary: true},
    {id: 10, name: 'stl', displayName: 'STEAL', primary: true},
    {id: 11, name: 'ast', displayName: 'ASSIST', primary: true},
  ]
}