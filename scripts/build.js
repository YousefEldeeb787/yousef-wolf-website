const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
const entries = [
  ['index.html', 'index.html'],
  ['en', 'en'],
  ['ar', 'ar'],
  ['style.css', 'style.css'],
  ['script.js', 'script.js'],
  ['public/images', 'images'],
  ['cover_photos', 'cover_photos'],
  ['Bioinformatics_project_photos', 'Bioinformatics_project_photos'],
  ['Biostatistics_project_photos', 'Biostatistics_project_photos'],
  ['stress_prediction_photos', 'stress_prediction_photos'],
  ['robots.txt', 'robots.txt'],
  ['sitemap.xml', 'sitemap.xml']
];

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

for (const [source, destination] of entries) {
  const sourcePath = path.join(root, source);
  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Required build input is missing: ${source}`);
  }
  fs.cpSync(sourcePath, path.join(output, destination), { recursive: true });
}

console.log(`Built static site to ${path.relative(root, output)}`);
