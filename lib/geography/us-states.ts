import type { GeoFeature } from "./quiz-engine";

// Stylized U.S. state outlines arranged on an 800x600 viewBox.
// Shapes are simplified rectangles/polygons sized roughly to relative geography
// so fifth graders can recognize position (west/east, north/south).
// Coordinates are designed so the contiguous 48 fit in the main map area,
// with Alaska and Hawaii in inset boxes at the bottom-left.

function rect(x: number, y: number, w: number, h: number): string {
  return `M ${x} ${y} L ${x + w} ${y} L ${x + w} ${y + h} L ${x} ${y + h} Z`;
}

export const usStates: GeoFeature[] = [
  // Row 1 — northern tier (west to east)
  { id: "wa", name: "Washington", hint: "Pacific Northwest corner — home of Seattle.", path: rect(120, 150, 60, 50), labelX: 150, labelY: 175 },
  { id: "id", name: "Idaho", hint: "Famous for potatoes.", path: rect(180, 150, 50, 80), labelX: 205, labelY: 190 },
  { id: "mt", name: "Montana", hint: "Big Sky Country.", path: rect(230, 150, 90, 60), labelX: 275, labelY: 180 },
  { id: "nd", name: "North Dakota", hint: "Northern plains state above South Dakota.", path: rect(320, 150, 60, 50), labelX: 350, labelY: 175 },
  { id: "mn", name: "Minnesota", hint: "Land of 10,000 lakes.", path: rect(380, 145, 60, 70), labelX: 410, labelY: 180 },
  { id: "wi", name: "Wisconsin", hint: "Known for dairy and cheese.", path: rect(440, 165, 50, 60), labelX: 465, labelY: 195 },
  { id: "mi", name: "Michigan", hint: "Shaped like a mitten.", path: rect(490, 170, 55, 65), labelX: 517, labelY: 200 },
  { id: "me", name: "Maine", hint: "Northeastern-most state.", path: rect(640, 150, 40, 55), labelX: 660, labelY: 175 },

  // Row 2 — central north
  { id: "or", name: "Oregon", hint: "Pacific coast, south of Washington.", path: rect(120, 200, 60, 55), labelX: 150, labelY: 225 },
  { id: "wy", name: "Wyoming", hint: "Home of Yellowstone National Park.", path: rect(230, 210, 90, 55), labelX: 275, labelY: 235 },
  { id: "sd", name: "South Dakota", hint: "Home of Mount Rushmore.", path: rect(320, 200, 60, 50), labelX: 350, labelY: 225 },
  { id: "ia", name: "Iowa", hint: "Corn state between Nebraska and Illinois.", path: rect(380, 215, 60, 45), labelX: 410, labelY: 235 },
  { id: "il", name: "Illinois", hint: "Home of Chicago.", path: rect(440, 225, 45, 65), labelX: 462, labelY: 255 },
  { id: "in", name: "Indiana", hint: "East of Illinois.", path: rect(485, 235, 35, 60), labelX: 502, labelY: 263 },
  { id: "oh", name: "Ohio", hint: "Buckeye State, east of Indiana.", path: rect(520, 235, 50, 55), labelX: 545, labelY: 260 },
  { id: "pa", name: "Pennsylvania", hint: "Home of Philadelphia and Pittsburgh.", path: rect(570, 235, 60, 45), labelX: 600, labelY: 257 },
  { id: "ny", name: "New York", hint: "Home of NYC and the Statue of Liberty.", path: rect(580, 195, 60, 40), labelX: 610, labelY: 215 },
  { id: "vt", name: "Vermont", hint: "Tiny New England state west of New Hampshire.", path: rect(630, 190, 16, 40), labelX: 638, labelY: 210 },
  { id: "nh", name: "New Hampshire", hint: "New England state east of Vermont.", path: rect(646, 190, 16, 40), labelX: 654, labelY: 210 },
  { id: "ma", name: "Massachusetts", hint: "Home of Boston.", path: rect(640, 220, 40, 18), labelX: 660, labelY: 230 },
  { id: "ct", name: "Connecticut", hint: "South of Massachusetts.", path: rect(640, 238, 25, 14), labelX: 652, labelY: 246 },
  { id: "ri", name: "Rhode Island", hint: "Smallest state.", path: rect(665, 238, 12, 14), labelX: 671, labelY: 246 },
  { id: "nj", name: "New Jersey", hint: "Garden State, east of Pennsylvania.", path: rect(630, 252, 18, 28), labelX: 639, labelY: 266 },

  // Row 3 — central
  { id: "nv", name: "Nevada", hint: "Home of Las Vegas.", path: rect(160, 255, 55, 75), labelX: 188, labelY: 290 },
  { id: "ut", name: "Utah", hint: "Home of the Great Salt Lake.", path: rect(215, 265, 55, 65), labelX: 242, labelY: 297 },
  { id: "co", name: "Colorado", hint: "Rocky Mountain state.", path: rect(270, 265, 70, 60), labelX: 305, labelY: 295 },
  { id: "ne", name: "Nebraska", hint: "Plains state south of South Dakota.", path: rect(320, 250, 60, 45), labelX: 350, labelY: 272 },
  { id: "ks", name: "Kansas", hint: "Wheat state in the middle of the country.", path: rect(320, 295, 65, 45), labelX: 352, labelY: 317 },
  { id: "mo", name: "Missouri", hint: "Show-Me State, east of Kansas.", path: rect(385, 260, 55, 60), labelX: 412, labelY: 290 },
  { id: "ky", name: "Kentucky", hint: "Bluegrass State, south of Indiana.", path: rect(470, 295, 75, 30), labelX: 507, labelY: 310 },
  { id: "wv", name: "West Virginia", hint: "Mountain state between Ohio and Virginia.", path: rect(545, 280, 40, 35), labelX: 565, labelY: 297 },
  { id: "va", name: "Virginia", hint: "Home of the U.S. capital region.", path: rect(560, 290, 70, 35), labelX: 595, labelY: 307 },
  { id: "md", name: "Maryland", hint: "Surrounds Chesapeake Bay.", path: rect(595, 270, 45, 18), labelX: 617, labelY: 280 },
  { id: "de", name: "Delaware", hint: "Small state east of Maryland.", path: rect(640, 270, 10, 22), labelX: 645, labelY: 281 },

  // Row 4 — south
  { id: "ca", name: "California", hint: "Pacific coast state with Hollywood.", path: rect(120, 255, 40, 110), labelX: 140, labelY: 310 },
  { id: "az", name: "Arizona", hint: "Home of the Grand Canyon.", path: rect(215, 330, 55, 60), labelX: 242, labelY: 360 },
  { id: "nm", name: "New Mexico", hint: "Land of Enchantment, east of Arizona.", path: rect(270, 325, 55, 65), labelX: 297, labelY: 357 },
  { id: "ok", name: "Oklahoma", hint: "Has a panhandle pointing west.", path: rect(325, 340, 65, 35), labelX: 357, labelY: 357 },
  { id: "tx", name: "Texas", hint: "Largest state in the lower 48.", path: "M 270 390 L 405 380 L 415 460 L 365 490 L 300 480 Z", labelX: 345, labelY: 430 },
  { id: "ar", name: "Arkansas", hint: "Between Texas and Tennessee.", path: rect(390, 325, 50, 50), labelX: 415, labelY: 350 },
  { id: "la", name: "Louisiana", hint: "Home of New Orleans and the Mississippi delta.", path: rect(405, 405, 50, 50), labelX: 430, labelY: 430 },
  { id: "ms", name: "Mississippi", hint: "Magnolia State, east of Louisiana.", path: rect(455, 375, 30, 80), labelX: 470, labelY: 415 },
  { id: "al", name: "Alabama", hint: "Between Mississippi and Georgia.", path: rect(485, 365, 35, 80), labelX: 502, labelY: 405 },
  { id: "tn", name: "Tennessee", hint: "South of Kentucky.", path: rect(440, 325, 105, 30), labelX: 492, labelY: 340 },
  { id: "ga", name: "Georgia", hint: "Peach State, between Alabama and Florida.", path: rect(520, 355, 50, 75), labelX: 545, labelY: 392 },
  { id: "nc", name: "North Carolina", hint: "Tar Heel State, on the Atlantic coast.", path: rect(545, 320, 90, 30), labelX: 590, labelY: 335 },
  { id: "sc", name: "South Carolina", hint: "Between North Carolina and Georgia.", path: rect(560, 350, 55, 30), labelX: 587, labelY: 365 },
  { id: "fl", name: "Florida", hint: "Sunshine State — a peninsula in the southeast.", path: "M 525 430 L 610 425 L 625 460 L 605 510 L 580 490 L 545 470 Z", labelX: 575, labelY: 465 },

  // Insets — Alaska and Hawaii
  { id: "ak", name: "Alaska", hint: "Largest U.S. state, in the far northwest.", path: "M 30 480 L 110 475 L 120 510 L 95 540 L 50 535 Z", labelX: 70, labelY: 510 },
  { id: "hi", name: "Hawaii", hint: "Island state in the Pacific Ocean.", path: "M 135 540 L 150 535 L 155 545 L 145 552 Z M 160 545 L 172 542 L 176 552 L 165 556 Z M 180 552 L 192 549 L 196 558 L 185 562 Z", labelX: 165, labelY: 555 },
];

export default usStates;
