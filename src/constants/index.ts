export interface IIPA {
  symbol: string;
  examples: { word: string; ipaPartIndexes: number[] }[];
  exampleSound: string;
}
const listIPA: { vowels: IIPA[]; consonants: IIPA[] } = {
  vowels: [
    {
      symbol: "ʌ",
      examples: [
        { word: "cup", ipaPartIndexes: [2] },
        { word: "luck", ipaPartIndexes: [2] },
      ],
      exampleSound: "/sounds/cupluck.mp3",
    },
    {
      symbol: "ɑ:",
      examples: [
        { word: "arm", ipaPartIndexes: [1] },
        { word: "farther", ipaPartIndexes: [2] },
      ],
      exampleSound: "/sounds/armfarther.mp3",
    },
    {
      symbol: "æ",
      examples: [
        { word: "cat", ipaPartIndexes: [2] },
        { word: "black", ipaPartIndexes: [3] },
      ],
      exampleSound: "/sounds/catblack.mp3",
    },
    {
      symbol: "e",
      examples: [
        { word: "met", ipaPartIndexes: [2] },
        { word: "bed", ipaPartIndexes: [2] },
      ],
      exampleSound: "/sounds/metbed.mp3",
    },
    {
      symbol: "ə",
      examples: [
        { word: "away", ipaPartIndexes: [1] },
        { word: "cinema", ipaPartIndexes: [4, 6] },
      ],
      exampleSound: "/sounds/awaycinema.mp3",
    },
    {
      symbol: "ɜ:",
      examples: [
        { word: "turn", ipaPartIndexes: [2, 3] },
        { word: "learn", ipaPartIndexes: [2, 3, 4] },
      ],
      exampleSound: "/sounds/turnlearn.mp3",
    },
    {
      symbol: "ɪ",
      examples: [
        { word: "hit", ipaPartIndexes: [2] },
        { word: "sitting", ipaPartIndexes: [2, 5] },
      ],
      exampleSound: "/sounds/hitsitting.mp3",
    },
    {
      symbol: "i:",
      examples: [
        { word: "see", ipaPartIndexes: [2, 3] },
        { word: "heat", ipaPartIndexes: [2, 3] },
      ],
      exampleSound: "/sounds/seeheat.mp3",
    },
    {
      symbol: "ɒ",
      examples: [
        { word: "hot", ipaPartIndexes: [2] },
        { word: "rock", ipaPartIndexes: [2] },
      ],
      exampleSound: "/sounds/hotrock.mp3",
    },
    {
      symbol: "ɔ:",
      examples: [
        { word: "call", ipaPartIndexes: [2] },
        { word: "four", ipaPartIndexes: [2, 3] },
      ],
      exampleSound: "/sounds/callfour.mp3",
    },
    {
      symbol: "ʊ",
      examples: [
        { word: "put", ipaPartIndexes: [2] },
        { word: "could", ipaPartIndexes: [2, 3, 4] },
      ],
      exampleSound: "/sounds/putcould.mp3",
    },
    {
      symbol: "u:",
      examples: [
        { word: "blue", ipaPartIndexes: [3, 4] },
        { word: "food", ipaPartIndexes: [2, 3] },
      ],
      exampleSound: "/sounds/bluefood.mp3",
    },
    {
      symbol: "aɪ",
      examples: [
        { word: "five", ipaPartIndexes: [2] },
        { word: "eye", ipaPartIndexes: [1, 2, 3] },
      ],
      exampleSound: "/sounds/fiveeye.mp3",
    },
    {
      symbol: "aʊ",
      examples: [
        { word: "now", ipaPartIndexes: [2, 3] },
        { word: "out", ipaPartIndexes: [1, 2] },
      ],
      exampleSound: "/sounds/nowout.mp3",
    },
    {
      symbol: "eɪ",
      examples: [
        { word: "say", ipaPartIndexes: [2, 3] },
        { word: "eight", ipaPartIndexes: [1, 2, 3, 4] },
      ],
      exampleSound: "/sounds/sayeight.mp3",
    },
    {
      symbol: "oʊ",
      examples: [
        { word: "go", ipaPartIndexes: [2] },
        { word: "home", ipaPartIndexes: [2] },
      ],
      exampleSound: "/sounds/gohome.mp3",
    },
    {
      symbol: "ɔɪ",
      examples: [
        { word: "boy", ipaPartIndexes: [2, 3] },
        { word: "join", ipaPartIndexes: [2, 3] },
      ],
      exampleSound: "/sounds/boyjoin.mp3",
    },
    {
      symbol: "eə",
      examples: [
        { word: "where", ipaPartIndexes: [2, 3, 4] },
        { word: "air", ipaPartIndexes: [1, 2, 3] },
      ],
      exampleSound: "/sounds/whereair.mp3",
    },
    {
      symbol: "ɪə",
      examples: [
        { word: "near", ipaPartIndexes: [2, 3, 4] },
        { word: "here", ipaPartIndexes: [2, 3, 4] },
      ],
      exampleSound: "/sounds/nearhere.mp3",
    },
    {
      symbol: "ʊə",
      examples: [
        { word: "pure", ipaPartIndexes: [2, 3, 4] },
        { word: "tourist", ipaPartIndexes: [2, 3, 4] },
      ],
      exampleSound: "/sounds/puretourist.mp3",
    },
  ],
  consonants: [
    {
      symbol: "b",
      examples: [
        { word: "bad", ipaPartIndexes: [1] },
        { word: "lab", ipaPartIndexes: [3] },
      ],
      exampleSound: "/sounds/badlab.mp3",
    },
    {
      symbol: "d",
      examples: [
        { word: "did", ipaPartIndexes: [1, 3] },
        { word: "lady", ipaPartIndexes: [3] },
      ],
      exampleSound: "/sounds/didlady.mp3",
    },
    {
      symbol: "f",
      examples: [
        { word: "find", ipaPartIndexes: [1] },
        { word: "if", ipaPartIndexes: [2] },
      ],
      exampleSound: "/sounds/findif.mp3",
    },
    {
      symbol: "g",
      examples: [
        { word: "give", ipaPartIndexes: [1] },
        { word: "flag", ipaPartIndexes: [4] },
      ],
      exampleSound: "/sounds/giveflag.mp3",
    },
    {
      symbol: "h",
      examples: [
        { word: "how", ipaPartIndexes: [1] },
        { word: "hello", ipaPartIndexes: [1] },
      ],
      exampleSound: "/sounds/howhello.mp3",
    },
    {
      symbol: "j",
      examples: [
        { word: "yes", ipaPartIndexes: [1] },
        { word: "yellow", ipaPartIndexes: [1] },
      ],
      exampleSound: "/sounds/yesyellow.mp3",
    },
    {
      symbol: "k",
      examples: [
        { word: "cat", ipaPartIndexes: [1] },
        { word: "back", ipaPartIndexes: [4] },
      ],
      exampleSound: "/sounds/catback.mp3",
    },
    {
      symbol: "l",
      examples: [
        { word: "leg", ipaPartIndexes: [1] },
        { word: "little", ipaPartIndexes: [5] },
      ],
      exampleSound: "/sounds/leglittle.mp3",
    },
    {
      symbol: "m",
      examples: [
        { word: "man", ipaPartIndexes: [1] },
        { word: "lemon", ipaPartIndexes: [3] },
      ],
      exampleSound: "/sounds/manlemon.mp3",
    },
    {
      symbol: "n",
      examples: [
        { word: "no", ipaPartIndexes: [1] },
        { word: "ten", ipaPartIndexes: [3] },
      ],
      exampleSound: "/sounds/noten.mp3",
    },
    {
      symbol: "ŋ",
      examples: [
        { word: "sing", ipaPartIndexes: [2, 3] },
        { word: "finger", ipaPartIndexes: [3, 4] },
      ],
      exampleSound: "/sounds/singfinger.mp3",
    },
    {
      symbol: "p",
      examples: [
        { word: "pet", ipaPartIndexes: [1] },
        { word: "map", ipaPartIndexes: [3] },
      ],
      exampleSound: "/sounds/petmap.mp3",
    },
    {
      symbol: "r",
      examples: [
        { word: "red", ipaPartIndexes: [1] },
        { word: "try", ipaPartIndexes: [2] },
      ],
      exampleSound: "/sounds/redtry.mp3",
    },
    {
      symbol: "s",
      examples: [
        { word: "sun", ipaPartIndexes: [1] },
        { word: "miss", ipaPartIndexes: [3, 4] },
      ],
      exampleSound: "/sounds/sunmiss.mp3",
    },
    {
      symbol: "ʃ",
      examples: [
        { word: "she", ipaPartIndexes: [1, 2] },
        { word: "crash", ipaPartIndexes: [4, 5] },
      ],
      exampleSound: "/sounds/shecrash.mp3",
    },
    {
      symbol: "t",
      examples: [
        { word: "tea", ipaPartIndexes: [1] },
        { word: "getting", ipaPartIndexes: [3, 4] },
      ],
      exampleSound: "/sounds/teagetting.mp3",
    },
    {
      symbol: "tʃ",
      examples: [
        { word: "check", ipaPartIndexes: [1, 2] },
        { word: "church", ipaPartIndexes: [1, 2, 5, 6] },
      ],
      exampleSound: "/sounds/checkchurch.mp3",
    },
    {
      symbol: "θ",
      examples: [
        { word: "think", ipaPartIndexes: [1, 2] },
        { word: "both", ipaPartIndexes: [3, 4] },
      ],
      exampleSound: "/sounds/thinkboth.mp3",
    },
    {
      symbol: "ð",
      examples: [
        { word: "this", ipaPartIndexes: [1, 2] },
        { word: "mother", ipaPartIndexes: [3, 4] },
      ],
      exampleSound: "/sounds/thismother.mp3",
    },
    {
      symbol: "v",
      examples: [
        { word: "voice", ipaPartIndexes: [1] },
        { word: "five", ipaPartIndexes: [3] },
      ],
      exampleSound: "/sounds/voicefive.mp3",
    },
    {
      symbol: "w",
      examples: [
        { word: "wet", ipaPartIndexes: [1] },
        { word: "window", ipaPartIndexes: [3, 6] },
      ],
      exampleSound: "/sounds/wetwindow.mp3",
    },
    {
      symbol: "z",
      examples: [
        { word: "zoo", ipaPartIndexes: [1] },
        { word: "lazy", ipaPartIndexes: [3] },
      ],
      exampleSound: "/sounds/zoolazy.mp3",
    },
    {
      symbol: "ʒ",
      examples: [
        { word: "pleasure", ipaPartIndexes: [5] },
        { word: "vision", ipaPartIndexes: [3, 4] },
      ],
      exampleSound: "/sounds/pleasurevision.mp3",
    },
    {
      symbol: "dʒ",
      examples: [
        { word: "just", ipaPartIndexes: [1] },
        { word: "large", ipaPartIndexes: [4, 5] },
      ],
      exampleSound: "/sounds/justlarge.mp3",
    },
  ],
};

export { listIPA };
