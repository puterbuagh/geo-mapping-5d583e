import type { GeoFeature } from "./quiz-engine";

// Stylized outlines of Canada's 10 provinces and 3 territories on an 800x600 viewBox.
// Shapes are simplified to help fifth graders recognize position (west-east, north-south).

function rect(x: number, y: number, w: number, h: number): string {
  return `M ${x} ${y} L ${x + w} ${y} L ${x + w} ${y + h} L ${x} ${y + h} Z`;
}

export const canadianTerritories: GeoFeature[] = [
  // Territories (northern Canada)
  {
    id: "yt",
    name: "Yukon",
    hint: "Northwestern territory, north of British Columbia.",
    fact: "The Yukon was the site of the famous Klondike Gold Rush in the 1890s.",
    path: rect(110, 90, 90, 110),
    labelX: 155,
    labelY: 145,
  },
  {
    id: "nt",
    name: "Northwest Territories",
    hint: "Large northern territory between Yukon and Nunavut.",
    fact: "Great Slave Lake, one of the deepest lakes in North America, is here.",
    path: rect(200, 90, 160, 110),
    labelX: 280,
    labelY: 145,
  },
  {
    id: "nu",
    name: "Nunavut",
    hint: "The largest and newest territory, covering Canada's Arctic.",
    fact: "Nunavut means 'our land' in the Inuktitut language.",
    path: rect(360, 70, 280, 140),
    labelX: 500,
    labelY: 140,
  },

  // Provinces (south, west to east)
  {
    id: "bc",
    name: "British Columbia",
    hint: "Pacific coast province, west of Alberta.",
    fact: "British Columbia has rainforests, mountains, and the city of Vancouver.",
    path: rect(110, 200, 95, 130),
    labelX: 157,
    labelY: 265,
  },
  {
    id: "ab",
    name: "Alberta",
    hint: "Prairie province east of British Columbia.",
    fact: "Alberta has the Canadian Rockies and Banff National Park.",
    path: rect(205, 200, 70, 130),
    labelX: 240,
    labelY: 265,
  },
  {
    id: "sk",
    name: "Saskatchewan",
    hint: "Prairie province between Alberta and Manitoba.",
    fact: "Saskatchewan grows much of Canada's wheat.",
    path: rect(275, 200, 70, 130),
    labelX: 310,
    labelY: 265,
  },
  {
    id: "mb",
    name: "Manitoba",
    hint: "Prairie province east of Saskatchewan.",
    fact: "Manitoba has over 100,000 lakes!",
    path: rect(345, 200, 70, 130),
    labelX: 380,
    labelY: 265,
  },
  {
    id: "on",
    name: "Ontario",
    hint: "Home of Canada's capital, Ottawa, and Toronto.",
    fact: "Ontario borders four of the five Great Lakes.",
    path: rect(415, 210, 120, 120),
    labelX: 475,
    labelY: 270,
  },
  {
    id: "qc",
    name: "Quebec",
    hint: "Largest province by area — most people speak French.",
    fact: "Quebec City is one of the oldest cities in North America.",
    path: rect(535, 200, 110, 130),
    labelX: 590,
    labelY: 265,
  },
  {
    id: "nb",
    name: "New Brunswick",
    hint: "Maritime province on Canada's east coast.",
    fact: "The Bay of Fundy here has the highest tides in the world.",
    path: rect(615, 330, 40, 35),
    labelX: 635,
    labelY: 348,
  },
  {
    id: "ns",
    name: "Nova Scotia",
    hint: "Maritime peninsula east of New Brunswick.",
    fact: "Nova Scotia means 'New Scotland' in Latin.",
    path: "M 655 340 L 700 345 L 705 370 L 670 372 L 650 360 Z",
    labelX: 678,
    labelY: 357,
  },
  {
    id: "pe",
    name: "Prince Edward Island",
    hint: "Smallest province — an island in the Gulf of St. Lawrence.",
    fact: "PEI is the setting of the 'Anne of Green Gables' books.",
    path: "M 660 322 L 690 320 L 692 332 L 662 334 Z",
    labelX: 676,
    labelY: 328,
  },
  {
    id: "nl",
    name: "Newfoundland and Labrador",
    hint: "Easternmost province — includes an island and mainland Labrador.",
    fact: "Vikings landed in Newfoundland over 1,000 years ago.",
    path: "M 645 210 L 720 215 L 725 290 L 690 300 L 660 285 Z M 700 310 L 745 305 L 750 340 L 715 345 Z",
    labelX: 700,
    labelY: 255,
  },
];

export default canadianTerritories;
