import { chromium } from 'playwright-core';
import sharp from 'sharp';
import fs from 'node:fs';
import { objects } from './objects.mjs';

const out = process.argv[2] || './out';
fs.mkdirSync(out, { recursive: true });
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
const SCALE = 1.5;
for (const [name, svg] of Object.entries(objects)) {
  const m = svg.match(/viewBox="0 0 (\d+) (\d+)"/);
  const w = +m[1], h = +m[2];
  const p = await b.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: SCALE });
  await p.setContent(`<html><body style="margin:0;background:transparent">${svg}</body></html>`);
  const png = await p.screenshot({ omitBackground: true, clip: { x: 0, y: 0, width: w, height: h } });
  fs.writeFileSync(`${out}/${name}.png`, png);
  await sharp(png).webp({ quality: 92, alphaQuality: 100 }).toFile(`${out}/${name}.webp`);
  await p.close();
  console.log(name, w, h);
}
await b.close();
