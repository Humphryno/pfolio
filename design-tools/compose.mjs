import { chromium } from 'playwright-core';
import sharp from 'sharp';
import fs from 'node:fs';
import { objects, palette as P } from './objects.mjs';

const out = process.argv[2] || './out';
fs.mkdirSync(out, { recursive: true });
const obj = (name, style) => `<div style="position:absolute;${style}">${objects[name].replace('<svg ', '<svg style="width:100%;height:100%;display:block" ')}</div>`;
const base = (inner, bg) => `<html><head><style>
  *{box-sizing:border-box;margin:0}
  body{width:1200px;height:912px;position:relative;overflow:hidden;font-family:Poppins,Inter,sans-serif;background:${bg}}
  .t{position:absolute;left:84px}
  .chip{display:inline-block;border-radius:999px;padding:8px 18px;font-size:22px;font-weight:600;margin:0 10px 10px 0}
</style></head><body>${inner}</body></html>`;

const tiles = {
  'project-naralt': base(`
    <div style="position:absolute;inset:0;background:radial-gradient(900px 700px at 80% 55%, rgba(30,111,192,.55), transparent 70%)"></div>
    ${obj('phone', 'right:80px;top:70px;width:520px;height:740px')}
    <div class="t" style="top:150px;color:#fff">
      <div style="font-size:150px;font-weight:700;letter-spacing:-6px;line-height:1">naralt</div>
      <div style="font-family:Lora,serif;font-style:italic;font-size:46px;margin-top:26px;line-height:1.2;color:#BFD9F5;max-width:520px">Every job Deserves a record.</div>
      <div style="margin-top:60px;max-width:560px">
        ${['dry cleaners','tailors','cobblers','phone repairers','car wash'].map((c) => `<span class="chip" style="background:rgba(255,255,255,.1);color:#fff;border:2px solid rgba(255,255,255,.28)">${c}</span>`).join('')}
      </div>
    </div>`, '#121828'),
  'project-memora': base(`
    <div style="position:absolute;inset:0;background:radial-gradient(800px 600px at 25% 20%, #fff, transparent 70%)"></div>
    ${obj('gift', 'right:60px;top:120px;width:560px;height:515px')}
    ${obj('cassette', 'right:150px;top:560px;width:440px;height:284px;transform:rotate(-6deg)')}
    <div class="t" style="top:150px;color:#121828">
      <div style="font-size:30px;font-weight:600;letter-spacing:12px;color:#B2402B">MEMO•RA</div>
      <div style="font-family:Lora,serif;font-weight:600;font-size:92px;margin-top:26px;line-height:1.02;letter-spacing:-2px;max-width:560px">The gift they'll carry forever.</div>
      <div style="margin-top:48px;max-width:520px">
        ${['a letter','photos','a song','voices'].map((c) => `<span class="chip" style="background:#fff;color:#B2402B;border:2px solid #FFC3AE">${c}</span>`).join('')}
      </div>
    </div>`, 'linear-gradient(135deg,#FFE9DF,#FFD0DA)'),
  'project-tend': base(`
    ${obj('pin', 'right:250px;top:110px;width:330px;height:462px')}
    ${obj('clipboard', 'right:30px;top:330px;width:340px;height:425px;transform:rotate(6deg)')}
    <div class="t" style="top:170px;color:#0F3B2C">
      <div style="font-size:112px;font-weight:700;letter-spacing:-5px;line-height:1">TEND<span style="color:#2C7F60">.ng</span></div>
      <div style="font-family:Lora,serif;font-style:italic;font-size:46px;margin-top:26px;line-height:1.2;max-width:480px">A civic reporting platform.</div>
      <div style="margin-top:52px"><span class="chip" style="background:#fff;color:#2C7F60;border:2px solid #A6E6C8">Civic</span><span class="chip" style="background:#fff;color:#2C7F60;border:2px solid #A6E6C8">Built with AI tools</span></div>
    </div>`, 'linear-gradient(135deg,#E3F7EE,#A6E6C8)'),
  'project-pran': base(`
    <div style="position:absolute;inset:0;background:radial-gradient(700px 600px at 78% 40%, rgba(111,177,242,.45), transparent 70%)"></div>
    ${obj('phage', 'right:250px;top:100px;width:420px;height:583px')}
    ${obj('flask', 'right:50px;top:420px;width:300px;height:360px;transform:rotate(8deg)')}
    <div class="t" style="top:190px;color:#fff">
      <div style="font-size:170px;font-weight:700;letter-spacing:-8px;line-height:1">PRAN</div>
      <div style="font-family:Lora,serif;font-style:italic;font-size:44px;margin-top:22px;line-height:1.2;color:#BFD9F5;max-width:430px">A website for a phage research network.</div>
      <div style="margin-top:52px"><span class="chip" style="background:rgba(255,255,255,.1);color:#fff;border:2px solid rgba(255,255,255,.28)">Research</span><span class="chip" style="background:rgba(255,255,255,.1);color:#fff;border:2px solid rgba(255,255,255,.28)">Health</span></div>
    </div>`, 'linear-gradient(135deg,#0E2238,#12457F)'),
  'project-assistant': base(`
    ${obj('chat', 'right:20px;top:330px;width:520px;height:433px')}
    <div class="t" style="top:150px;color:#0F3B2C">
      <div style="font-size:30px;font-weight:600;letter-spacing:10px;color:#2C7F60">CONCEPT</div>
      <div style="font-size:84px;font-weight:700;letter-spacing:-3px;margin-top:22px;line-height:1.04;max-width:640px">WhatsApp Business Assistant</div>
      <div style="font-family:Lora,serif;font-style:italic;font-size:38px;margin-top:28px;line-height:1.25;max-width:500px">An AI helper for Nigerian small businesses.</div>
    </div>`, 'linear-gradient(135deg,#EAF8F1,#BDEBD3)'),
  'project-bundle': base(`
    ${obj('guides', 'right:10px;top:200px;width:520px;height:477px')}
    <div class="t" style="top:150px;color:#4A2F05">
      <div style="font-size:30px;font-weight:600;letter-spacing:10px;color:#A8680C">SIX GUIDES</div>
      <div style="font-size:88px;font-weight:700;letter-spacing:-3px;margin-top:22px;line-height:1.02;max-width:520px">The AI prompting bundle</div>
      <div style="font-family:Lora,serif;font-style:italic;font-size:40px;margin-top:28px;line-height:1.25;max-width:460px">For founders who don't code.</div>
    </div>`, 'linear-gradient(135deg,#FFF4D8,#FFD98A)'),
};

const og = `<html><head><style>*{box-sizing:border-box;margin:0}body{width:1200px;height:630px;position:relative;overflow:hidden;background:#F6F5F1;font-family:Poppins,Inter,sans-serif;color:#121828}</style></head><body>
<svg viewBox="0 0 1200 630" style="position:absolute;inset:0;width:100%;height:100%"><path d="M-20 585 C160 520 300 620 470 575 C640 530 760 610 940 560 C1040 532 1120 500 1220 470" fill="none" stroke="#121828" stroke-width="3" stroke-linecap="round"/><circle cx="1219" cy="470" r="7" fill="#121828"/></svg>
${obj('mortar', 'left:700px;top:340px;width:240px;height:215px;transform:rotate(-4deg)')}
${obj('phone', 'right:60px;top:40px;width:280px;height:398px')}
<div style="position:absolute;left:72px;top:150px">
  <div style="font-size:26px;font-weight:600;letter-spacing:8px;color:#1E6FC0">PHARMACY · PRODUCT</div>
  <div style="font-family:Lora,serif;font-weight:600;font-size:132px;letter-spacing:-4px;line-height:1.05;margin-top:12px">Humphrey</div>
  <div style="font-size:34px;margin-top:10px;color:#566079;max-width:600px;line-height:1.3">Pharmacy student. Co-founder of Naralt.</div>
</div></body></html>`;

const icon = (size, r) => `<html><body style="margin:0;background:transparent"><svg viewBox="0 0 100 100" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="${r}" fill="#121828"/><text x="50" y="69" text-anchor="middle" font-family="Lora, serif" font-weight="600" font-size="64" fill="#fff">H</text><circle cx="79" cy="30" r="7" fill="#6FB1F2"/></svg></body></html>`;
const cursor = (size) => `<html><body style="margin:0;background:transparent"><svg viewBox="0 0 43 44" width="${size}" height="${size * 44 / 43}" xmlns="http://www.w3.org/2000/svg"><path d="M6 4 L6 34 L14 27 L20 40 L26 37.5 L20 25 L31 25 Z" fill="#121828" stroke="#fff" stroke-width="3" stroke-linejoin="round"/><path d="M9 11 L9 27" stroke="#6FB1F2" stroke-width="2.5" stroke-linecap="round" opacity=".9"/></svg></body></html>`;

const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
async function shot(html, w, h, file, scale = 1, type = 'webp', transparent = false) {
  const p = await b.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: scale });
  await p.setContent(html); await p.waitForTimeout(150);
  const png = await p.screenshot({ omitBackground: transparent, clip: { x: 0, y: 0, width: w, height: h } });
  if (type === 'webp') await sharp(png).webp({ quality: 88 }).toFile(`${out}/${file}.webp`);
  else fs.writeFileSync(`${out}/${file}.png`, png);
  await p.close();
}
for (const [n, html] of Object.entries(tiles)) await shot(html, 1200, 912, n);
await shot(og, 1200, 630, 'og', 1, 'png');
await shot(icon(180, 22), 180, 180, 'apple-touch-icon', 1, 'png', true);
await shot(icon(64, 14), 64, 64, 'favicon-64', 1, 'png', true);
await shot(icon(32, 7), 32, 32, 'favicon-32', 1, 'png', true);
await shot(icon(16, 4), 16, 16, 'favicon-16', 1, 'png', true);
await shot(cursor(43), 43, 44, 'cursor-arrow', 1, 'png', true);
await shot(cursor(43), 43, 44, 'cursor-arrow@2x', 2, 'png', true);
await b.close();
console.log('composed');
