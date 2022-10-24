

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

export const testPlayers = [
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

export const TEST_GAME = {
  id: 1,
  season: 2021,
  start_time : '08:00',
  date: '2022-12-2022',
  competitors: { home: 'Cheerios', away: 'Lucky Charms'},
  score: { home: 0, away: 0},
  statkeeper: "Real Ben",
  players: [ // [0, 6 , 16]
    {
      hometeam: true,
      firstname: 'Ben',
      lastname: 'Rich',
      nickname: 'Baby Shaq',
      teamname: 'Cheerios',
      height: { value: 72, unit: 'in' }, // Take away for extended reference
      weight: { value: 150, unit: 'lbs' }, // Take away for extended reference
    }
  ],
  playlist: [ // [0, 500]
    {
      playid: 1, 
      away_score: 0, 
      home_score: 0, 
      team: 'Cheerios',
      elapsed: '0:00:46',
      playerid: 1,
      points: 2,
      type: 'shot',
      result: 'made',
      original_x: 50,
      original_y: 50
    },
  ]
}

export const STAT_LIST = {
  
}