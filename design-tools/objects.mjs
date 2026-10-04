// Hand-drawn objects for Humphrey's portfolio. Each entry is an SVG string with
// its own gradient ids. Soft "clay" shading: a light side, a dark side, a gloss.

const P = {
  blue1: '#6FB1F2', blue2: '#1E6FC0', blue3: '#12457F',
  char1: '#323C5C', char2: '#121828',
  cream1: '#FFFBF2', cream2: '#EFE6D2', cream3: '#CDBFA2',
  amber1: '#FFD98A', amber2: '#F2B13C', amber3: '#C9831A',
  coral1: '#FFA58A', coral2: '#E8654A', coral3: '#B2402B',
  mint1: '#A6E6C8', mint2: '#4DB38A', mint3: '#2C7F60',
  pink1: '#FFD6DE', pink2: '#F49CB2',
  silver1: '#F6F8FB', silver2: '#CBD2DE', silver3: '#8892A8',
  wood1: '#F0C48A', wood2: '#C48E4E', wood3: '#8E5F2C',
};

const lg = (id, stops, x1 = 0, y1 = 0, x2 = 1, y2 = 1) =>
  `<linearGradient id="${id}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">${stops
    .map(([o, c, a]) => `<stop offset="${o}" stop-color="${c}"${a !== undefined ? ` stop-opacity="${a}"` : ''}/>`)
    .join('')}</linearGradient>`;
const rg = (id, stops, cx = 0.35, cy = 0.3, r = 0.8) =>
  `<radialGradient id="${id}" cx="${cx}" cy="${cy}" r="${r}">${stops
    .map(([o, c, a]) => `<stop offset="${o}" stop-color="${c}"${a !== undefined ? ` stop-opacity="${a}"` : ''}/>`)
    .join('')}</radialGradient>`;

const svg = (w, h, body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">${body}</svg>`;

// seeded random for QR modules etc.
const rnd = (seed) => () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;

// ---------------------------------------------------------------- mortar
const mortar = svg(512, 460, `
<defs>
${lg('m-bowl', [[0, '#FBF7EE'], [0.5, '#DDD5C3'], [1, '#A59B86']], 0, 0, 1, 1)}
${lg('m-rim', [[0, '#FFFFFF'], [1, '#D8D0BD']], 0, 0, 1, 1)}
${lg('m-in', [[0, '#8D8573'], [1, '#C4BCA8']], 0, 0, 0, 1)}
${lg('m-pestle', [[0, '#8EC3F6'], [0.45, P.blue2], [1, P.blue3]], 0, 0, 1, 0)}
${rg('m-knob', [[0, '#A7D1F8'], [1, P.blue2]], 0.35, 0.3, 0.8)}
</defs>
<ellipse cx="256" cy="418" rx="150" ry="24" fill="#000" opacity="0.10"/>
<ellipse cx="256" cy="190" rx="190" ry="52" fill="url(#m-rim)"/>
<ellipse cx="256" cy="193" rx="168" ry="40" fill="url(#m-in)"/>
<ellipse cx="236" cy="186" rx="96" ry="14" fill="#000" opacity="0.10"/>
<g transform="rotate(-30 300 130)">
  <rect x="270" y="22" width="60" height="190" rx="30" fill="url(#m-pestle)"/>
  <rect x="278" y="34" width="9" height="150" rx="4.5" fill="#fff" opacity="0.38"/>
  <ellipse cx="300" cy="36" rx="38" ry="30" fill="url(#m-knob)"/>
  <ellipse cx="288" cy="28" rx="14" ry="8" fill="#fff" opacity="0.5"/>
</g>
<path d="M66 190 C66 332 140 410 256 410 C372 410 446 332 446 190 A190 52 0 0 1 66 190 Z" fill="url(#m-bowl)"/>
<path d="M66 196 C70 330 142 408 256 408" fill="none" stroke="#fff" stroke-opacity="0.55" stroke-width="5" stroke-linecap="round"/>
<path d="M446 196 C442 332 372 410 256 410 C340 400 420 330 430 215 Z" fill="#6E6552" opacity="0.28"/>
<ellipse cx="124" cy="270" rx="20" ry="64" fill="#fff" opacity="0.38" transform="rotate(14 124 270)"/>
<ellipse cx="256" cy="412" rx="92" ry="14" fill="#B2A88F"/>
<path d="M164 410 Q256 428 348 410 L348 402 Q256 416 164 402 Z" fill="#8F8671" opacity="0.7"/>
`);

// ---------------------------------------------------------------- laptop
const keys = Array.from({ length: 4 }, (_, r) =>
  Array.from({ length: 12 }, (_, c) =>
    `<rect x="${22 + c * 21.5}" y="${10 + r * 12.5}" width="18" height="10" rx="2.5" fill="#2A3350"/>`).join('')).join('');
const laptop = svg(512, 390, `
<defs>
${lg('l-lid', [[0, '#3A4466'], [1, '#121828']], 0, 0, 1, 1)}
${lg('l-scr', [[0, '#F4F8FE'], [1, '#DCE8F7']], 0, 0, 0, 1)}
${lg('l-base', [[0, '#F4F6FA'], [1, '#B9C1D1']], 0, 0, 1, 1)}
</defs>
<ellipse cx="270" cy="372" rx="210" ry="14" fill="#000" opacity="0.10"/>
<polygon points="60,70 340,40 352,255 72,285" fill="url(#l-lid)"/>
<polygon points="60,70 340,40 342,52 62,82" fill="#fff" opacity="0.12"/>
<g transform="matrix(0.977 -0.104 0.05 0.92 74 84)">
  <rect width="260" height="200" rx="4" fill="url(#l-scr)"/>
  <rect width="260" height="34" fill="${P.blue2}"/>
  <rect x="14" y="11" width="64" height="9" rx="4.5" fill="#fff" opacity="0.95"/>
  <circle cx="238" cy="17" r="8" fill="${P.amber2}"/>
  ${[0, 1, 2, 3].map((i) => `
  <g transform="translate(14 ${48 + i * 36})">
    <rect width="232" height="28" rx="7" fill="#fff"/>
    <circle cx="16" cy="14" r="8" fill="${i === 3 ? P.amber1 : P.mint2}"/>
    ${i === 3 ? '' : `<path d="M11.5 14.2 l3.2 3.2 l6 -6.4" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`}
    <rect x="34" y="8" width="${[96, 80, 110, 70][i]}" height="6" rx="3" fill="#C5D0E2"/>
    <rect x="34" y="18" width="${[54, 62, 44, 58][i]}" height="4" rx="2" fill="#E1E8F3"/>
    <rect x="186" y="9" width="36" height="10" rx="5" fill="${i === 3 ? '#FFE9B8' : '#CFEFE1'}"/>
  </g>`).join('')}
</g>
<polygon points="72,285 352,255 450,330 170,360" fill="url(#l-base)"/>
<polygon points="170,360 450,330 450,343 170,373" fill="#7F8AA3"/>
<polygon points="72,285 170,360 170,373 72,298" fill="#9AA4BA"/>
<g transform="matrix(0.933 -0.1 1.089 0.833 72 285)">
  <rect x="12" y="4" width="276" height="56" rx="6" fill="#1C2339"/>
  ${keys}
  <rect x="112" y="64" width="76" height="20" rx="6" fill="#DCE2EE" stroke="#B5BED0" stroke-width="1.5"/>
</g>
<polygon points="72,285 352,255 354,262 74,292" fill="#fff" opacity="0.6"/>
`);

// ---------------------------------------------------------------- books
const spines = [
  ['Pharmacology', P.blue1, P.blue3, '#fff', 0, 76],
  ['Habits', P.char1, P.char2, '#fff', 22, 70],
  ['Small Business', P.cream1, P.cream3, P.char2, -10, 74],
  ['Web Novel', P.coral1, P.coral3, '#fff', 14, 68],
];
const books = svg(512, 400, `
<defs>
${spines.map((s, i) => lg(`b-${i}`, [[0, s[1]], [1, s[2]]], 0, 0, 0, 1)).join('')}
${lg('b-page', [[0, '#FFFFFF'], [1, '#E3DAC6']], 0, 0, 0, 1)}
</defs>
<ellipse cx="256" cy="378" rx="190" ry="14" fill="#000" opacity="0.10"/>
${spines.map((s, i) => {
  const y = 306 - i * 78;
  const x = 62 + s[4];
  const w = 360;
  const h = s[5];
  return `<g>
  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="url(#b-${i})"/>
  <rect x="${x + w - 36}" y="${y + 7}" width="44" height="${h - 14}" rx="4" fill="url(#b-page)"/>
  ${[0, 1, 2, 3, 4, 5].map((k) => `<line x1="${x + w - 30}" x2="${x + w + 6}" y1="${y + 14 + k * ((h - 28) / 5)}" y2="${y + 14 + k * ((h - 28) / 5)}" stroke="#C9BCA2" stroke-width="1.4"/>`).join('')}
  <rect x="${x}" y="${y}" width="22" height="${h}" rx="8" fill="#000" opacity="0.12"/>
  <rect x="${x + 6}" y="${y + 4}" width="${w - 52}" height="5" rx="2.5" fill="#fff" opacity="0.28"/>
  <line x1="${x + 70}" x2="${x + 70}" y1="${y + 6}" y2="${y + h - 6}" stroke="${s[3]}" stroke-opacity="0.35" stroke-width="2"/>
  <text x="${x + 92}" y="${y + h / 2 + 9}" font-family="Poppins, Inter, sans-serif" font-weight="600" font-size="26" fill="${s[3]}">${s[0]}</text>
  </g>`;
}).join('')}
`);

// ---------------------------------------------------------------- clapperboard
const clapper = svg(512, 420, `
<defs>
${lg('c-body', [[0, '#3A4466'], [1, '#121828']], 0, 0, 1, 1)}
<pattern id="c-stripes" width="64" height="64" patternUnits="userSpaceOnUse" patternTransform="rotate(-28)">
  <rect width="32" height="64" fill="${P.cream1}"/><rect x="32" width="32" height="64" fill="${P.char2}"/>
</pattern>
</defs>
<ellipse cx="260" cy="396" rx="190" ry="14" fill="#000" opacity="0.10"/>
<rect x="64" y="176" width="388" height="206" rx="16" fill="url(#c-body)"/>
<rect x="64" y="176" width="388" height="14" rx="6" fill="#fff" opacity="0.12"/>
<rect x="64" y="176" width="388" height="38" fill="url(#c-stripes)" stroke="${P.char2}" stroke-width="3"/>
${[0, 1, 2].map((i) => `<g>
  <line x1="92" x2="424" y1="${248 + i * 44}" y2="${248 + i * 44}" stroke="#fff" stroke-opacity="0.35" stroke-width="2"/>
  <rect x="92" y="${222 + i * 44}" width="${[90, 64, 110][i]}" height="10" rx="5" fill="#fff" opacity="0.85"/>
  <rect x="${[300, 330, 280][i]}" y="${222 + i * 44}" width="${[100, 70, 120][i]}" height="10" rx="5" fill="${i === 1 ? P.amber2 : P.blue1}" opacity="0.9"/></g>`).join('')}
<g transform="rotate(-16 70 168)">
  <rect x="64" y="108" width="388" height="62" rx="9" fill="url(#c-stripes)" stroke="${P.char2}" stroke-width="3"/>
  <rect x="64" y="108" width="388" height="10" rx="5" fill="#fff" opacity="0.25"/>
  <circle cx="74" cy="168" r="10" fill="${P.amber2}" stroke="${P.char2}" stroke-width="3"/>
</g>
`);

// ---------------------------------------------------------------- hanger + shirt (hangs from the thread)
const hanger = svg(315, 512, `
<defs>
${lg('h-shirt', [[0, '#8EC3F6'], [0.5, P.blue2], [1, P.blue3]], 0, 0, 1, 1)}
${lg('h-wood', [[0, P.wood1], [1, P.wood3]], 0, 0, 0, 1)}
</defs>
<path d="M120 262 L82 268 C60 274 42 302 32 344 L60 356 L80 326 L80 472 C80 484 92 490 104 490 L216 490 C228 490 240 484 240 472 L240 326 L260 356 L288 344 C278 302 260 274 238 268 L200 262 C196 282 180 294 160 294 C140 294 124 282 120 262 Z" fill="url(#h-shirt)"/>
<path d="M80 326 L80 472 C80 484 92 490 104 490 L130 490 C110 470 106 400 112 340 Z" fill="#fff" opacity="0.14"/>
<path d="M240 330 L240 472 C240 484 228 490 216 490 L200 490 C226 470 232 400 226 336 Z" fill="#000" opacity="0.16"/>
<path d="M120 262 C124 282 140 294 160 294 C180 294 196 282 200 262 L184 256 C180 270 172 280 160 280 C148 280 140 270 136 256 Z" fill="${P.cream1}"/>
${[0, 1, 2, 3].map((i) => `<circle cx="160" cy="${316 + i * 36}" r="5" fill="#fff" opacity="0.9"/>`).join('')}
<rect x="176" y="336" width="42" height="38" rx="6" fill="none" stroke="#fff" stroke-opacity="0.45" stroke-width="2.5"/>
<path d="M160 150 L42 236 L278 236 Z" fill="url(#h-wood)" stroke="url(#h-wood)" stroke-width="22" stroke-linejoin="round"/>
<path d="M62 232 L258 232" stroke="#fff" stroke-opacity="0.4" stroke-width="5" stroke-linecap="round"/>
<path d="M160 156 L160 120 C160 98 184 94 184 68 C184 44 162 30 142 38 C126 45 124 64 136 72" fill="none" stroke="${P.silver3}" stroke-width="10" stroke-linecap="round"/>
<path d="M160 156 L160 120 C160 98 184 94 184 68 C184 44 162 30 142 38 C126 45 124 64 136 72" fill="none" stroke="${P.silver1}" stroke-width="4" stroke-linecap="round" opacity="0.8"/>
`);

// ---------------------------------------------------------------- microphone
const mesh = Array.from({ length: 9 }, (_, i) => `<line x1="${150 + i * 21}" x2="${150 + i * 21}" y1="30" y2="260" stroke="#8892A8" stroke-opacity="0.5" stroke-width="2"/>`).join('') +
  Array.from({ length: 11 }, (_, i) => `<line x1="130" x2="340" y1="${50 + i * 20}" y2="${50 + i * 20}" stroke="#8892A8" stroke-opacity="0.5" stroke-width="2"/>`).join('');
const mic = svg(465, 512, `
<defs>
${lg('mi-head', [[0, '#5B6688'], [0.5, '#2A3350'], [1, '#121828']], 0, 0, 1, 1)}
${lg('mi-metal', [[0, '#FFFFFF'], [0.5, '#CBD2DE'], [1, '#7F8AA3']], 0, 0, 1, 0)}
${lg('mi-base', [[0, '#4A5578'], [1, '#121828']], 0, 0, 0, 1)}
<clipPath id="mi-clip"><rect x="128" y="34" width="212" height="224" rx="100"/></clipPath>
</defs>
<ellipse cx="234" cy="486" rx="130" ry="16" fill="#000" opacity="0.12"/>
<path d="M104 170 C104 300 160 350 234 350 C308 350 364 300 364 170" fill="none" stroke="url(#mi-metal)" stroke-width="18" stroke-linecap="round"/>
<rect x="224" y="346" width="20" height="104" fill="url(#mi-metal)"/>
<ellipse cx="234" cy="462" rx="104" ry="26" fill="url(#mi-base)"/>
<ellipse cx="234" cy="452" rx="104" ry="24" fill="#3B4669"/>
<ellipse cx="234" cy="448" rx="64" ry="12" fill="#121828" opacity="0.5"/>
<rect x="128" y="34" width="212" height="224" rx="100" fill="url(#mi-head)"/>
<g clip-path="url(#mi-clip)">${mesh}
  <rect x="120" y="120" width="230" height="22" fill="${P.blue2}"/>
  <rect x="120" y="120" width="230" height="6" fill="#fff" opacity="0.3"/>
  <ellipse cx="180" cy="90" rx="22" ry="52" fill="#fff" opacity="0.2" transform="rotate(12 180 90)"/>
</g>
<rect x="128" y="34" width="212" height="224" rx="100" fill="none" stroke="#fff" stroke-opacity="0.18" stroke-width="3"/>
`);

// ---------------------------------------------------------------- phone with job list
const jobs = [
  ['Agbada, 2 pcs', '₦12,500', true],
  ['Duvet, dry clean', '₦6,000', true],
  ['Screen swap', '₦18,000', false],
  ['Sole repair', '₦3,500', false],
];
const phone = svg(360, 512, `
<defs>
${lg('p-body', [[0, '#4A5578'], [1, '#121828']], 0, 0, 1, 1)}
${lg('p-head', [[0, P.blue1], [1, P.blue2]], 0, 0, 1, 1)}
</defs>
<ellipse cx="190" cy="492" rx="110" ry="12" fill="#000" opacity="0.12"/>
<g transform="rotate(-7 180 256)">
  <rect x="94" y="48" width="200" height="424" rx="40" fill="#0A0F1C"/>
  <rect x="84" y="36" width="200" height="424" rx="40" fill="url(#p-body)"/>
  <rect x="94" y="46" width="180" height="404" rx="30" fill="#F6F9FD"/>
  <rect x="94" y="46" width="180" height="104" rx="30" fill="url(#p-head)"/>
  <rect x="94" y="120" width="180" height="30" fill="${P.blue2}"/>
  <rect x="152" y="54" width="64" height="16" rx="8" fill="#0A0F1C"/>
  <text x="112" y="104" font-family="Poppins, Inter, sans-serif" font-weight="700" font-size="20" fill="#fff">Today</text>
  <text x="112" y="134" font-family="Poppins, Inter, sans-serif" font-weight="500" font-size="12" fill="#fff" fill-opacity="0.85">4 jobs · 2 done</text>
  ${jobs.map((j, i) => `<g transform="translate(106 ${166 + i * 62})">
    <rect width="156" height="52" rx="12" fill="#fff" stroke="#E2E9F4" stroke-width="1.5"/>
    <circle cx="22" cy="26" r="11" fill="${j[2] ? P.mint2 : P.amber1}"/>
    ${j[2] ? `<path d="M16.5 26.4 l4.2 4.2 l7.6 -8" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>` : `<circle cx="22" cy="26" r="3.4" fill="#fff"/>`}
    <text x="42" y="24" font-family="Poppins, Inter, sans-serif" font-weight="600" font-size="11" fill="${P.char2}">${j[0]}</text>
    <text x="42" y="40" font-family="Poppins, Inter, sans-serif" font-weight="500" font-size="11" fill="#6A7590">${j[1]}</text>
  </g>`).join('')}
  <rect x="116" y="418" width="136" height="24" rx="12" fill="${P.char2}"/>
  <rect x="150" y="428" width="68" height="4" rx="2" fill="#fff" opacity="0.85"/>
  <path d="M104 62 C104 52 112 48 122 48 L150 48" fill="none" stroke="#fff" stroke-opacity="0.35" stroke-width="3" stroke-linecap="round"/>
</g>
`);

// ---------------------------------------------------------------- spool + needle
const spoolLines = Array.from({ length: 14 }, (_, i) => `<path d="M118 ${106 + i * 18.6} Q200 ${126 + i * 18.6} 282 ${106 + i * 18.6}" fill="none" stroke="${P.blue3}" stroke-opacity="0.45" stroke-width="2.6"/>`).join('');
const spool = svg(400, 480, `
<defs>
${lg('s-thread', [[0, '#8EC3F6'], [0.35, P.blue2], [1, P.blue3]], 0, 0, 1, 0)}
${lg('s-wood', [[0, P.wood1], [1, P.wood3]], 0, 0, 1, 1)}
${lg('s-needle', [[0, '#fff'], [1, '#8892A8']], 0, 0, 1, 1)}
</defs>
<ellipse cx="190" cy="448" rx="130" ry="16" fill="#000" opacity="0.12"/>
<path d="M90 96 L90 126 C90 142 138 154 200 154 C262 154 310 142 310 126 L310 96 Z" fill="url(#s-wood)"/>
<ellipse cx="200" cy="96" rx="110" ry="28" fill="${P.wood1}"/>
<ellipse cx="200" cy="96" rx="94" ry="21" fill="${P.wood2}" opacity="0.55"/>
<ellipse cx="200" cy="96" rx="22" ry="6" fill="#5C3A18"/>
<path d="M118 126 L118 372 C118 384 150 392 200 392 C250 392 282 384 282 372 L282 126 C282 138 250 146 200 146 C150 146 118 138 118 126 Z" fill="url(#s-thread)"/>
${spoolLines}
<path d="M118 130 L118 372" stroke="#fff" stroke-opacity="0.32" stroke-width="10" stroke-linecap="round"/>
<path d="M90 372 L90 402 C90 418 138 430 200 430 C262 430 310 418 310 402 L310 372 Z" fill="url(#s-wood)"/>
<ellipse cx="200" cy="372" rx="110" ry="28" fill="${P.wood1}"/>
<path d="M118 372 C118 384 150 392 200 392 C250 392 282 384 282 372 C282 360 250 352 200 352 C150 352 118 360 118 372 Z" fill="${P.blue2}" opacity="0"/>
<path d="M282 300 C350 296 356 372 316 404 C288 428 250 410 276 448" fill="none" stroke="${P.blue2}" stroke-width="7" stroke-linecap="round"/>
<path d="M282 300 C350 296 356 372 316 404 C288 428 250 410 276 448" fill="none" stroke="#8EC3F6" stroke-width="2.4" stroke-linecap="round" opacity="0.7"/>
<g transform="rotate(24 300 120)">
  <rect x="296" y="26" width="8" height="190" rx="4" fill="url(#s-needle)"/>
  <ellipse cx="300" cy="44" rx="5" ry="13" fill="none" stroke="${P.silver3}" stroke-width="3"/>
  <path d="M296 200 L300 232 L304 200 Z" fill="${P.silver2}"/>
</g>
`);

// ---------------------------------------------------------------- capsules
const capsuleHalf = (id, a, b) => lg(id, [[0, a], [1, b]], 0, 0, 1, 0);
const capsule = (cx, cy, rot, s, c1, c2, idp) => `
<g transform="translate(${cx} ${cy}) rotate(${rot}) scale(${s})">
  <clipPath id="${idp}-clip"><rect x="-44" y="-120" width="88" height="240" rx="44"/></clipPath>
  <g clip-path="url(#${idp}-clip)">
    <rect x="-44" y="-120" width="88" height="120" fill="url(#${idp}-a)"/>
    <rect x="-44" y="0" width="88" height="120" fill="url(#${idp}-b)"/>
    <rect x="-44" y="-4" width="88" height="8" fill="#000" opacity="0.10"/>
    <rect x="-30" y="-108" width="12" height="206" rx="6" fill="#fff" opacity="0.5"/>
    <rect x="22" y="-100" width="14" height="196" rx="7" fill="#000" opacity="0.10"/>
  </g>
</g>`;
const capsules = svg(512, 430, `
<defs>
${capsuleHalf('c1-a', P.blue1, P.blue3)}${capsuleHalf('c1-b', '#FFFFFF', '#D5DCE9')}
${capsuleHalf('c2-a', P.amber1, P.amber3)}${capsuleHalf('c2-b', '#FFFFFF', '#E3DAC6')}
${rg('tab', [[0, '#FFFFFF'], [1, '#D9DFEB']], 0.35, 0.3, 0.85)}
</defs>
<ellipse cx="256" cy="404" rx="200" ry="16" fill="#000" opacity="0.10"/>
${capsule(226, 190, 34, 1.0, '', '', 'c1')}
${capsule(386, 262, -26, 0.74, '', '', 'c2')}
<circle cx="132" cy="330" r="62" fill="url(#tab)"/>
<path d="M92 330 L172 330" stroke="#B9C2D6" stroke-width="5" stroke-linecap="round"/>
<ellipse cx="108" cy="306" rx="20" ry="9" fill="#fff" opacity="0.8" transform="rotate(-30 108 306)"/>
<circle cx="132" cy="330" r="62" fill="none" stroke="#C5CDDF" stroke-width="2"/>
`);

// ---------------------------------------------------------------- gift + QR card
const r1 = rnd(42);
const qr = (() => {
  const n = 11, cell = 8; let out = '';
  const finder = (x, y) => `<rect x="${x}" y="${y}" width="${cell * 3}" height="${cell * 3}" fill="${P.char2}"/><rect x="${x + cell * 0.6}" y="${y + cell * 0.6}" width="${cell * 1.8}" height="${cell * 1.8}" fill="#fff"/><rect x="${x + cell * 1.05}" y="${y + cell * 1.05}" width="${cell * 0.9}" height="${cell * 0.9}" fill="${P.char2}"/>`;
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    const inF = (i < 3 && j < 3) || (i > n - 4 && j < 3) || (i < 3 && j > n - 4);
    if (!inF && r1() > 0.5) out += `<rect x="${i * cell}" y="${j * cell}" width="${cell}" height="${cell}" fill="${P.char2}"/>`;
  }
  return out + finder(0, 0) + finder((n - 3) * cell, 0) + finder(0, (n - 3) * cell);
})();
const gift = svg(512, 470, `
<defs>
${lg('g-front', [[0, P.coral1], [1, P.coral2]], 0, 0, 1, 1)}
${lg('g-side', [[0, P.coral2], [1, P.coral3]], 0, 0, 1, 1)}
${lg('g-top', [[0, '#FFC3AE'], [1, P.coral1]], 0, 0, 1, 1)}
${lg('g-rib', [[0, P.cream1], [1, P.cream3]], 0, 0, 1, 0)}
${rg('g-bow', [[0, '#FFFFFF'], [1, P.cream3]], 0.4, 0.3, 0.9)}
</defs>
<ellipse cx="270" cy="440" rx="200" ry="16" fill="#000" opacity="0.10"/>
<polygon points="110,222 360,222 360,420 110,420" fill="url(#g-front)"/>
<polygon points="360,222 430,190 430,388 360,420" fill="url(#g-side)"/>
<polygon points="96,196 346,196 416,164 166,164" fill="url(#g-top)"/>
<rect x="96" y="196" width="264" height="44" fill="${P.coral2}"/>
<polygon points="360,196 430,164 430,208 360,240" fill="${P.coral3}"/>
<rect x="96" y="196" width="264" height="10" fill="#fff" opacity="0.2"/>
<rect x="206" y="196" width="46" height="224" fill="url(#g-rib)"/>
<polygon points="206,196 252,196 322,164 276,164" fill="${P.cream1}"/>
<polygon points="252,196 322,164 322,208 252,240" fill="${P.cream3}" opacity="0.7"/>
<g transform="translate(250 160)">
  <path d="M0 0 C-30 -50 -92 -42 -84 -6 C-78 18 -26 14 0 0 Z" fill="url(#g-bow)" stroke="${P.cream3}" stroke-width="2"/>
  <path d="M0 0 C30 -50 92 -42 84 -6 C78 18 26 14 0 0 Z" fill="url(#g-bow)" stroke="${P.cream3}" stroke-width="2"/>
  <path d="M-60 -18 C-48 -24 -34 -18 -22 -6" fill="none" stroke="${P.cream3}" stroke-width="3" stroke-linecap="round"/>
  <path d="M60 -18 C48 -24 34 -18 22 -6" fill="none" stroke="${P.cream3}" stroke-width="3" stroke-linecap="round"/>
  <ellipse cx="0" cy="-2" rx="20" ry="16" fill="${P.cream2}" stroke="${P.cream3}" stroke-width="2"/>
  <ellipse cx="-5" cy="-7" rx="8" ry="5" fill="#fff" opacity="0.8"/>
</g>
<g transform="translate(346 296) rotate(8)">
  <rect width="130" height="150" rx="14" fill="#000" opacity="0.14" transform="translate(5 6)"/>
  <rect width="130" height="150" rx="14" fill="#fff" stroke="#E4E0D6" stroke-width="2"/>
  <g transform="translate(21 20)">${qr}</g>
  <rect x="26" y="122" width="78" height="8" rx="4" fill="${P.coral2}"/>
</g>
`);

// ---------------------------------------------------------------- cassette
const cassette = svg(512, 330, `
<defs>
${lg('k-body', [[0, '#FFF3D6'], [1, '#EBC77A']], 0, 0, 1, 1)}
${lg('k-label', [[0, '#FFFFFF'], [1, '#F1ECDF']], 0, 0, 0, 1)}
</defs>
<ellipse cx="256" cy="312" rx="200" ry="12" fill="#000" opacity="0.10"/>
<rect x="30" y="30" width="452" height="260" rx="24" fill="url(#k-body)"/>
<rect x="30" y="30" width="452" height="14" rx="7" fill="#fff" opacity="0.35"/>
<rect x="62" y="56" width="388" height="124" rx="12" fill="url(#k-label)"/>
<rect x="76" y="70" width="140" height="12" rx="6" fill="${P.coral2}"/>
<rect x="76" y="92" width="200" height="6" rx="3" fill="#C9C1AE"/>
<line x1="76" x2="436" y1="136" y2="136" stroke="#CFC7B4" stroke-width="2"/>
<line x1="76" x2="436" y1="158" y2="158" stroke="#CFC7B4" stroke-width="2"/>
<text x="304" y="108" font-family="Lora, serif" font-style="italic" font-weight="600" font-size="26" fill="${P.char1}">voices</text>
<rect x="120" y="116" width="272" height="56" rx="28" fill="${P.char2}"/>
<circle cx="176" cy="144" r="26" fill="#fff"/>
<circle cx="336" cy="144" r="26" fill="#fff"/>
${[176, 336].map((x) => Array.from({ length: 6 }, (_, k) => `<rect x="${x - 3}" y="${144 - 22}" width="6" height="12" rx="2" fill="${P.char2}" transform="rotate(${k * 60} ${x} 144)"/>`).join('') + `<circle cx="${x}" cy="144" r="9" fill="${P.char2}"/>`).join('')}
<path d="M150 214 L362 214 L394 290 L118 290 Z" fill="#D9AE55"/>
<path d="M150 214 L362 214 L368 228 L144 228 Z" fill="#fff" opacity="0.25"/>
<circle cx="190" cy="262" r="12" fill="${P.char2}"/><circle cx="322" cy="262" r="12" fill="${P.char2}"/>
${[[44, 44], [468, 44], [44, 276], [468, 276]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6" fill="#C9A24D"/><line x1="${x - 3.5}" x2="${x + 3.5}" y1="${y - 3.5}" y2="${y + 3.5}" stroke="#8C6A22" stroke-width="1.6"/>`).join('')}
`);

// ---------------------------------------------------------------- flask
const flask = svg(400, 480, `
<defs>
${lg('f-glass', [[0, '#FFFFFF', 0.85], [1, '#CFE6FA', 0.55]], 0, 0, 1, 1)}
${lg('f-liq', [[0, P.mint1], [1, P.mint2]], 0, 0, 1, 1)}
<clipPath id="f-clip"><path d="M168 56 L168 190 L58 402 C46 430 62 450 92 450 L308 450 C338 450 354 430 342 402 L232 190 L232 56 Z"/></clipPath>
</defs>
<ellipse cx="200" cy="462" rx="160" ry="14" fill="#000" opacity="0.12"/>
<path d="M168 56 L168 190 L58 402 C46 430 62 450 92 450 L308 450 C338 450 354 430 342 402 L232 190 L232 56 Z" fill="url(#f-glass)"/>
<g clip-path="url(#f-clip)">
  <path d="M30 318 Q90 300 150 318 T270 318 T390 318 L390 470 L30 470 Z" fill="url(#f-liq)"/>
  <path d="M30 318 Q90 300 150 318 T270 318 T390 318" fill="none" stroke="#fff" stroke-opacity="0.6" stroke-width="3"/>
  <circle cx="150" cy="380" r="12" fill="#fff" opacity="0.45"/><circle cx="226" cy="410" r="8" fill="#fff" opacity="0.45"/><circle cx="262" cy="360" r="14" fill="#fff" opacity="0.4"/>
  <circle cx="190" cy="346" r="6" fill="#fff" opacity="0.5"/>
</g>
<path d="M168 56 L168 190 L58 402 C46 430 62 450 92 450 L308 450 C338 450 354 430 342 402 L232 190 L232 56" fill="none" stroke="#8EB9E0" stroke-width="5" stroke-linejoin="round"/>
<ellipse cx="200" cy="56" rx="44" ry="12" fill="#E6F1FC" stroke="#8EB9E0" stroke-width="5"/>
<path d="M182 80 L182 188" stroke="#fff" stroke-width="7" stroke-linecap="round" opacity="0.75"/>
<path d="M142 250 L80 380" stroke="#fff" stroke-width="7" stroke-linecap="round" opacity="0.65"/>
${[0, 1, 2, 3].map((i) => `<line x1="${238 + i * 7}" x2="${262 + i * 7}" y1="${230 + i * 30}" y2="${230 + i * 30}" stroke="#6C93BA" stroke-width="3" stroke-linecap="round"/>`).join('')}
`);

// ---------------------------------------------------------------- clipboard
const clipboard = svg(400, 500, `
<defs>
${lg('cb-board', [[0, P.wood1], [1, P.wood3]], 0, 0, 1, 1)}
${lg('cb-clip', [[0, '#FFFFFF'], [1, '#8892A8']], 0, 0, 1, 1)}
</defs>
<ellipse cx="200" cy="484" rx="130" ry="12" fill="#000" opacity="0.12"/>
<g transform="rotate(5 200 250)">
  <rect x="60" y="46" width="280" height="420" rx="26" fill="url(#cb-board)"/>
  <rect x="84" y="92" width="232" height="352" rx="10" fill="#fff"/>
  <rect x="84" y="92" width="232" height="352" rx="10" fill="none" stroke="#E4E9F2" stroke-width="2"/>
  <rect x="104" y="118" width="120" height="14" rx="7" fill="${P.blue2}"/>
  ${[0, 1, 2, 3, 4].map((i) => `<g transform="translate(104 ${158 + i * 56})">
    <rect width="22" height="22" rx="6" fill="${i < 3 ? P.mint2 : '#fff'}" stroke="${i < 3 ? P.mint2 : '#B8C3D8'}" stroke-width="2.5"/>
    ${i < 3 ? `<path d="M5.5 11.5 l4 4 l7.5 -8.5" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>` : ''}
    <rect x="36" y="2" width="${[140, 110, 150, 120, 90][i]}" height="8" rx="4" fill="#C5D0E2"/>
    <rect x="36" y="14" width="${[90, 120, 70, 100, 130][i]}" height="6" rx="3" fill="#E4EAF4"/>
  </g>`).join('')}
  <path d="M146 40 L254 40 L254 78 C254 90 244 98 232 98 L168 98 C156 98 146 90 146 78 Z" fill="url(#cb-clip)" stroke="#6F7A92" stroke-width="3"/>
  <rect x="172" y="30" width="56" height="26" rx="13" fill="#E5EAF3" stroke="#6F7A92" stroke-width="3"/>
  <circle cx="200" cy="43" r="5" fill="#6F7A92"/>
</g>
`);

// ---------------------------------------------------------------- pill bottle
const bottle = svg(360, 480, `
<defs>
${lg('bo-body', [[0, '#FFC25C'], [0.5, '#E58B14'], [1, '#B25F05']], 0, 0, 1, 0)}
${lg('bo-cap', [[0, '#FFFFFF'], [0.5, '#E9EDF5'], [1, '#B4BDCF']], 0, 0, 1, 0)}
</defs>
<ellipse cx="180" cy="458" rx="120" ry="14" fill="#000" opacity="0.12"/>
<rect x="76" y="150" width="208" height="298" rx="38" fill="url(#bo-body)"/>
<rect x="92" y="170" width="16" height="250" rx="8" fill="#fff" opacity="0.4"/>
<rect x="76" y="226" width="208" height="164" fill="#fff"/>
<rect x="76" y="226" width="208" height="164" fill="#000" opacity="0.04"/>
<rect x="76" y="226" width="208" height="38" fill="${P.blue2}"/>
<rect x="100" y="238" width="96" height="12" rx="6" fill="#fff"/>
<rect x="100" y="284" width="148" height="9" rx="4.5" fill="#C5D0E2"/>
<rect x="100" y="304" width="120" height="9" rx="4.5" fill="#D9E1EE"/>
<rect x="100" y="324" width="136" height="9" rx="4.5" fill="#D9E1EE"/>
<path d="M200 350 h14 v-14 h14 v14 h14 v14 h-14 v14 h-14 v-14 h-14 z" fill="${P.mint2}" transform="translate(-14 -2)"/>
<rect x="64" y="66" width="232" height="100" rx="24" fill="url(#bo-cap)"/>
${Array.from({ length: 13 }, (_, i) => `<line x1="${86 + i * 16.5}" x2="${86 + i * 16.5}" y1="82" y2="150" stroke="#9AA5BC" stroke-opacity="0.45" stroke-width="3" stroke-linecap="round"/>`).join('')}
<rect x="64" y="66" width="232" height="14" rx="7" fill="#fff" opacity="0.7"/>
`);

// ---------------------------------------------------------------- map pin
const pin = svg(300, 420, `
<defs>
${lg('pn-body', [[0, P.coral1], [1, P.coral3]], 0, 0, 1, 1)}
</defs>
<ellipse cx="150" cy="390" rx="76" ry="14" fill="#000" opacity="0.16"/>
<path d="M150 380 C90 290 40 236 40 160 C40 92 88 44 150 44 C212 44 260 92 260 160 C260 236 210 290 150 380 Z" fill="url(#pn-body)"/>
<path d="M62 150 C62 100 98 66 140 62" fill="none" stroke="#fff" stroke-opacity="0.5" stroke-width="10" stroke-linecap="round"/>
<circle cx="150" cy="160" r="52" fill="#fff"/>
<circle cx="150" cy="160" r="52" fill="#000" opacity="0.04"/>
<path d="M126 162 l18 18 l32 -38" fill="none" stroke="${P.coral2}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
`);

// ---------------------------------------------------------------- chat bubbles
const chat = svg(480, 400, `
<defs>
${lg('ch-a', [[0, P.mint1], [1, P.mint2]], 0, 0, 1, 1)}
${lg('ch-b', [[0, '#FFFFFF'], [1, '#E5EAF3']], 0, 0, 1, 1)}
</defs>
<ellipse cx="240" cy="378" rx="170" ry="12" fill="#000" opacity="0.10"/>
<path d="M60 52 H300 C322 52 336 66 336 88 V176 C336 198 322 212 300 212 H150 L96 262 V212 H60 C38 212 24 198 24 176 V88 C24 66 38 52 60 52 Z" fill="url(#ch-b)" stroke="#D6DDEB" stroke-width="2.5"/>
<rect x="52" y="82" width="240" height="12" rx="6" fill="#C5D0E2"/>
<rect x="52" y="108" width="190" height="12" rx="6" fill="#D9E1EE"/>
<rect x="52" y="134" width="150" height="12" rx="6" fill="#D9E1EE"/>
<path d="M440 150 H220 C198 150 184 164 184 186 V262 C184 284 198 298 220 298 H360 L416 348 V298 H440 C462 298 476 284 476 262 V186 C476 164 462 150 440 150 Z" fill="url(#ch-a)"/>
<path d="M200 190 C200 170 212 164 230 164" fill="none" stroke="#fff" stroke-opacity="0.5" stroke-width="6" stroke-linecap="round"/>
<rect x="212" y="188" width="200" height="12" rx="6" fill="#fff" opacity="0.9"/>
<rect x="212" y="214" width="150" height="12" rx="6" fill="#fff" opacity="0.7"/>
<g transform="translate(212 244)"><circle cx="8" cy="8" r="7" fill="#fff"/><circle cx="32" cy="8" r="7" fill="#fff" opacity="0.8"/><circle cx="56" cy="8" r="7" fill="#fff" opacity="0.6"/></g>
`);

// ---------------------------------------------------------------- guides fan
const guideCols = [[P.blue1, P.blue3], [P.coral1, P.coral3], [P.mint1, P.mint3], [P.amber1, P.amber3], [P.pink1, P.pink2], [P.silver2, P.silver3]];
const guides = svg(480, 440, `
<defs>${guideCols.map((c, i) => lg(`gd-${i}`, [[0, c[0]], [1, c[1]]], 0, 0, 1, 1)).join('')}</defs>
<ellipse cx="240" cy="418" rx="170" ry="12" fill="#000" opacity="0.10"/>
${guideCols.map((c, i) => `<g transform="translate(240 392) rotate(${-40 + i * 16})">
  <rect x="-70" y="-330" width="140" height="330" rx="14" fill="url(#gd-${i})" stroke="#fff" stroke-opacity="0.5" stroke-width="2"/>
  <rect x="-52" y="-304" width="${[88, 70, 96, 76, 84, 64][i]}" height="12" rx="6" fill="#fff" opacity="0.9"/>
  <rect x="-52" y="-282" width="60" height="8" rx="4" fill="#fff" opacity="0.6"/>
  <text x="-52" y="-48" font-family="Poppins, Inter, sans-serif" font-weight="700" font-size="40" fill="#fff" fill-opacity="0.9">0${i + 1}</text>
</g>`).join('')}
`);

// ---------------------------------------------------------------- bacteriophage
const phage = svg(360, 500, `
<defs>
${lg('ph-head', [[0, P.blue1], [1, P.blue3]], 0, 0, 1, 1)}
${lg('ph-tail', [[0, '#F4F6FA'], [1, '#B9C1D1']], 0, 0, 1, 0)}
</defs>
<ellipse cx="180" cy="478" rx="130" ry="12" fill="#000" opacity="0.10"/>
<polygon points="180,16 280,70 280,170 180,224 80,170 80,70" fill="url(#ph-head)" stroke="${P.blue3}" stroke-width="4" stroke-linejoin="round"/>
<polygon points="180,16 280,70 180,120 80,70" fill="#fff" opacity="0.22"/>
<polyline points="80,70 180,120 280,70" fill="none" stroke="#fff" stroke-opacity="0.55" stroke-width="3"/>
<line x1="180" y1="120" x2="180" y2="224" stroke="#fff" stroke-opacity="0.45" stroke-width="3"/>
<rect x="156" y="226" width="48" height="16" rx="8" fill="${P.mint2}"/>
<rect x="160" y="242" width="40" height="140" fill="url(#ph-tail)"/>
${Array.from({ length: 9 }, (_, i) => `<line x1="160" x2="200" y1="${252 + i * 14.5}" y2="${256 + i * 14.5}" stroke="#8892A8" stroke-width="3"/>`).join('')}
<polygon points="140,382 220,382 236,404 124,404" fill="${P.mint2}"/>
${[[-1, 0], [-1, 1], [-1, 2], [1, 0], [1, 1], [1, 2]].map(([d, k]) => `<path d="M${180 + d * 50} 400 L${180 + d * (86 + k * 20)} ${430 + k * 6} L${180 + d * (118 + k * 24)} ${470 - k * 6}" fill="none" stroke="${P.char1}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`).join('')}
`);

// ---------------------------------------------------------------- moon (work page)
const moonCraters = [[300, 220, 56], [520, 120, 34], [700, 280, 74], [420, 360, 42], [860, 200, 30], [600, 470, 52], [220, 420, 30], [980, 380, 44]];
const moon = svg(1200, 727, `
<defs>
${rg('mo-body', [[0, '#F5F7FB'], [0.55, '#C9D0DE'], [1, '#6F7993']], 0.3, 0.2, 0.95)}
${rg('mo-shade', [[0.55, '#000', 0], [1, '#05070D', 0.55]], 0.3, 0.2, 0.95)}
<clipPath id="mo-clip"><ellipse cx="600" cy="620" rx="640" ry="620"/></clipPath>
</defs>
<ellipse cx="600" cy="620" rx="640" ry="620" fill="url(#mo-body)"/>
<g clip-path="url(#mo-clip)">
  ${moonCraters.map(([x, y, r]) => `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * 0.9}" fill="#8E98B0" opacity="0.38"/><ellipse cx="${x - r * 0.12}" cy="${y - r * 0.12}" rx="${r * 0.82}" ry="${r * 0.74}" fill="#DDE3EE" opacity="0.55"/>`).join('')}
  <ellipse cx="600" cy="620" rx="640" ry="620" fill="url(#mo-shade)"/>
</g>
`);

// ---------------------------------------------------------------- swirl (the hole). Core at 63% x, 47% y.
const swirlPath = (() => {
  const cx = 227, cy = 108; let d = ''; const turns = 3.4, steps = 220;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps; const a = t * turns * Math.PI * 2; const r = 6 + t * 150;
    const x = cx + Math.cos(a) * r * 1.22; const y = cy + Math.sin(a) * r * 0.78;
    d += (i === 0 ? 'M' : 'L') + x.toFixed(1) + ' ' + y.toFixed(1);
  }
  return d;
})();
const swirl = svg(360, 231, `
<path d="${swirlPath}" fill="none" stroke="#121828" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="227" cy="108" r="12" fill="#121828"/>
`);

// ---------------------------------------------------------------- falling capsule (work page arrival)
const falling = svg(720, 613, `
<defs>
${capsuleHalf('fc-a', P.blue1, P.blue3)}${capsuleHalf('fc-b', '#FFFFFF', '#D5DCE9')}
</defs>
<g stroke="#fff" stroke-opacity="0.35" stroke-width="5" stroke-linecap="round">
  <line x1="560" y1="60" x2="610" y2="-10"/><line x1="610" y1="140" x2="680" y2="50"/><line x1="480" y1="30" x2="520" y2="-20"/>
</g>
<g transform="translate(330 320) rotate(42) scale(2.0)">
  <clipPath id="fc-clip"><rect x="-44" y="-120" width="88" height="240" rx="44"/></clipPath>
  <g clip-path="url(#fc-clip)">
    <rect x="-44" y="-120" width="88" height="120" fill="url(#fc-a)"/>
    <rect x="-44" y="0" width="88" height="120" fill="url(#fc-b)"/>
    <rect x="-44" y="-4" width="88" height="8" fill="#000" opacity="0.10"/>
    <rect x="-30" y="-108" width="12" height="206" rx="6" fill="#fff" opacity="0.5"/>
    <rect x="22" y="-100" width="14" height="196" rx="7" fill="#000" opacity="0.14"/>
  </g>
</g>
<g fill="#fff" opacity="0.9"><path d="M140 80 l6 18 l18 6 l-18 6 l-6 18 l-6 -18 l-18 -6 l18 -6 z"/><path d="M600 420 l4 12 l12 4 l-12 4 l-4 12 l-4 -12 l-12 -4 l12 -4 z"/></g>
`);

// ---------------------------------------------------------------- cutout placeholder (raised hand at 41% x, 2% y of 900x1350)
const person = svg(900, 1350, `
<defs>
${lg('pe-shirt', [[0, P.blue1], [1, P.blue3]], 0, 0, 1, 1)}
${lg('pe-pants', [[0, '#3A4466'], [1, '#121828']], 0, 0, 1, 1)}
${lg('pe-skin', [[0, '#C98F66'], [1, '#8E5A38']], 0, 0, 1, 1)}
</defs>
<g stroke="none">
  <!-- raised arm, hand at (369, 27) -->
  <path d="M392 380 C400 300 392 190 378 70" fill="none" stroke="url(#pe-skin)" stroke-width="62" stroke-linecap="round"/>
  <ellipse cx="372" cy="42" rx="42" ry="46" fill="url(#pe-skin)"/>
  <path d="M340 18 L326 -6 M372 4 L372 -24 M404 18 L420 -4" stroke="url(#pe-skin)" stroke-width="16" stroke-linecap="round" opacity="0"/>
  <!-- head -->
  <ellipse cx="440" cy="330" rx="78" ry="92" fill="url(#pe-skin)"/>
  <path d="M362 318 C362 244 410 224 446 224 C494 224 520 262 518 318 C494 280 440 272 362 318 Z" fill="${P.char2}"/>
  <!-- torso -->
  <path d="M312 470 C330 410 380 398 440 398 C500 398 560 410 578 470 L596 700 L286 700 Z" fill="url(#pe-shirt)"/>
  <!-- down arm -->
  <path d="M312 470 C284 540 270 620 266 700" fill="none" stroke="url(#pe-shirt)" stroke-width="64" stroke-linecap="round"/>
  <ellipse cx="266" cy="716" rx="32" ry="38" fill="url(#pe-skin)"/>
  <path d="M578 470 C600 540 612 620 616 700" fill="none" stroke="url(#pe-shirt)" stroke-width="64" stroke-linecap="round"/>
  <ellipse cx="616" cy="716" rx="32" ry="38" fill="url(#pe-skin)"/>
  <!-- legs -->
  <path d="M296 690 L586 690 L574 1260 L458 1260 L440 840 L422 1260 L308 1260 Z" fill="url(#pe-pants)"/>
  <rect x="294" y="1252" width="130" height="50" rx="22" fill="#F4F6FA"/>
  <rect x="456" y="1252" width="130" height="50" rx="22" fill="#F4F6FA"/>
</g>
`);

export const objects = {
  mortar, laptop, books, clapper, hanger, mic, phone, spool, capsules, gift, cassette,
  flask, clipboard, bottle, pin, chat, guides, phage, moon, swirl, falling, person,
};
export const palette = P;
