const test_game = {
  _id: { $oid: "634998d5973d0de8bd53d0ef" },
  season: "2021 WHD Tourney",
  datetime: { $numberInt: "4" },
  competitors: { home: "Cheerios", away: "Lucky Charms" },
  score: { home: { $numberInt: "0" }, away: { $numberInt: "0" } },
  statkeeper: "Ben Rich",
  players: [
    {
      playerid: 1,
      firstname: "Ben",
      lastname: "Rich",
      nickname: "Baby Shaq",
      teamname: "Cheerios",
    },
  ],
  playlist: [
    {
      playid: { $numberInt: "1" },
      away_score: { $numberInt: "0" },
      home_score: { $numberInt: "0" },
      team: "Cheerios",
      elapsed: { $numberInt: "4" },
      playerid: { $numberInt: "1" },
      points: { $numberInt: "2" },
      type: "shot",
      result: "made",
      original_x: { $numberInt: "50" },
      original_y: { $numberInt: "50" },
    },
  ],
};


const data = JSON.stringify(test_game);
console.log(data);

