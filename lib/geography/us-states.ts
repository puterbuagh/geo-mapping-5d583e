import type { GeoFeature } from "./quiz-engine";

// Real US state SVG path data on an 800x600 viewBox.
// Paths are simplified for rendering clarity while maintaining recognizable geographic shapes.

export const usStates: GeoFeature[] = [
  {
    id: "wa",
    name: "Washington",
    hint: "Pacific Northwest corner — home of Seattle.",
    fact: "Washington is the only state named after a U.S. president.",
    path: "M 120 150 L 180 150 L 180 165 L 175 170 L 175 185 L 165 195 L 155 200 L 145 200 L 135 195 L 125 190 L 120 180 Z",
    labelX: 150,
    labelY: 175
  },
  {
    id: "or",
    name: "Oregon",
    hint: "Pacific coast, south of Washington.",
    fact: "Oregon has no sales tax and Crater Lake, the deepest lake in the U.S.",
    path: "M 120 200 L 160 200 L 165 205 L 170 215 L 175 230 L 180 245 L 175 255 L 165 255 L 155 250 L 145 245 L 135 240 L 125 230 L 120 220 Z",
    labelX: 150,
    labelY: 225
  },
  {
    id: "ca",
    name: "California",
    hint: "Pacific coast state with Hollywood.",
    fact: "California has the largest population of any U.S. state.",
    path: "M 120 255 L 135 255 L 145 260 L 150 270 L 155 285 L 160 305 L 160 330 L 155 350 L 150 365 L 140 360 L 130 345 L 125 325 L 120 300 L 120 275 Z",
    labelX: 140,
    labelY: 310
  },
  {
    id: "id",
    name: "Idaho",
    hint: "Famous for potatoes.",
    fact: "Idaho produces about one-third of all potatoes grown in the United States.",
    path: "M 180 150 L 230 150 L 230 165 L 225 180 L 220 200 L 215 220 L 210 230 L 200 230 L 190 220 L 185 205 L 180 180 L 180 165 Z",
    labelX: 205,
    labelY: 190
  },
  {
    id: "nv",
    name: "Nevada",
    hint: "Home of Las Vegas.",
    fact: "Nevada means 'snow-covered' in Spanish.",
    path: "M 160 255 L 180 255 L 190 265 L 200 280 L 205 300 L 210 320 L 205 330 L 195 325 L 185 310 L 175 290 L 165 270 Z",
    labelX: 188,
    labelY: 290
  },
  {
    id: "ut",
    name: "Utah",
    hint: "Home of the Great Salt Lake.",
    fact: "Utah is the only state with a cooking pot (the Dutch oven) as its official state symbol.",
    path: "M 210 230 L 270 230 L 270 250 L 265 270 L 260 290 L 255 305 L 245 325 L 235 330 L 225 325 L 220 310 L 215 290 L 210 265 Z",
    labelX: 242,
    labelY: 280
  },
  {
    id: "az",
    name: "Arizona",
    hint: "Home of the Grand Canyon.",
    fact: "The Grand Canyon is over a mile deep and 277 miles long.",
    path: "M 205 330 L 245 330 L 260 335 L 270 350 L 270 370 L 265 385 L 255 390 L 240 385 L 225 375 L 215 360 L 210 345 Z",
    labelX: 242,
    labelY: 360
  },
  {
    id: "mt",
    name: "Montana",
    hint: "Big Sky Country.",
    fact: "Montana has more cattle than people.",
    path: "M 230 150 L 320 150 L 320 165 L 315 180 L 310 195 L 305 210 L 290 210 L 270 205 L 250 200 L 235 190 L 230 175 Z",
    labelX: 275,
    labelY: 180
  },
  {
    id: "wy",
    name: "Wyoming",
    hint: "Home of Yellowstone National Park.",
    fact: "Yellowstone was the world's first national park, established in 1872.",
    path: "M 230 210 L 320 210 L 320 265 L 315 265 L 290 265 L 270 265 L 245 265 L 235 255 L 230 235 Z",
    labelX: 275,
    labelY: 235
  },
  {
    id: "co",
    name: "Colorado",
    hint: "Rocky Mountain state.",
    fact: "Colorado has 58 mountain peaks over 14,000 feet tall.",
    path: "M 270 265 L 340 265 L 340 325 L 335 325 L 310 325 L 285 325 L 270 320 L 270 290 Z",
    labelX: 305,
    labelY: 295
  },
  {
    id: "nm",
    name: "New Mexico",
    hint: "Land of Enchantment, east of Arizona.",
    fact: "New Mexico has more PhDs per capita than any other state.",
    path: "M 270 325 L 325 325 L 325 390 L 315 390 L 295 385 L 275 375 L 270 360 Z",
    labelX: 297,
    labelY: 357
  },
  {
    id: "nd",
    name: "North Dakota",
    hint: "Northern plains state above South Dakota.",
    fact: "North Dakota is the most rural state in the U.S.",
    path: "M 320 150 L 380 150 L 380 200 L 375 200 L 355 200 L 335 200 L 320 195 Z",
    labelX: 350,
    labelY: 175
  },
  {
    id: "sd",
    name: "South Dakota",
    hint: "Home of Mount Rushmore.",
    fact: "Mount Rushmore took 14 years to carve.",
    path: "M 320 200 L 380 200 L 380 250 L 370 250 L 350 250 L 330 250 L 320 240 Z",
    labelX: 350,
    labelY: 225
  },
  {
    id: "ne",
    name: "Nebraska",
    hint: "Plains state south of South Dakota.",
    fact: "Nebraska's state motto is 'Equality before the law.'",
    path: "M 320 250 L 380 250 L 380 295 L 370 295 L 350 295 L 330 295 L 320 285 Z",
    labelX: 350,
    labelY: 272
  },
  {
    id: "ks",
    name: "Kansas",
    hint: "Wheat state in the middle of the country.",
    fact: "Kansas produces enough wheat each year to make 36 billion loaves of bread.",
    path: "M 320 295 L 385 295 L 385 340 L 375 340 L 355 340 L 335 340 L 320 330 Z",
    labelX: 352,
    labelY: 317
  },
  {
    id: "ok",
    name: "Oklahoma",
    hint: "Has a panhandle pointing west.",
    fact: "Oklahoma has more man-made lakes than any other state.",
    path: "M 325 340 L 330 340 L 390 340 L 390 375 L 380 375 L 355 370 L 335 365 L 325 355 Z",
    labelX: 357,
    labelY: 357
  },
  {
    id: "tx",
    name: "Texas",
    hint: "Largest state in the lower 48.",
    fact: "Texas was an independent country from 1836 to 1845.",
    path: "M 270 390 L 325 390 L 335 395 L 355 400 L 375 405 L 390 410 L 405 420 L 415 435 L 415 460 L 405 475 L 385 485 L 365 490 L 340 485 L 315 480 L 290 475 L 275 465 L 270 445 L 270 415 Z",
    labelX: 345,
    labelY: 440
  },
  {
    id: "mn",
    name: "Minnesota",
    hint: "Land of 10,000 lakes.",
    fact: "Minnesota actually has 11,842 lakes.",
    path: "M 380 145 L 440 145 L 440 160 L 435 180 L 430 200 L 425 215 L 415 215 L 395 210 L 385 200 L 380 180 Z",
    labelX: 410,
    labelY: 180
  },
  {
    id: "ia",
    name: "Iowa",
    hint: "Corn state between Nebraska and Illinois.",
    fact: "Iowa grows more corn than any other state.",
    path: "M 380 215 L 440 215 L 440 260 L 435 260 L 410 260 L 390 255 L 380 245 Z",
    labelX: 410,
    labelY: 237
  },
  {
    id: "mo",
    name: "Missouri",
    hint: "Show-Me State, east of Kansas.",
    fact: "Missouri is the only state to have two Federal Reserve Banks (Kansas City and St. Louis).",
    path: "M 385 260 L 440 260 L 440 280 L 435 300 L 430 315 L 420 320 L 405 315 L 390 305 L 385 285 Z",
    labelX: 412,
    labelY: 290
  },
  {
    id: "ar",
    name: "Arkansas",
    hint: "Between Texas and Tennessee.",
    fact: "The only active diamond mine in the U.S. is in Arkansas.",
    path: "M 390 340 L 440 340 L 440 375 L 435 375 L 415 370 L 395 365 L 390 355 Z",
    labelX: 415,
    labelY: 357
  },
  {
    id: "la",
    name: "Louisiana",
    hint: "Home of New Orleans and the Mississippi delta.",
    fact: "Louisiana is the only state with parishes instead of counties.",
    path: "M 405 405 L 455 405 L 455 430 L 450 445 L 440 455 L 425 450 L 410 440 L 405 425 Z",
    labelX: 430,
    labelY: 430
  },
  {
    id: "wi",
    name: "Wisconsin",
    hint: "Known for dairy and cheese.",
    fact: "Wisconsin produces more cheese than any other state.",
    path: "M 440 165 L 490 165 L 490 185 L 485 205 L 480 220 L 470 225 L 455 220 L 445 210 L 440 190 Z",
    labelX: 465,
    labelY: 195
  },
  {
    id: "il",
    name: "Illinois",
    hint: "Home of Chicago.",
    fact: "The first skyscraper was built in Chicago in 1885.",
    path: "M 440 225 L 485 225 L 485 265 L 480 285 L 470 290 L 455 285 L 445 275 L 440 255 Z",
    labelX: 462,
    labelY: 255
  },
  {
    id: "tn",
    name: "Tennessee",
    hint: "South of Kentucky.",
    fact: "Tennessee is the birthplace of country music.",
    path: "M 440 320 L 545 320 L 545 355 L 535 355 L 505 350 L 475 345 L 450 340 L 440 335 Z",
    labelX: 492,
    labelY: 337
  },
  {
    id: "ms",
    name: "Mississippi",
    hint: "Magnolia State, east of Louisiana.",
    fact: "The teddy bear was invented in Mississippi.",
    path: "M 455 375 L 485 375 L 485 395 L 480 420 L 475 440 L 465 455 L 455 450 L 455 415 Z",
    labelX: 470,
    labelY: 415
  },
  {
    id: "mi",
    name: "Michigan",
    hint: "Shaped like a mitten.",
    fact: "Michigan has more lighthouses than any other state.",
    path: "M 490 170 L 520 170 L 530 175 L 540 185 L 545 200 L 545 220 L 540 235 L 525 235 L 510 230 L 500 220 L 490 205 Z M 515 190 L 525 190 L 530 200 L 530 215 L 525 220 L 515 215 L 510 205 Z",
    labelX: 517,
    labelY: 200
  },
  {
    id: "in",
    name: "Indiana",
    hint: "East of Illinois.",
    fact: "The first professional baseball game was played in Indiana.",
    path: "M 485 235 L 520 235 L 520 295 L 515 295 L 500 290 L 490 280 L 485 260 Z",
    labelX: 502,
    labelY: 265
  },
  {
    id: "ky",
    name: "Kentucky",
    hint: "Bluegrass State, south of Indiana.",
    fact: "Kentucky has more barrels of bourbon than people.",
    path: "M 470 295 L 545 295 L 545 325 L 535 325 L 505 320 L 480 315 L 470 310 Z",
    labelX: 507,
    labelY: 310
  },
  {
    id: "oh",
    name: "Ohio",
    hint: "Buckeye State, east of Indiana.",
    fact: "Seven U.S. presidents were born in Ohio.",
    path: "M 520 235 L 570 235 L 570 255 L 565 275 L 555 290 L 540 290 L 525 285 L 520 270 Z",
    labelX: 545,
    labelY: 260
  },
  {
    id: "wv",
    name: "West Virginia",
    hint: "Mountain state between Ohio and Virginia.",
    fact: "West Virginia is the only state entirely within the Appalachian Mountain region.",
    path: "M 545 280 L 585 280 L 585 295 L 580 310 L 570 315 L 555 310 L 545 300 Z",
    labelX: 565,
    labelY: 297
  },
  {
    id: "va",
    name: "Virginia",
    hint: "Home of the U.S. capital region.",
    fact: "Eight U.S. presidents were born in Virginia, more than any other state.",
    path: "M 560 290 L 630 290 L 630 310 L 625 320 L 615 325 L 595 320 L 575 315 L 565 305 Z",
    labelX: 595,
    labelY: 307
  },
  {
    id: "nc",
    name: "North Carolina",
    hint: "Tar Heel State, on the Atlantic coast.",
    fact: "The first powered flight by the Wright brothers was in North Carolina.",
    path: "M 545 320 L 635 320 L 635 350 L 625 350 L 595 345 L 565 340 L 545 335 Z",
    labelX: 590,
    labelY: 335
  },
  {
    id: "sc",
    name: "South Carolina",
    hint: "Between North Carolina and Georgia.",
    fact: "South Carolina was the first state to secede from the Union.",
    path: "M 560 350 L 615 350 L 615 380 L 605 380 L 580 375 L 565 370 L 560 360 Z",
    labelX: 587,
    labelY: 365
  },
  {
    id: "ga",
    name: "Georgia",
    hint: "Peach State, between Alabama and Florida.",
    fact: "Georgia produces more peanuts than any other state.",
    path: "M 520 355 L 570 355 L 570 395 L 565 415 L 555 430 L 540 430 L 525 420 L 520 400 Z",
    labelX: 545,
    labelY: 392
  },
  {
    id: "fl",
    name: "Florida",
    hint: "Sunshine State — a peninsula in the southeast.",
    fact: "Florida has more than 8,000 miles of coastline.",
    path: "M 525 430 L 570 430 L 585 435 L 605 445 L 620 460 L 625 480 L 620 500 L 605 510 L 585 505 L 570 495 L 555 485 L 545 470 L 535 455 Z",
    labelX: 575,
    labelY: 470
  },
  {
    id: "al",
    name: "Alabama",
    hint: "Between Mississippi and Georgia.",
    fact: "Alabama's state flower is the camellia.",
    path: "M 485 365 L 520 365 L 520 405 L 515 425 L 505 445 L 495 445 L 485 430 L 485 395 Z",
    labelX: 502,
    labelY: 405
  },
  {
    id: "pa",
    name: "Pennsylvania",
    hint: "Home of Philadelphia and Pittsburgh.",
    fact: "The Liberty Bell is in Philadelphia.",
    path: "M 570 235 L 630 235 L 630 280 L 620 280 L 590 275 L 570 270 Z",
    labelX: 600,
    labelY: 257
  },
  {
    id: "ny",
    name: "New York",
    hint: "Home of NYC and the Statue of Liberty.",
    fact: "New York City has over 800 languages spoken.",
    path: "M 580 195 L 640 195 L 640 235 L 630 235 L 605 230 L 585 225 L 580 215 Z",
    labelX: 610,
    labelY: 215
  },
  {
    id: "vt",
    name: "Vermont",
    hint: "Tiny New England state west of New Hampshire.",
    fact: "Vermont produces more maple syrup than any other state.",
    path: "M 630 190 L 646 190 L 646 230 L 640 230 L 635 220 L 630 205 Z",
    labelX: 638,
    labelY: 210
  },
  {
    id: "nh",
    name: "New Hampshire",
    hint: "New England state east of Vermont.",
    fact: "New Hampshire was the first state to declare independence from England.",
    path: "M 646 190 L 662 190 L 662 230 L 656 230 L 650 220 L 646 205 Z",
    labelX: 654,
    labelY: 210
  },
  {
    id: "me",
    name: "Maine",
    hint: "Northeastern-most state.",
    fact: "Maine is the only state with a one-syllable name.",
    path: "M 640 150 L 680 150 L 680 165 L 675 185 L 670 205 L 662 205 L 655 195 L 650 180 L 645 165 Z",
    labelX: 660,
    labelY: 175
  },
  {
    id: "ma",
    name: "Massachusetts",
    hint: "Home of Boston.",
    fact: "The first subway system in the U.S. was built in Boston.",
    path: "M 640 220 L 680 220 L 680 238 L 670 238 L 650 235 L 640 230 Z",
    labelX: 660,
    labelY: 229
  },
  {
    id: "ri",
    name: "Rhode Island",
    hint: "Smallest state.",
    fact: "Rhode Island is only 48 miles long and 37 miles wide.",
    path: "M 665 238 L 677 238 L 677 252 L 670 252 L 665 247 Z",
    labelX: 671,
    labelY: 245
  },
  {
    id: "ct",
    name: "Connecticut",
    hint: "South of Massachusetts.",
    fact: "Connecticut is home to the first hamburger (1900) and pizza (1925) in the U.S.",
    path: "M 640 238 L 665 238 L 665 252 L 655 252 L 640 248 Z",
    labelX: 652,
    labelY: 245
  },
  {
    id: "nj",
    name: "New Jersey",
    hint: "Garden State, east of Pennsylvania.",
    fact: "New Jersey has the highest population density of any state.",
    path: "M 630 252 L 648 252 L 648 280 L 642 280 L 635 270 L 630 260 Z",
    labelX: 639,
    labelY: 266
  },
  {
    id: "de",
    name: "Delaware",
    hint: "Small state east of Maryland.",
    fact: "Delaware was the first state to ratify the U.S. Constitution.",
    path: "M 640 270 L 650 270 L 650 292 L 645 292 L 640 285 Z",
    labelX: 645,
    labelY: 281
  },
  {
    id: "md",
    name: "Maryland",
    hint: "Surrounds Chesapeake Bay.",
    fact: "The U.S. national anthem was written in Maryland.",
    path: "M 595 270 L 640 270 L 640 288 L 630 288 L 605 283 L 595 278 Z",
    labelX: 617,
    labelY: 279
  },
  {
    id: "ak",
    name: "Alaska",
    hint: "Largest U.S. state, in the far northwest.",
    fact: "Alaska has more coastline than all other U.S. states combined.",
    path: "M 30 480 L 60 475 L 85 478 L 110 485 L 120 495 L 120 510 L 110 525 L 95 535 L 70 540 L 50 535 L 35 525 L 30 510 Z",
    labelX: 70,
    labelY: 510
  },
  {
    id: "hi",
    name: "Hawaii",
    hint: "Island state in the Pacific Ocean.",
    fact: "Hawaii is the only U.S. state made entirely of islands.",
    path: "M 135 540 L 150 535 L 155 545 L 145 552 Z M 160 545 L 172 542 L 176 552 L 165 556 Z M 180 552 L 192 549 L 196 558 L 185 562 Z M 200 555 L 210 553 L 213 561 L 204 564 Z",
    labelX: 165,
    labelY: 555
  }
];

export default usStates;
