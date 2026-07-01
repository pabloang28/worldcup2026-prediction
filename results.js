const RESULTS = {
  groups: {
     "A": ["Mexico","South Africa","South Korea", "Czech Republic"],
     "B": ["Switzerland", "Canada", "Bosnia & Herzegovina", "Qatar"],
     "C": ["Brazil","Morocco", "Scotland", "Haiti"],
     "D": ["USA","Australia", "Paraguay", "Turkey"],
     "E": ["Germany","Ivory Coast", "Ecuador", "Curaçao"],
     "F": ["Netherlands","Japan", "Sweden", "Tunisia"],
     "G": ["Belgium","Egypt", "Iran", "New Zealand"],
     "H": ["Spain","Cape Verde", "Uruguay", "Saudi Arabia"],
     "I": ["France","Norway", "Senegal", "Iraq"],
     "J": ["Argentina","Austria", "Algeria", "Jordan"],
     "K": ["Colombia","Portugal", "DR Congo", "Uzbekistan"],
     "L": ["England","Croatia", "Ghana", "Panama"]    
  },
  thirdPlace: [
    "DR Congo", 
    "Sweden", 
    "Ghana", 
    "Ecuador", 
    "Bosnia & Herzegovina", 
    "Algeria", 
    "Paraguay", 
    "Senegal"
],
 groupMatches: {
    "A": {
      "Mexico__South Africa": { "outcome": "home" },
      "Czech Republic__South Korea": { "outcome": "home" },
      "Czech Republic__South Africa": { "outcome": "draw" },
      "Mexico__South Korea": { "outcome": "home" },
      "Czech Republic__Mexico": { "outcome": "away" },
      "South Africa__South Korea": { "outcome": "home" }
    },
    "B": {
      "Canada__Bosnia & Herzegovina": { "outcome": "draw" },
      "Qatar__Switzerland": { "outcome": "draw" },
      "Switzerland__Bosnia & Herzegovina": { "outcome": "home" },
      "Canada__Qatar": { "outcome": "home" },
      "Switzerland__Canada": { "outcome": "home" },
      "Bosnia & Herzegovina__Qatar": { "outcome": "home" }
    },
    "C": {
      "Brazil__Morocco": { "outcome": "draw" },
      "Haiti__Scotland": { "outcome": "away" },
      "Brazil__Haiti": { "outcome": "home" },
      "Morocco__Scotland": { "outcome": "away" },
      "Morocco__Haiti": { "outcome": "home" },
      "Scotland__Brazil": { "outcome": "away" }
    },
    "D": {
      "Paraguay__USA": { "outcome": "home" },
      "Australia__Turkey": { "outcome": "home" },
      "USA__Australia": { "outcome": "home" },
      "Turkey__Paraguay": { "outcome": "away" },
      "Turkey__USA": { "outcome": "home" },
      "Paraguay__Australia": { "outcome": "draw" }
    },
    "E": {
      "Germany__Curaçao": { "outcome": "home" },
      "Ivory Coast__Ecuador": { "outcome": "home" },
      "Germany__Ivory Coast": { "outcome": "home" },
      "Curaçao__Ecuador": { "outcome": "draw" },
      "Ecuador__Germany": { "outcome": "home" },
      "Curaçao__Ivory Coast": { "outcome": "away" }
    },
    "F": {
      "Netherlands__Japan": { "outcome": "draw" },
      "Sweden__Tunisia": { "outcome": "home" },
      "Netherlands__Sweden": { "outcome": "home" },
      "Japan__Tunisia": { "outcome": "away" },
      "Japan__Sweden": { "outcome": "draw" },
      "Netherlands__Tunisia": { "outcome": "away" }
    },
    "G": {
      "Belgium__Egypt": { "outcome": "draw" },
      "Iran__New Zealand": { "outcome": "draw" },
      "Belgium__Iran": { "outcome": "draw" },
      "Egypt__New Zealand": { "outcome": "away" },
      "Egypt__Iran": { "outcome": "draw" },
      "New Zealand__Belgium": { "outcome": "away" }
    },
    "H": {
      "Spain__Cape Verde": { "outcome": "draw" },
      "Saudi Arabia__Uruguay": { "outcome": "draw" },
      "Spain__Saudi Arabia": { "outcome": "home" },
      "Cape Verde__Uruguay": { "outcome": "draw" },
      "Uruguay__Spain": { "outcome": "away" },
      "Cape Verde__Saudi Arabia": { "outcome": "draw" }
    },
    "I": {
      "France__Senegal": { "outcome": "home" },
      "Iraq__Norway": { "outcome": "away" },
      "France__Iraq": { "outcome": "home" },
      "Senegal__Norway": { "outcome": "home" },
      "Norway__France": { "outcome": "away" },
      "Senegal__Iraq": { "outcome": "home" }
    },
    "J": {
      "Argentina__Algeria": { "outcome": "home" },
      "Austria__Jordan": { "outcome": "home" },
      "Argentina__Austria": { "outcome": "home" },
      "Algeria__Jordan": { "outcome": "away" },
      "Algeria__Austria": { "outcome": "draw" },
      "Jordan__Argentina": { "outcome": "away" }
    },
    "K": {
      "Portugal__DR Congo": { "outcome": "draw" },
      "Uzbekistan__Colombia": { "outcome": "away" },
      "DR Congo__Colombia": { "outcome": "home" },
      "Portugal__Uzbekistan": { "outcome": "home" },
      "Colombia__Portugal": { "outcome": "draw" },
      "DR Congo__Uzbekistan": { "outcome": "home" }
    },
    "L": {
      "England__Croatia": { "outcome": "home" },
      "Ghana__Panama": { "outcome": "home" },
      "England__Ghana": { "outcome": "draw" },
      "Croatia__Panama": { "outcome": "away" },
      "Panama__England": { "outcome": "away" },
      "Croatia__Ghana": { "outcome": "home" }
    }
},
  knockout: {
    round32: ["South Africa", "Canada","Netherlands", "Morocco", "Germany", "Paraguay", "France", "Sweden", "Belgium", "Senegal", "USA", "Bosnia & Herzegovina", "Spain", "Austria", "Portugal","Croatia","Brazil", "Japan","Ivory Coast","Norway", "Mexico", "Ecuador","England","DR Congo","Switzerland","Algeria","Colombia","Ghana","Australia","Egypt", "Argentina", "Cape Verde" ],
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
        {
          match: 73,
          team1: "South Africa",
          team2: "Canada",
          winner: "Canada"
        },
        {
    match: 74,
    team1: "Brazil",
    team2: "Japan",
    winner: "Brazil"
  },
  {
    match: 75,
    team1: "Germany",
    team2: "Paraguay",
    winner: "Paraguay"
  },
  {
    match: 76,
    team1: "Netherlands",
    team2: "Morocco",
    winner: "Morocco"
  },
  {
    match: 77,
    team1: "Ivory Coast",
    team2: "Norway",
    winner: "Norway"
  },
  {
    match: 78,
    team1: "France",
    team2: "Sweden",
    winner: "France"
  },
  {
    match: 79,
    team1: "Mexico",
    team2: "Ecuador",
    winner: "Mexico"
  }
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
