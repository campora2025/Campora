// Test file untuk mengecek data produk
const { products } = require('./src/data/products.js');
const { categories } = require('./src/data/categories.js');

console.log('Jumlah produk:', products.length);
console.log('Kategori:', categories);

// Tampilkan produk satuan
console.log('\n=== PRODUK SATUAN ===');
products.filter(p => p.category === 'satuan').forEach(p => {
  console.log(`${p.name}: Rp ${p.price.toLocaleString()}`);
});

// Tampilkan bundle
console.log('\n=== BUNDLE KKN ===');
products.filter(p => p.category === 'bundle').forEach(p => {
  console.log(`${p.name}: Rp ${p.price.toLocaleString()}`);
});
