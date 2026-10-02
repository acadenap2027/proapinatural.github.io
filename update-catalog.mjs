import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const uploads = fs.readdirSync(path.join(root, 'images'));
// Keep existing IDs so saved bags continue to reference the same photographs.
// id, filename prefix, Spanish name, English name, presentation, category
const entries = [
  ['honey-100', 'BOTELLA MIEL', 'Botella de miel', 'Honey bottle', '1.000 g', 'pantry'],
  ['honey-500', 'MEDIA DE MIEL', 'Media de miel', 'Honey bottle', '500 g', 'pantry'],
  ['honey-pouch-small', 'MIEL DOY PACK 150', 'Miel doy pack', 'Honey pouch', '150 g', 'pantry'],
  ['honey-family', 'GARRAFA DE MIEL', 'Garrafa de miel', 'Honey jug', '2,8 kg', 'pantry'],
  ['honey-jar-small', 'MIEL FRASCO 300', 'Miel en frasco', 'Honey jar', '300 g', 'pantry'],
  ['honey-jar-medium', 'MIEL FRASCO  625', 'Miel en frasco', 'Honey jar', '625 g', 'pantry'],
  ['honey-jar-large', 'FRASCO MIEL', 'Miel en frasco', 'Honey jar', '1.350 g', 'pantry'],
  ['honey-pouch-700', 'MIEL DOY PACK 700', 'Miel doy pack', 'Honey pouch', '700 g', 'pantry'],
  ['propolis', 'EXRACTO DE PROPOLEO', 'Extracto de propóleo', 'Propolis extract', '30 cc', 'care'],
  ['pollen-large', 'POLEN NATURAL 1.000', 'Polen natural', 'Natural pollen', '1.000 g', 'pantry'],
  ['pollen-small', 'POLEN NATURAL  125', 'Polen natural', 'Natural pollen', '125 g', 'pantry'],
  ['pollen-medium', 'POLEN NATURAL  250', 'Polen natural', 'Natural pollen', '250 g', 'pantry'],
  ['colirio', 'COLIRIO DE MIEL', 'Colirio de miel', 'Honey eye drops', '', 'care'],
  ['floramiel-deodorant', 'CREMA FACIAL JALEA', 'Crema facial de jalea real', 'Royal jelly facial cream', '70 g', 'care'],
  ['floramiel-soap', 'JABON DE MIEL', 'Jabón de miel', 'Honey soap', '90 g', 'care'],
  ['vinamax', 'VINAGRE DE MANZANA', 'Vinagre de manzana', 'Apple vinegar', '500 ml', 'pantry'],
  ['apinotox', 'APINOTOX', 'Apinotox', 'Apinotox', '240 ml', 'care'],
  ['floramiel-cream', 'CREMA FACIAL PROPOLEO', 'Crema facial de propóleo', 'Propolis facial cream', '70 g', 'care'],
  ['energ-abeja', 'EMBRIOABEJA', 'Embrioabeja', 'Embrioabeja', '10 unidades', 'pantry'],
  ['floramiel-lotion', 'CREMA PARA MANOS', 'Crema para manos', 'Hand cream', '120 g', 'care'],
  ['royal-jelly', 'JALEA REAL', 'Jalea real', 'Royal jelly', '20 g', 'pantry'],
  ['floramiel-shampoo', 'SHAMPOO DE MIEL', 'Shampoo de miel', 'Honey shampoo', '250 ml', 'care'],
  ['beetoxin', 'GEL CON APITOXINA', 'Gel con apitoxina', 'Apitoxin gel', '60 g', 'care'],
  ['espinal-honey-glass', 'BOTELLA DE MIEL', 'Botella de miel', 'Honey bottle', '1.050 g', 'pantry'],
  ['apple-vinegar', 'VINAGRE DE SIDRA', 'Vinagre de sidra de manzana con madre', 'Apple cider vinegar with the mother', '490 ml', 'pantry'],
  ['espinal-propolis', 'PROPOLEO COMPUESTO', 'Propóleo compuesto', 'Compound propolis', '320 g', 'pantry'],
  ['espinal-honey', 'MIEL  355', 'Miel', 'Honey', '355 g', 'pantry'],
  ['honey-propolis', 'PROPOLEO  ', 'Propóleo', 'Propolis', '300 g', 'pantry'],
  ['decorative-candles', 'Velas decorativas', 'Velas decorativas', 'Decorative candles', '', 'home'],
];
const spanish = {};
const products = entries.map(([id, prefix, es, en, size, category]) => {
  const matches = uploads.filter(file => file.startsWith(prefix));
  if (matches.length !== 1) throw new Error(`Expected one upload for ${prefix}, got ${matches.length}`);
  const sourceFile = matches[0];
  const priceMatch = sourceFile.match(/(?:\$\s*|\s)(\d{1,3}(?:\.\d{3})+)\.jpeg$/i);
  // Candle price and hand cream typo confirmed by the owner on October 2, 2026.
  const price = id === 'decorative-candles' ? 5000 : id === 'floramiel-lotion' ? 30000 : Number(priceMatch?.[1].replaceAll('.', ''));
  if (!Number.isInteger(price) || price <= 0) throw new Error(`Missing price: ${sourceFile}`);
  const name = en + (size ? ` · ${size.replace('unidades', 'units').replaceAll('.', ',').replace('2,8', '2.8')}` : '');
  const nameEs = es + (size ? ` · ${size}` : '');
  const imageFile = `${id}.jpeg`;
  fs.copyFileSync(path.join(root, 'images', sourceFile), path.join(root, 'dist/assets/products', imageFile));
  const edited = `${id}-studio.png`;
  const image = `assets/products/${fs.existsSync(path.join(root, 'dist/assets/products', edited)) ? edited : imageFile}`;
  const tag = category === 'pantry' ? 'THE PANTRY' : category === 'home' ? 'FOR YOUR HOME' : 'DAILY CARE';
  const subtitle = category === 'pantry' ? 'For your pantry and daily rituals.' : category === 'home' ? 'A little warmth for your home.' : 'Explore our personal care collection.';
  spanish[id] = { name: nameEs, tag: category === 'pantry' ? 'LA DESPENSA' : category === 'home' ? 'PARA TU HOGAR' : 'CUIDADO DIARIO', subtitle: category === 'pantry' ? 'Para tu despensa y tus rituales diarios.' : category === 'home' ? 'Un poco de calidez para tu hogar.' : 'Descubre nuestra colección de cuidado personal.', description: `${nameEs}. Consulta los ingredientes y las instrucciones en el empaque del producto.` };
  return { id, name, category, price, currency: 'COP', size, tag, subtitle, image, sourceFile, description: `${name}. See the product packaging for ingredients and directions.` };
});
const appPath = path.join(root, 'dist/app.js');
fs.writeFileSync(appPath, fs.readFileSync(appPath, 'utf8').replace(/^const products=\[[\s\S]*?\n\];/, `const products=${JSON.stringify(products, null, 2)};`));
const i18nPath = path.join(root, 'dist/i18n.js');
fs.writeFileSync(i18nPath, fs.readFileSync(i18nPath, 'utf8').replace(/const spanishProducts = \{[\s\S]*?\n\};/, `const spanishProducts = ${JSON.stringify(spanish, null, 2)};`));
console.log(`Updated ${products.length} products from named uploads.`);
