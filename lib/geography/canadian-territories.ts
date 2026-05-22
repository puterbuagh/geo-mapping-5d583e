import type { GeoFeature } from "./quiz-engine";

// Real Canadian province and territory SVG path data on an 800x600 viewBox.
// Paths are simplified for rendering clarity while maintaining recognizable geographic shapes.

export const canadianTerritories: GeoFeature[] = [
  {
    id: "yt",
    name: "Yukon",
    hint: "Northwestern territory, north of British Columbia.",
    fact: "The Yukon was the site of the famous Klondike Gold Rush in the 1890s.",
    path: "M 110 90 L 150 85 L 180 90 L 195 105 L 200 125 L 195 150 L 180 175 L 160 190 L 140 195 L 120 190 L 110 170 L 105 140 L 110 110 Z",
    labelX: 155,
    labelY: 140
  },
  {
    id: "nt",
    name: "Northwest Territories",
    hint: "Large northern territory between Yukon and Nunavut.",
    fact: "Great Slave Lake, one of the deepest lakes in North America, is here.",
    path: "M 200 90 L 240 85 L 280 85 L 320 90 L 350 100 L 360 120 L 365 150 L 360 180 L 350 200 L 330 210 L 300 215 L 270 210 L 240 200 L 215 185 L 200 160 L 195 130 L 200 105 Z",
    labelX: 280,
    labelY: 145
  },
  {
    id: "nu",
    name: "Nunavut",
    hint: "The largest and newest territory, covering Canada's Arctic.",
    fact: "Nunavut means 'our land' in the Inuktitut language.",
    path: "M 360 70 L 420 65 L 480 70 L 540 80 L 590 95 L 630 115 L 640 140 L 640 170 L 630 195 L 605 210 L 570 215 L 530 210 L 490 200 L 450 185 L 410 170 L 380 150 L 365 125 L 360 95 Z M 500 150 L 530 145 L 550 155 L 560 175 L 550 190 L 525 195 L 505 185 L 495 165 Z",
    labelX: 500,
    labelY: 140
  },
  {
    id: "bc",
    name: "British Columbia",
    hint: "Pacific coast province, west of Alberta.",
    fact: "British Columbia has rainforests, mountains, and the city of Vancouver.",
    path: "M 110 200 L 140 200 L 165 205 L 185 215 L 200 230 L 205 255 L 205 285 L 200 310 L 185 325 L 165 330 L 140 325 L 120 315 L 110 295 L 105 265 L 105 235 Z",
    labelX: 157,
    labelY: 265
  },
  {
    id: "ab",
    name: "Alberta",
    hint: "Prairie province east of British Columbia.",
    fact: "Alberta has the Canadian Rockies and Banff National Park.",
    path: "M 205 200 L 275 200 L 275 330 L 270 330 L 245 325 L 220 320 L 205 310 L 205 265 Z",
    labelX: 240,
    labelY: 265
  },
  {
    id: "sk",
    name: "Saskatchewan",
    hint: "Prairie province between Alberta and Manitoba.",
    fact: "Saskatchewan grows much of Canada's wheat.",
    path: "M 275 200 L 345 200 L 345 330 L 340 330 L 315 325 L 290 320 L 275 315 Z",
    labelX: 310,
    labelY: 265
  },
  {
    id: "mb",
    name: "Manitoba",
    hint: "Prairie province east of Saskatchewan.",
    fact: "Manitoba has over 100,000 lakes!",
    path: "M 345 200 L 415 200 L 415 240 L 410 265 L 405 290 L 400 315 L 390 330 L 370 330 L 355 325 L 345 310 Z",
    labelX: 380,
    labelY: 265
  },
  {
    id: "on",
    name: "Ontario",
    hint: "Home of Canada's capital, Ottawa, and Toronto.",
    fact: "Ontario borders four of the five Great Lakes.",
    path: "M 415 210 L 475 210 L 510 220 L 535 235 L 545 255 L 545 285 L 535 310 L 515 325 L 485 330 L 455 330 L 425 320 L 415 300 L 410 270 L 410 240 Z",
    labelX: 475,
    labelY: 270
  },
  {
    id: "qc",
    name: "Quebec",
    hint: "Largest province by area — most people speak French.",
    fact: "Quebec City is one of the oldest cities in North America.",
    path: "M 535 200 L 580 195 L 615 200 L 640 210 L 645 235 L 645 270 L 635 300 L 615 320 L 585 330 L 555 330 L 535 320 L 525 295 L 525 260 L 530 230 Z",
    labelX: 590,
    labelY: 265
  },
  {
    id: "nb",
    name: "New Brunswick",
    hint: "Maritime province on Canada's east coast.",
    fact: "The Bay of Fundy here has the highest tides in the world.",
    path: "M 615 330 L 655 330 L 655 365 L 645 365 L 625 360 L 615 350 Z",
    labelX: 635,
    labelY: 348
  },
  {
    id: "ns",
    name: "Nova Scotia",
    hint: "Maritime peninsula east of New Brunswick.",
    fact: "Nova Scotia means 'New Scotland' in Latin.",
    path: "M 655 340 L 680 338 L 700 345 L 705 355 L 705 370 L 690 375 L 670 372 L 655 365 L 650 355 Z",
    labelX: 678,
    labelY: 357
  },
  {
    id: "pe",
    name: "Prince Edward Island",
    hint: "Smallest province — an island in the Gulf of St. Lawrence.",
    fact: "PEI is the setting of the 'Anne of Green Gables' books.",
    path: "M 660 322 L 690 320 L 692 332 L 662 334 Z",
    labelX: 676,
    labelY: 328
  },
  {
    id: "nl",
    name: "Newfoundland and Labrador",
    hint: "Easternmost province — includes an island and mainland Labrador.",
    fact: "Vikings landed in Newfoundland over 1,000 years ago.",
    path: "M 645 210 L 690 205 L 720 215 L 725 235 L 725 265 L 715 285 L 695 295 L 670 300 L 650 290 L 645 270 L 645 240 Z M 700 310 L 730 308 L 745 315 L 750 330 L 745 345 L 725 350 L 710 345 L 700 335 Z",
    labelX: 700,
    labelY: 255
  }
];

export default canadianTerritories;
