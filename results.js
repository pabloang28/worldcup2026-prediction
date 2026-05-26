const RESULTS = {
  groups: {},
  thirdPlace: [],
  groupMatches: {},
  // groupMatches format when you fill results:
  // {
  //   "A": {
  //     "Mexico__South Africa": { outcome: "away" },  // 'home' | 'draw' | 'away'
  //     "Czech Republic__South Korea": { outcome: "away" },
  //     ...
  //   },
  //   ...
  // }
  knockout: {
    round32: [],
    round16: [],
    quarterfinals: [],
    semifinals: [],
    champion: "",
    runnerUp: "",
    finalists: [],
    thirdPlaceWinner: "",
    final: "",
    thirdPlace: "",
    matches: {
      round32: [
        // {
        //   match: 73,
        //   team1: "",
        //   team2: "",
        //   winner: ""
        // }
      ],
      round16: [
        // {
        //   match: 89,
        //   team1: "",
        //   team2: "",
        //   winner: ""
        // }
      ],
      quarterfinals: [
        // {
        //   match: 97,
        //   team1: "",
        //   team2: "",
        //   winner: ""
        // }
      ],
      semifinals: [
        // {
        //   match: 101,
        //   team1: "",
        //   team2: "",
        //   winner: ""
        // }
      ],
      thirdPlace: [
        // {
        //   match: 103,
        //   team1: "",
        //   team2: "",
        //   winner: ""
        // }
      ],
      final: [
        // {
        //   match: 104,
        //   team1: "",
        //   team2: "",
        //   winner: ""
        // }
      ]
    }
  },
  semifinalists: [],
  finalists: [],
  champion: "",
  runnerUp: "",
  thirdPlaceWinner: "",
  awards: {
    goldenBoot: [],
    goldenBall: []
  }
};
