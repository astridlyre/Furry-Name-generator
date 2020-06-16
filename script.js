// Grab Elements from DOM
const outputEl = document.getElementById("output");
const ageEl = document.getElementById("age");
const sizeEl = document.getElementById("mammal");
const alignEl = document.getElementById("alignment");
const sexEl = document.getElementById("sex-thing");
const coolEl = document.getElementById("cool");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");
const successEl = document.getElementById("success");

// Event Listeners
// Copy & Paste Event
clipboardEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const furryName = outputEl.innerText;

  if (!furryName) {
    return;
  }

  textarea.value = furryName;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  successEl.style.opacity = "1";
  setTimeout(() => {
    successEl.style.opacity = "0";
  }, 750);
});

// Settings Events
generateEl.addEventListener("click", () => {
  //   const whatAge = ageEl.value;
  //   const whatSize = sizeEl.value;
  //   const whatAlign = alignEl.value;
  //   const hasSex = sexEl.checked;
  //   const hasCool = coolEl.checked;

  outputEl.innerText = generateFurryName();

  function generateFurryName() {
    if (sizeEl.value === "sagittarius") {
      return "Sagittarius Zack the Yak";
    } else if (sexEl.checked == true) {
      return `${getRandomCool()} ${getRandomSex()}${getRandomSuffix()}`;
    } else {
      return `${getRandomCool()} ${getRandomAge()} ${getRandomPrefix()}${getRandomSuffix()}`;
    }
  }
});

// Get Functions for Age, Size, Alignment, Sex and Coolness
// Age
function getRandomAge() {
  const childAgeList = [
    "Young",
    "Baby",
    "Lil'",
    "Tiny",
    "Small",
    "Puny",
    "Swaddled",
    "Mini",
    "Bit-Sized",
    "Tiddly",
    "Teensy",
    "Weeny",
    "Inadequate",
    "Micro",
    "Petite",
    "Paltry",
    "Piddling",
    "Itty-bitty",
    "Soiled",
    "Dinky",
  ];
  const teenAgeList = [
    "Miserable",
    "Defiant",
    "Spotted",
    "Youthy",
    "Hormonal",
    "Adventurous",
    "Handsome",
    "Scrawny",
    "Surly",
    "Tanned",
    "Sexually Uncertain",
    "Skinny",
    "Clumsy",
    "Shy",
    "Pimpled",
    "Obnoxious",
    "Gangly",
    "Flighty",
    "Frothy",
    "Gawky",
  ];
  const adultAgeList = "";
  const seniorAgeList = [
    "Old",
    "Elder",
    "Wise",
    "Learned",
    "Boomer",
    "Chubby",
    "Superior",
    "Shabby",
    "Tatty",
    "Balding",
    "Plush",
    "Shiny",
    "Stout",
    "Sturdy",
    "Grey",
    "Grizzled",
    "Tired",
    "Rich",
    "Clunky",
    "White-haired",
  ];
  const ancientAgeList = [
    "Ancient",
    "Venerable",
    "Decrepid",
    "Bag-O-Bones",
    "Wrinkled",
    "Chief",
    "Antiquated",
    "Decaying",
    "Silver-haired",
    "Ripened",
    "Mossy",
    "Rusty",
    "Creaky Ol'",
    "Elder",
    "Grumpy Ole",
    "Hoarse",
    "Patches Mc",
    "Ol'",
    "Sightless",
    "Mythical",
  ];

  let age = ageEl.value;
  if (age >= 0 && age < 13) {
    return childAgeList[Math.floor(Math.random() * 20)];
  } else if (age >= 13 && age < 20) {
    return teenAgeList[Math.floor(Math.random() * 20)];
  } else if (age >= 65 && age < 100) {
    return seniorAgeList[Math.floor(Math.random() * 20)];
  } else if (age >= 100) {
    return ancientAgeList[Math.floor(Math.random() * 20)];
  } else {
    return "";
  }
}

// Size
function getRandomPrefix() {
  const smallList = [
    "Braz",
    "Dag",
    "Yong",
    "Drog",
    "Charib",
    "Pika",
    "Flirt",
    "Meep",
    "Mar-a",
    "Uma",
    "Jess",
    "Ash",
    "Sar",
    "Jen",
    "Emi",
    "Sam",
    "Eliz",
    "Steph",
    "Laur",
    "Nic",
    "Brit",
    "Meg",
    "Rach",
    "Han",
    "Kay",
    "Mel",
    "Amb",
    "Dan",
    "Tay",
    "Mic",
  ];
  const mediumList = [
    "Trout",
    "Char",
    "Fura",
    "Gurdee",
    "Krof",
    "Uma",
    "Tar",
    "Joi",
    "Bri",
    "Kren",
    "Mic",
    "Criss",
    "Mat",
    "Joshi",
    "Dan",
    "Dav",
    "And",
    "Jam",
    "Jos",
    "Jonn",
    "Ry",
    "Jac",
    "Bran",
    "Just",
    "Rob",
    "Will",
    "Anth",
    "Jon",
    "Ty",
    "Brad",
  ];
  const largeList = [
    "Yarp",
    "Vork",
    "Jedi",
    "Ger",
    "Growl",
    "Ponz",
    "Pillo",
    "Freez",
    "Hoo",
    "Gritt",
    "Illi",
    "Ollu",
    "Ira",
    "Elle",
    "Pee",
    "Yucca",
    "Eri",
  ];
  const xtrabigList = [
    "Jiodwa",
    "Kind",
    "Gentle",
    "Kitten",
    "Wolf",
    "Sassy",
    "Love",
    "Snuggle",
    "Young",
    "Bear",
    "Pudding",
    "Stinky",
    "Bigfoot",
    "Dongle",
    "Jungle",
  ];

  let size = sizeEl.value;
  switch (size) {
    case "small":
      return smallList[Math.floor(Math.random() * 30)];
      break;
    case "medium":
      return mediumList[Math.floor(Math.random() * 30)];
      break;
    case "large":
      return largeList[Math.floor(Math.random() * 17)];
      break;
    case "xtrabig":
      return xtrabigList[Math.floor(Math.random() * 15)];
      break;
    case "sagittarius":
      return "Sagittarius Zack the Yak";
      break;
    default:
      return "";
      break;
  }
}

// Alignment
function getRandomSuffix() {
  const goodList = [
    "naals",
    "vir",
    "fur",
    "nool",
    "lago",
    "lic",
    "dis",
    "choo",
    "lay",
    "ja",
    "nips",
    "salad",
    "plot",
    "looper",
    "snoop",
    "tiddle",
    "luckk",
    "felt",
    "polaris",
    "try",
    "harp",
    "letter",
    "urtle",
    "sled",
  ];
  const neutralList = [
    "lester",
    "mander",
    "ith",
    "ummy",
    "sheet",
    "ry",
    "ette",
    "luna",
    "tarr",
    "pel",
    "beigen",
    "blandy",
    "jury",
    "kiki",
    "ween",
    "lili",
    "dumplin",
    "lip",
    "straight",
    "septum",
    "polliwag",
    "warbler",
    "static",
    "ally",
  ];
  const evilList = [
    "paw",
    "touch",
    "whisker",
    "breath",
    "spirit",
    "kins",
    "buddy",
    "tickle",
    "pumpkin",
    "fawn",
    "jack",
    "killer",
    "minx",
    "sloop",
    "hussi",
    "huski",
    "lint",
    "arg",
    "auntie",
    "temper",
    "terror",
    "tearer",
    "teets",
    "mantis",
    "flop",
    "fickle",
    "bitkoin",
  ];

  let align = alignEl.value;
  switch (align) {
    case "good":
      return goodList[Math.floor(Math.random() * 24)];
      break;
    case "neutral":
      return neutralList[Math.floor(Math.random() * 24)];
      break;
    case "evil":
      return evilList[Math.floor(Math.random() * 27)];
      break;
    default:
      return "";
      break;
  }
}

// Sex
function getRandomSex() {
  const sexList = [
    "Horny Big",
    "Horny Fowl",
    "Spicy Grace",
    "Tremble",
    "Quiver",
    "Rose Wet",
    "Moist Fur",
    "Sultry Queef",
    "Sass Kat",
    "Grace Full",
    "Full",
    "Hard Star",
    "Wet Rump",
    "Youngling Laur",
  ];
  return sexList[Math.floor(Math.random() * 14)];
}

// Cool
function getRandomCool() {
  const coolList = [
    "Dr.",
    "Prof.",
    "Judge",
    "Duke",
    "Lord",
    "Master",
    "Mrs.",
    "Ms.",
    "Mr.",
    "Queen",
    "King",
  ];
  let cool = coolEl.checked;
  return cool ? coolList[Math.floor(Math.random() * 11)] : "";
  console.log(coolEl.checked);
}
