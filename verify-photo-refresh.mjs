import fs from 'node:fs';
import assert from 'node:assert/strict';
const products = JSON.parse(fs.readFileSync('dist/app.js', 'utf8').match(/^const products=(\[[\s\S]*?\n\]);/)[1]);
assert.equal(products.length, 33);
for (const product of products) {
  assert(product.image.endsWith('-sage.png'));
  assert(fs.existsSync(`dist/${product.image}`));
}
const html = fs.readFileSync('dist/index.html', 'utf8');
for (const [, asset] of html.matchAll(/src="(assets\/products\/[^\"]+)"/g)) {
  assert(asset.endsWith('-sage.png'));
  assert(fs.existsSync(`dist/${asset}`));
}
assert.equal(products.find(p => p.id === 'decorative-candles').price, 7000);
assert.equal(products.find(p => p.id === 'decorative-candles-medium').price, 12000);
assert.equal(products.find(p => p.id === 'decorative-candles-large').price, 22000);
console.log('All 33 catalog photos and featured photos use existing sage assets; candle prices preserved.');
